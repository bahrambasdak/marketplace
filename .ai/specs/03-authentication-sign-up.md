# Feature Specification: Credentials Sign-Up

- Status: Approved
- Risk: CRITICAL
- Owner: Frontend and Backend/Data
- Dependencies: `00-project-foundation.md`, ADR-0003, NextAuth, Prisma, PostgreSQL

## Objective

Allow a visitor to create an account with an email and password, establish a
credentials session, and arrive at a protected dashboard.

## User Problem

Visitors need a secure, accessible path to create an account and begin using
the application without exposing credentials or account data.

## Scope

- Provide a responsive `/sign-up` page and form for name, email, and password.
- Validate submitted data on the server and provide useful validation and
  failure feedback in the form.
- Normalize email addresses and persist only bcrypt password hashes in the
  existing `User` model.
- Verify credentials against those hashes and establish an Auth.js JWT session.
- Redirect successful sign-ups to the fixed `/dashboard` route.
- Provide a protected, minimal dashboard landing page.
- Ensure all existing password-writing code uses the same validation and
  hashing policy and never returns password hashes to the browser.

## Out Of Scope

- Email verification, password recovery, OAuth, MFA, account deletion, and
  account/profile management.
- Roles, vendor onboarding, and authorization beyond the protected dashboard.
- Adding a new database model, migration, authentication provider, or package.
- Implementing a distributed rate limiter in this slice.

Production rollout is blocked until rate limiting is provided for public
registration and credential sign-in. Any existing plaintext credentials must
be reset or migrated through a separately reviewed process; plaintext fallback
verification is prohibited.

## Actors And Permissions

- Visitor: may submit registration credentials and receives no access to other
  users' records.
- Registered user: may establish a session with valid credentials and access
  the protected dashboard.

## User Stories

- As a visitor, I can submit my name, email, and password to create an account.
- As a visitor, I receive safe feedback for invalid input, an existing email,
  or a failed request.
- As a newly registered user, I am signed in and redirected to `/dashboard`.
- As a user, I cannot access the dashboard without a valid session.

## Functional Requirements

1. The sign-up form contains labeled name, email, and password fields.
2. Registration input is validated in the Server Action regardless of client
   validation.
3. Email is trimmed and lower-cased before persistence.
4. Passwords must be at least 8 characters and at most 72 UTF-8 bytes, matching
   bcrypt's input limit.
5. Passwords are hashed with bcrypt before persistence. Raw passwords and
   hashes are never included in action results or page props.
6. The unique email constraint is the source of truth for concurrent
   registrations; duplicate conflicts return a generic, actionable error.
7. Credentials authorization verifies the hash and returns only safe identity
   fields.
8. Successful registration establishes a credentials session and redirects to
   the fixed internal path `/dashboard`; caller-provided redirect URLs are not
   accepted.
9. A partial failure after account creation reports that the account exists
   but automatic sign-in failed, without attempting to create a duplicate.

## Data Model

Use the existing `User` model and its unique `email` field. Store bcrypt hashes
in the existing `password` field; this slice requires no schema migration.

## API Contracts

The sign-up Server Action accepts `FormData` with `name`, `email`, and
`password`. It returns only a safe error result for validation, duplicate, or
automatic sign-in failures; success redirects and does not return a user
record.

## Frontend Requirements

- Show field-level client validation and an accessible server error state.
- Disable the submit button and show a busy state while submitting.
- Preserve keyboard operation and use responsive layout within the existing
  application shell.
- Provide a link to the sign-in page.

## Backend Requirements

- Validate all `FormData` values before database access.
- Use the existing Prisma client and unique database constraint.
- Verify passwords only on the server and avoid returning persisted records.
- Keep credentials and database errors out of user-visible messages.

## Error, Loading, And Empty States

- Invalid input: show field-level messages before submission and a safe server
  error if server validation rejects the request.
- Duplicate email or database uniqueness race: show a generic account creation
  error with a sign-in path.
- Other persistence failures: propagate to the normal server error boundary;
  do not report success.
- Automatic sign-in failure after persistence: explain that account creation
  succeeded but automatic sign-in did not, and link to sign-in.
- Loading: disable repeat submission and expose the submitting label to
  assistive technology.

## Security Considerations

- Trust boundary: public Server Action `FormData` is untrusted. Next.js's
  Server Action CSRF protection does not replace input validation or abuse
  controls.
- Assets: password credentials, password hashes, email addresses, and session
  cookies.
- Risks: credential stuffing, automated account creation, email enumeration,
  open redirects, password-hash disclosure, and legacy plaintext records.
- Mitigations: server-side validation, bcrypt, unique constraints, generic
  duplicate errors, a fixed-cost comparison for unknown or malformed
  credentials, fixed internal redirect, safe action return shapes, and
  protected dashboard checks.
- Rate limiting is a required production release gate and remains unimplemented
  until an approved shared/distributed mechanism exists.

## Testing Requirements

- Verify validation, duplicate handling, password hashing, credential
  verification, automatic sign-in, safe redirect, and protected dashboard
  behavior.
- Exercise failed persistence and partial automatic sign-in failure.
- The repository currently has no configured test runner; run available lint,
  type-check, build, and Prisma validation commands. Do not claim a behavioral
  test passed without executing it.

## Verification Evidence

- `pnpm exec tsc --noEmit`: passed.
- `pnpm exec eslint src`: passed.
- `pnpm prisma:validate`: passed.
- `pnpm build`: passed.
- Production route smoke test: `/sign-up` returned 200; unauthenticated
  `/dashboard` redirected to `/sign-in`.
- `pnpm lint` currently reports generated `.next/dev` JavaScript errors; linting
  application source directly passed.
- Database-backed registration could not be exercised because the Docker
  daemon was unavailable. No automated test runner is configured.

## Risks And Mitigations

- Existing plaintext password rows will not authenticate after hash verification
  is enabled. Reset or migrate those accounts before any rollout that retains
  them; do not add a plaintext compatibility branch.
- Registration and credential sign-in remain abuseable without rate limiting.
  Do not enable public production rollout until that control exists.
- Auth.js session behavior or provider changes require reviewing ADR-0003.

## Open Questions

- What distributed rate-limiting mechanism should be selected before production
  rollout?
- What email verification and password recovery behavior should a later
  authentication slice provide?

## Acceptance Criteria

- [ ] A visitor can create an account through `/sign-up`.
- [ ] Persisted passwords are hashes and cannot be returned to the browser.
- [ ] Successful registration signs in and reaches the protected dashboard.
- [ ] Invalid, duplicate, and failed requests do not create an unsafe session.
- [ ] The user flow is keyboard accessible and responsive.
- [ ] Required static checks pass and remaining production security gates are
  documented.

## Quality Gates

- [x] Requirement and architecture approved
- [x] Data model reviewed; no migration required
- [x] Server action contract defined
- [ ] Frontend behavior verified
- [x] Testing evidence recorded, including unavailable database validation
- [x] Security gates documented
- [ ] Code review
- [x] Learning and knowledge captured
- [ ] Final acceptance

## Learning Objectives

- Understand why a public Server Action is still an untrusted input boundary.
- Understand how password hashing and credential verification work together.
- Understand the trade-offs of JWT sessions when no database adapter is used.
