# JWT sign-out flow

- Date: 2026-11-15
- Related: [credentials authentication](../specs/03-authentication-sign-up.md),
  [ADR-0003](../decisions/0003-credentials-authentication.md)

With Auth.js JWT sessions, sign-out clears the browser's session cookie through
the auth library. A protected Server Action invokes `signOut` and redirects to
the fixed sign-in route. This ends the browser session; it does not revoke a
copied token on another device, which remains a limitation of stateless JWT
sessions without a revocation store.

**Practical takeaway:** delegate cookie lifecycle to the auth library and keep
the post-sign-out destination fixed and internal.
