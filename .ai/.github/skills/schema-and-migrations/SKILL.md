---
name: schema-and-migrations
description: Use when modeling marketplace entities, constraints, indexes, migrations, transactions, or query performance.
---

Model ownership and invariants first. Define keys, relationships, nullability, uniqueness, constraints, indexes tied to queries, transaction boundaries, migration safety, rollback/forward strategy, and seed/test data needs. Consider concurrency and data volume before implementation.

Learning checkpoint: explain the invariant, transaction boundary, and reason for every non-obvious index.
