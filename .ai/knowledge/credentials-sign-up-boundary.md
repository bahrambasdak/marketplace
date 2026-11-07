# Credentials sign-up boundary

- Date: 2026-11-06
- Related: [sign-up specification](../specs/03-authentication-sign-up.md),
  [ADR-0003](../decisions/0003-credentials-authentication.md)

Registration and authentication are separate operations: the Server Action
validates untrusted form data and persists a password hash, then Auth.js
Credentials verifies the submitted password and establishes the JWT session.
The successful path uses a fixed internal redirect; action results never
contain a Prisma user record.

The existing user creation surface also needs the same validation and hashing
policy, and data reads must select only safe fields. Legacy plaintext passwords
cannot be supported as a fallback; reset or migrate them separately. Rate
limiting remains required before public production rollout.

**Practical takeaway:** keep hashing and credential comparison server-only,
share the validation policy across every user-creation path, and return only
the identity fields each caller needs.

## Debugging lesson (2026-11-07)

The sign-up action bypassed `createUser` and wrote the submitted password
directly to Prisma. Credential verification correctly accepts only bcrypt
hashes, so those new accounts could not sign in. Route registration through
the shared user-creation service; never add plaintext fallback verification.
