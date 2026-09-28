# Workspace Instructions

Read the authoritative project contract in [AGENTS.md](../../AGENTS.md) first for every task. Load only the relevant role under [`.ai/agents`](../agents), rules under [`.ai/rules`](../rules), specifications under [`.ai/specs`](../specs), ADRs under [`.ai/decisions`](../decisions), skills under [`.ai/.github/skills`](skills), and prompts under [`.ai/.github/prompts`](prompts).

The repository is still governed by approved specifications and architecture decisions. Do not implement marketplace behavior, install dependencies, or create runtime application code beyond approved scope. Treat the existing Next.js page as scaffolding until the relevant spec authorizes product behavior.

Use risk-based Learning Mode for architecture, data, authorization, security, performance, payments, and new major dependencies. Use focused context, small reversible changes, and executable validation. Never claim checks passed without running them; currently use `pnpm lint`, `pnpm build`, and `pnpm exec tsc --noEmit` as applicable because no test script is configured yet.
