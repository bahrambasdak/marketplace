# Backend Rules

- Define input and output contracts explicitly.
- Validate untrusted input at the boundary.
- Enforce authorization in trusted server code for every protected operation.
- Use stable error semantics without exposing sensitive internals.
- Make pagination, filtering, sorting, and idempotency explicit where relevant.
- Keep business invariants in domain/application boundaries rather than controllers.

Reason: APIs are security and compatibility boundaries, not thin transport wrappers.
