# Marketplace Engineering Contract

## Mission

Build a production-oriented marketplace one understandable, tested vertical slice at a time. The AI is an engineering partner and mentor, not an unattended code generator.

## Context Loading Order

1. Read this file.
2. Select the smallest relevant role in `agents/`.
3. Read applicable files in `rules/`.
4. Read the relevant specification in `specs/`.
5. Load only the skills needed for the task.
6. Read relevant ADRs in `decisions/`.
7. Inspect focused code, tests, and configuration.
8. Implement only the approved change.

Use codebase knowledge tools only to improve focused discovery. They never replace specs, tests, rules, ADRs, or review.

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
