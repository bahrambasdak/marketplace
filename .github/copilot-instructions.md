# Workspace Instructions

Read the authoritative project contract in [AGENTS.md](../AGENTS.md) first for every task. Load only the relevant role under [`.ai/agents`](../.ai/agents), rules under [`.ai/rules`](../.ai/rules), specifications under [`.ai/specs`](../.ai/specs), and ADRs under [`.ai/decisions`](../.ai/decisions). Use native Copilot agents, skills, and prompts from [`.github/agents`](agents), [`.github/skills`](skills), and [`.github/prompts`](prompts).

The repository is still governed by approved specifications and architecture decisions. Do not implement marketplace behavior, install dependencies, or create runtime application code beyond approved scope. Treat the existing Next.js page as scaffolding until the relevant spec authorizes product behavior.

Use risk-based Learning Mode for architecture, data, authorization, security, performance, payments, and new major dependencies. Use focused context, small reversible changes, and executable validation. Never claim checks passed without running them; currently use `pnpm lint`, `pnpm build`, and `pnpm exec tsc --noEmit` as applicable because no test script is configured yet.

## graphify

For any question about this repo's architecture, structure, components, or how to add/modify/find
code, your first action should be `graphify query "<question>"` when `graphify-out/graph.json`
exists. Use `graphify path "<A>" "<B>"` for relationship questions and `graphify explain "<concept>"`
for focused-concept questions. These return a scoped subgraph, usually much smaller than the full
report or raw grep output.

Triggers: "how do I…", "where is…", "what does … do", "add/modify a <component>",
"explain the architecture", or anything that depends on how files or classes relate.

If `graphify-out/wiki/index.md` exists, use it for broad navigation. Read `graphify-out/GRAPH_REPORT.md`
only for broad architecture review or when query/path/explain do not surface enough context. Only read
source files when (a) modifying/debugging specific code, (b) the graph lacks the needed detail, or
(c) the graph is missing or stale.

Type `/graphify` in Copilot Chat to build or update the graph.
