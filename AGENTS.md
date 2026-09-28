# Marketplace Engineering Contract

## Mission

Build a production-oriented marketplace one understandable, tested vertical slice at a time. The AI is an engineering partner and mentor, not an unattended code generator.

## Canonical Workspace Layout

This repository keeps the durable AI guidance under the hidden `.ai/` directory. That folder is the source of truth for role definitions, rules, specs, ADRs, gates, workflow prompts, and learning notes. The root-level files are the human entry points.

- `.ai/agents/`: role definitions and responsibilities
- `.ai/rules/`: engineering guardrails and domain policies
- `.ai/specs/`: product and milestone specifications
- `.ai/decisions/`: architecture decision records
- `.ai/gates/`: completion evidence and quality gates
- `.ai/knowledge/`: durable learning notes
- `.ai/.github/agents/`: native Copilot agent definitions
- `.ai/.github/skills/`: reusable skill catalog and procedures
- `.ai/.github/prompts/`: reusable workflow prompts

## Context Loading Order

1. Read this file.
2. Select the smallest relevant role in `.ai/agents/`.
3. Read applicable files in `.ai/rules/`.
4. Read the relevant specification in `.ai/specs/`.
5. Load only the skills needed for the task.
6. Read relevant ADRs in `.ai/decisions/`.
7. Inspect focused code, tests, and configuration.
8. Implement only the approved change.

Use codebase knowledge tools only to improve focused discovery. They never replace specs, tests, rules, ADRs, or review.

## Current Tooling

- Use `pnpm` with the version declared in `package.json`.
- Run `pnpm lint` for ESLint and `pnpm build` for a production build.
- Use `pnpm dev` for local development and `pnpm start` only after a successful build.
- There is no configured test script yet. When tests are added, document the command here and in the relevant testing guidance.
- TypeScript is strict and uses the `@/*` path alias; run `pnpm exec tsc --noEmit` when a type-focused check is useful.

## Application Conventions

- The current web app uses the Next.js App Router under `app/` with shared UI in `components/` and utilities in `lib/`.
- Preserve server/client boundaries deliberately. Add client components only when browser state or event handlers require them.
- Follow the existing Tailwind 4, shadcn, Base UI, CVA, and Lucide conventions before introducing another UI pattern or dependency.
- Treat the current Next starter page as scaffolding, not marketplace behavior. Implement product work only when the relevant spec and decisions authorize it.

## Evidence And Documentation

- Before editing, state one local hypothesis, the controlling code path, and the cheapest check that could disconfirm it.
- After each substantive edit, run the narrowest relevant executable check before expanding the change.
- Link to existing guidance instead of duplicating it: [README](README.md), [development workflow](.ai/docs/development.md), [testing guidance](.ai/docs/testing.md), and [architecture notes](.ai/docs/architecture.md).
- Record meaningful decisions, debugging lessons, and trade-offs in `.ai/knowledge/` using the existing note conventions.

## Collaboration Rules

- State the current hypothesis, relevant code path, and cheapest discriminating check before editing.
- Inspect existing code before making assumptions.
- Prefer the smallest reversible change and preserve established boundaries.
- Explain architectural trade-offs and challenge weak designs.
- Ask for a decision when product intent or a high-risk technical choice is unresolved.
- Use Learning Mode for architecture, data modeling, transactions, authorization, security, performance, distributed state, payments, and new major dependencies.
- Use Implementation Mode for routine, well-understood repetition.
- Never introduce a dependency without a reason and an ADR when it affects architecture.
- Never modify unrelated files.

## Risk Levels

- LOW: text, styling, or isolated non-functional change.
- MEDIUM: new UI behavior, local domain behavior, or non-critical API change.
- HIGH: database migration, new endpoint, authorization, shared contract, or significant performance impact.
- CRITICAL: authentication, payments, financial state, security boundaries, destructive migration, or production infrastructure.

High and critical changes require explicit approval before implementation. Critical changes require architecture, security, and rollback evidence.

## Validation Rules

Validate the narrowest relevant behavior immediately after each substantive edit. Run broader checks according to risk. Never claim a command passed unless it was run. Never disable tests or weaken validation to hide a failure.

## Change-Control Rules

Do not expose secrets, hard-code credentials, silently change architecture, delete important files, invent library behavior, or make destructive changes without explicit approval. Update specs, ADRs, docs, tests, and knowledge when the implementation changes them.

## Definition Of Done

A change is done only when its acceptance criteria are met, required tests and diagnostics pass, applicable security and performance checks are complete, review findings are resolved, documentation is synchronized, and the relevant knowledge has been captured.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
