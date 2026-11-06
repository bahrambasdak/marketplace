# Architecture

The initial catalog uses one Next.js deployment with server-rendered pages and REST route handlers. Server-only application and persistence modules provide logical boundaries within the app; pages and handlers share those modules without making internal HTTP requests. PostgreSQL is accessed through Prisma, and Docker Compose provides the local database. See [ADR-0002](../decisions/0002-catalog-runtime-and-data-access.md).

The approved credentials sign-up slice reuses NextAuth Credentials, Prisma's existing `User` model, bcrypt password hashes, and JWT sessions without a database adapter. Registration is validated in a Server Action and successful accounts reach a protected dashboard. See [ADR-0003](../decisions/0003-credentials-authentication.md). Distributed rate limiting, email verification, and legacy plaintext-account reset/migration remain production gates or future work.

The product starts as a single-vendor catalog and evolves toward multi-vendor behavior only after the foundational domain, authorization, ordering, inventory, and operational concerns are understood. Catalog-specific data fields and publication rules remain subject to an approved catalog specification.
