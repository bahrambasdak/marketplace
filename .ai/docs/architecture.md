# Architecture

The initial catalog uses one Next.js deployment with server-rendered pages and REST route handlers. Server-only application and persistence modules provide logical boundaries within the app; pages and handlers share those modules without making internal HTTP requests. PostgreSQL is accessed through Prisma, and Docker Compose provides the local database. See [ADR-0002](../decisions/0002-catalog-runtime-and-data-access.md).

The product starts as a single-vendor catalog and evolves toward multi-vendor behavior only after the foundational domain, authorization, ordering, inventory, and operational concerns are understood. Catalog-specific data fields and publication rules remain subject to an approved catalog specification.
