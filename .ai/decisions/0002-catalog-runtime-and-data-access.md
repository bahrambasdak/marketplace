# ADR-0002: Catalog Runtime And Data Access

- Status: Accepted
- Date: 2026-10-08
- Review trigger: Before installing database dependencies, adding migrations, or implementing catalog routes and pages.

## Context

At the time of this decision, the repository contained a Next.js App Router application with a static placeholder page, but no API, database connection, migrations, or configured test runner. The foundation spec is Draft and requires architecture decisions before product work. The project documentation described separate web/API/shared package boundaries, while the foundation spec left a single deployment versus separate packages open. The developer selected PostgreSQL with Prisma, one Next.js deployment for REST endpoints, and Docker Compose for local PostgreSQL. The first product surface is a public single-vendor catalog listing and detail pages.

## Problem

The first catalog slice needs a clear server boundary, data access and migration approach, and repeatable local database environment. Choosing separate services or packages now would add setup and operational complexity before there is a demonstrated need. At the same time, the database and public API must remain server-authoritative and testable.

## Options Considered

### Option A: One Next.js deployment with PostgreSQL and Prisma

Use the App Router for server-rendered catalog pages and REST route handlers. Put catalog behavior in server-only application/data modules used directly by both pages and handlers. Use Prisma for PostgreSQL schema access and reviewed migrations. Run PostgreSQL through Docker Compose for local development.

### Option B: Separate web and API deployments

Keep the Next.js web application separate from a Node.js REST API, with a shared contract package and independent deployment boundaries. This allows independent scaling and release, but requires additional service, contract, environment, and operational setup for the first read-only slice.

### Option C: One Next.js deployment with direct SQL access

Keep the same deployment boundary as Option A, but use a PostgreSQL driver and explicit SQL repositories/migrations rather than an ORM. This offers direct SQL control, but requires more handwritten mapping and migration conventions for the initial slice.

## Decision

Adopt Option A for the first catalog slice:

- Deploy the web application and REST route handlers together in the existing Next.js application.
- Keep domain/application and persistence code in server-only modules; route handlers and server-rendered pages call the same catalog services directly. Do not make internal HTTP requests from pages to the co-located API.
- Use PostgreSQL as the primary database and Prisma for schema access and reviewed migrations.
- Use Docker Compose to provide PostgreSQL locally. This does not choose a production database host or deployment platform.
- Keep logical boundaries in the existing application rather than creating separate workspace packages before a real reuse or deployment need exists.
- Keep public catalog reads unauthenticated, but enforce publication visibility and input validation on the server.

This ADR does not decide the catalog schema, product fields, publication lifecycle, money/image representation, API DTO/error semantics, validation library, test runner, authentication, or production deployment. Resolve catalog-specific behavior in an approved feature spec and any necessary focused ADRs before implementation.

## Consequences

- One local application and database are sufficient to run the first vertical slice.
- Pages and REST handlers can share application rules without coupling presentation code directly to Prisma.
- Prisma introduces a production dependency and migration workflow. The initial local setup is authorized by this ADR; catalog-specific schema changes still require an approved catalog specification.
- The architecture documentation's separate-package direction must be reconciled when this ADR is accepted; later extraction remains possible if supported by concrete requirements.
- Docker Compose supports reproducible local development only; production hosting, credentials, backups, and deployment topology remain future decisions.
- Before writing Next.js code, consult the version-matched guides under `node_modules/next/dist/docs/` as required by the repository contract.

## Alternatives Rejected

- Separate web and API deployments are deferred because independent deployment and scaling are not required by the initial public read-only slice.
- Direct SQL is deferred in favor of the developer-selected Prisma direction; it remains a viable alternative if the accepted data design needs SQL-first control.
- Calling the REST route handlers from server-rendered pages is rejected because it adds an unnecessary network boundary and duplicates transport concerns inside the same deployment.
- Creating a separate shared package before a second consumer exists is rejected as premature structure.

## Related Specifications And Decisions

- `specs/00-project-foundation.md`
- `specs/01-catalog.md` (currently absent from the worktree; do not implement catalog behavior until an approved feature specification exists)
- `decisions/0001-adr-process.md`
- `docs/architecture.md` (reconcile its separate-package direction after this ADR is accepted)
