# Database Rules

- Change schemas through reviewed migrations.
- Use constraints to protect invariants and indexes tied to measured query patterns.
- Define transaction boundaries explicitly.
- Prefer normalized ownership models until a measured read need justifies otherwise.
- Treat destructive or high-volume migrations as high or critical risk.
- Never expose persistence shape as an accidental public API.

Reason: data errors are durable and often more expensive than application errors.
