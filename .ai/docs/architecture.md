# Architecture

The planned initial catalog will use one TypeScript Next.js deployment with logical server-side boundaries for presentation, application/domain behavior, and persistence. Server-rendered pages and REST route handlers will share application services directly; pages will not call the co-located API over HTTP.

PostgreSQL is the primary database, Prisma is the access and migration layer, and Docker Compose provides PostgreSQL for local development. See [ADR-0002](../decisions/0002-catalog-runtime-and-data-access.md). Product schema, API contracts, authentication, test tooling, and production hosting remain separate decisions or feature-spec requirements.

The product starts as a single-vendor catalog and evolves toward multi-vendor behavior only after the foundational domain, authorization, ordering, inventory, and operational concerns are understood.
