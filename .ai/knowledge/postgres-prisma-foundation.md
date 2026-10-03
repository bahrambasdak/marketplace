# PostgreSQL And Prisma Foundation

- Date: 2026-10-03
- Related: [ADR-0002](../decisions/0002-catalog-runtime-and-data-access.md)

Prisma ORM 7 uses an explicit `prisma-client` output path, keeps the database URL in `prisma.config.ts`, and connects to PostgreSQL through a driver adapter. Its generated client is build output and should not be linted or committed. pnpm may block Prisma's required install scripts until the exact packages are approved.

The initial schema intentionally defines no product model or migration: those depend on an approved catalog specification for product fields and publication visibility.

**Practical takeaway:** validate and generate the Prisma client before wiring feature code, and do not model business data before the feature contract is accepted.
