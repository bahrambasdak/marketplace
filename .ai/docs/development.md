# Development Workflow

The project uses vertical slices and risk-based gates.

1. Clarify the requirement and update the relevant spec.
2. Classify risk and identify the required reviewers and gates.
3. Load focused context: agents, rules, specs, skills, ADRs, then code.
4. Design the smallest slice and resolve important learning questions.
5. Get explicit approval for high-risk or critical changes.
6. Implement with focused validation after substantive edits.
7. Run tests, security/performance reviews, and code review.
8. Verify acceptance criteria, update docs, and capture knowledge.

Never claim tests or checks passed without running them.

## Local PostgreSQL

The initial catalog uses PostgreSQL locally through Docker Compose. Copy `.env.example` to `.env` for Prisma CLI commands, then start the database:

```powershell
if (-not (Test-Path .env)) { Copy-Item .env.example .env }
pnpm db:up
pnpm prisma:validate
pnpm prisma:generate
```

The Compose database binds to `127.0.0.1` and reads its local-only credentials from `.env`. Keep `.env` out of source control. Stop the database without deleting its persistent named volume with `pnpm db:down`.

The Prisma CLI reads `DATABASE_URL` from `prisma.config.ts`; the server-side Prisma client uses the PostgreSQL driver adapter. Do not create or apply catalog migrations until the catalog specification approves the Product model. Once approved, create reviewed migrations with Prisma Migrate and commit them.
