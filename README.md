# Marketplace

A production-oriented marketplace project built as a long-term full-stack engineering and learning exercise.

## Current status

The repository is in the engineering-system foundation phase. No application features or runtime dependencies have been added yet.

## Product direction

Begin with a single-vendor catalog and evolve toward a multi-vendor marketplace only after the catalog, identity, ordering, inventory, and authorization foundations are understood and tested.

## Operating principle

Every meaningful feature moves from requirement to specification, design, implementation, testing, review, quality gates, and knowledge capture. The process scales with risk.

## Where to start

- [AGENTS.md](AGENTS.md) is the collaboration contract.
- [.ai/specs/00-project-foundation.md](.ai/specs/00-project-foundation.md) defines the first milestone.
- [.ai/decisions/](.ai/decisions/) contains architectural decisions.
- [.ai/agents/](.ai/agents/), [.ai/rules/](.ai/rules/), and [.ai/specs/](.ai/specs/) define the AI-assisted workflow.
- [.ai/gates/](.ai/gates/) defines completion evidence.
- [.ai/.github/prompts/](.ai/.github/prompts/) contains reusable workflow prompts.
- [.ai/knowledge/](.ai/knowledge/) stores durable learning notes.
- [.ai/docs/](.ai/docs/) contains project documentation.

## Workflow catalog

The canonical reusable workflows are implemented under [.ai/.github/prompts/](.ai/.github/prompts/).

Available workflows include feature planning, design, implementation, testing, review, debugging, security review, performance review, learning, refactoring, ADRs, and feature completion.

## Quality gates

Gate files define evidence-based completion checks. Apply them according to risk:

- LOW: feature, focused testing, and review evidence.
- MEDIUM: design, feature, testing, and review evidence.
- HIGH: architecture, data/API, security, performance, testing, review, and release evidence as applicable.
- CRITICAL: explicit approval, ADR, threat model, integration/E2E evidence, rollback thinking, and release evidence.

A passing build is only one piece of evidence.

## Skills

The canonical human-readable skill catalog is implemented under [.ai/.github/skills/](.ai/.github/skills/).

Each skill is an on-demand procedure with a trigger, inputs, steps, outputs, quality checks, and learning guidance. Agents should compose these skills rather than duplicate their procedures.

## Knowledge system

This directory stores concise, curated learning notes rather than conversation transcripts.

### Note types

- Concept: what was learned and how it applies here.
- Decision: why an architectural choice was made.
- Trade-off: competing concerns and the chosen balance.
- Debugging lesson: symptom, hypothesis, check, root cause, and prevention.
- Failure mode: what can go wrong and how it is detected.
- Glossary: project-specific terminology.

### Note convention

Each note should include a title, date, related spec or ADR, the explanation, and one practical takeaway. Add a note after meaningful feature work, difficult debugging, or a high-value learning checkpoint. Keep notes short and link to authoritative artifacts rather than duplicating them.

## Project summary

This repository is meant to be built as a production-oriented marketplace in controlled, testable vertical slices. The engineering system, quality gates, reusable workflows, and learning notes exist to keep the project disciplined as it grows from a single-vendor catalog toward a broader marketplace platform.
