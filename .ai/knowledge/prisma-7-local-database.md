# Prisma 7 local database setup

- Date: 2026-10-08
- Related decision: [ADR-0002](../decisions/0002-catalog-runtime-and-data-access.md)

Prisma 7 separates the database URL used by Prisma CLI commands from the connection used by the running application. The CLI reads its URL from `prisma.config.ts`; the application constructs `PrismaClient` with a PostgreSQL driver adapter. Local PostgreSQL runs in Docker Compose and uses loopback-only access with credentials intended only for local development.

The separation makes migration configuration explicit without embedding secrets or environment-specific connection details in the Prisma schema. The database configuration does not authorize a product data model: catalog fields and migrations wait for an approved catalog specification.

**Practical takeaway:** keep `DATABASE_URL` in local environment configuration, use the adapter in the server-only client, and create migrations only after the owning feature specification approves the schema.
