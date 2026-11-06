# ADR-0003: Credentials Authentication And JWT Sessions

- Status: Accepted
- Date: 2026-11-06
- Review trigger: Adding a provider, changing session storage, enabling
  verification/recovery, or preparing public production rollout.

## Context

The app already includes NextAuth Credentials, Prisma/PostgreSQL, and bcrypt,
but credentials were not verified, registration was not implemented, and no
authentication/session decision had been recorded. The approved sign-up slice
requires account creation, automatic sign-in, and a protected landing route.

## Problem

The application needs a consistent server-authoritative flow for password
creation and verification without introducing a new provider, persistence
model, or dependency.

## Options Considered

### Option A: Use an external managed identity provider

Delegate credential storage, sessions, verification, and recovery to a
third-party provider. This may reduce application-owned security work, but
requires a provider decision, integration, and dependency on an external
service that the current slice does not authorize.

### Option B: Add a database adapter and database-backed sessions

Persist Auth.js sessions alongside users. This supports centralized session
revocation but adds adapter/configuration and schema requirements not needed
for this initial flow.

### Option C: Reuse NextAuth Credentials with Prisma and JWT sessions

Keep the existing provider and user table, hash passwords with the already
installed bcrypt package, and use signed JWT session cookies without a
database adapter.

## Decision

Adopt Option C for the credentials sign-up slice:

- Use the existing NextAuth Credentials provider and explicitly select JWT
  session strategy.
- Persist normalized email, name, and bcrypt password hash in the existing
  Prisma `User` model. Use bcrypt cost factor 12 and reject passwords over 72
  UTF-8 bytes.
- Verify credentials by comparing the submitted password with the stored hash.
  Use a fixed-cost dummy hash comparison for unknown accounts or malformed
  legacy values to reduce timing-based email enumeration. Never support
  plaintext password fallback.
- Expose the Auth.js handlers through the App Router route handler and preserve
  the existing edge-safe `auth.config.ts` boundary for proxy authorization.
- Register via a validated Server Action, then call the provider sign-in flow
  with the fixed `/dashboard` redirect.
- Do not add a database adapter, schema migration, or dependency in this slice.
- Treat rate limiting, email verification, and legacy plaintext-account
  migration/reset as prerequisites for broader production rollout.

## Consequences

- Account creation and credential verification share one password format.
- JWT sessions avoid a session table and fit the existing provider setup, but
  do not provide immediate per-session database revocation.
- A failed automatic sign-in can occur after account persistence; the UI must
  report this partial success and offer the sign-in route.
- No migration is needed for new accounts, but legacy plaintext credentials
  cannot be used safely and must be reset or migrated separately.
- Rollback must not remove hash verification while retaining accounts created
  by this slice. Disable registration separately if necessary; existing hashed
  accounts remain durable.
- Public production rollout remains blocked until rate limiting is added.

## Alternatives Rejected

- An external identity provider and a database adapter are deferred to avoid
  selecting new services or schema without a demonstrated requirement.
- Plaintext storage or plaintext fallback is rejected because database
  disclosure would expose reusable credentials.
- Caller-controlled post-signup redirects are rejected to prevent open
  redirects.

## Related Specifications And Decisions

- `../specs/03-authentication-sign-up.md`
- `../specs/00-project-foundation.md`
- `0001-adr-process.md`
- `0002-catalog-runtime-and-data-access.md`
