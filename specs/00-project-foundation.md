# Project Foundation

- Status: Draft
- Risk: HIGH
- Owner: Architect and Product Mentor
- Dependencies: None

## Objective

Establish the repository's technical, operational, and AI collaboration foundation without implementing marketplace behavior.

## User Problem

Future feature work needs consistent architecture, repeatable quality checks, clear decisions, and durable learning from the first commit.

## Scope

- Select and record the initial TypeScript monorepo/toolchain decisions.
- Establish repository conventions, environment handling, and local-first development.
- Define application/package boundaries without implementing product features.
- Establish baseline formatting, linting, type checking, testing, and CI intent.
- Define minimum security, observability, documentation, and change-review expectations.
- Create the first catalog specification as the next product milestone.

## Out Of Scope

- Marketplace pages, APIs, database tables, authentication, payments, or business workflows.
- Installing dependencies before the architecture decisions are approved.
- Production infrastructure or premature optimization.

## Actors And Permissions

The primary actor is the project developer. AI roles assist with architecture, product thinking, implementation, testing, security, reliability, and mentoring. High-risk changes require explicit developer approval.

## Functional Requirements

1. The repository must have one authoritative root collaboration contract.
2. Reusable agents, skills, rules, workflows, specs, gates, ADRs, docs, and knowledge conventions must be discoverable.
3. Every future feature must be classifiable by risk and traceable to acceptance criteria.
4. Architectural changes must be recordable through ADRs.
5. Learning Mode must be available for high-value concepts without blocking routine work.

## Non-Functional Requirements

- TypeScript strictness will be the default once application code is scaffolded.
- Local development must remain reproducible and cloud-agnostic.
- Quality checks must be automated where stable and valuable.
- Documentation must remain concise enough to maintain.

## Architecture Decisions To Resolve

- Monorepo package manager and task runner.
- Frontend framework and rendering model.
- Backend runtime/framework and API style.
- PostgreSQL access layer and migration approach.
- Validation and shared contract strategy.
- Authentication/session strategy.
- Test runner and browser testing approach.
- Local infrastructure and eventual deployment boundary.

Each decision requires a separate ADR when it affects long-term architecture.

## Security Considerations

Do not commit secrets. Define environment variable ownership, secure defaults, dependency review, and approval requirements before runtime code is added.

## Performance Considerations

Define measurement points and query/rendering expectations, but do not optimize an application that does not exist.

## Testing Requirements

The foundation must define commands and CI intent for formatting, linting, type checking, unit/integration testing, and critical E2E testing. The commands may initially be placeholders until the stack ADRs are approved.

## Observability

Define structured logging, health checks, error reporting, metrics, and tracing responsibilities. Implement only the minimum needed for each future feature.

## Acceptance Criteria

- [ ] Initial architecture decisions are recorded as ADRs.
- [ ] Root collaboration contract and supporting AI system files are committed.
- [ ] Specification and ADR templates are approved.
- [ ] Risk levels and quality gates are documented.
- [ ] Local development and environment conventions are documented.
- [ ] No marketplace feature has been implemented.
- [ ] The first catalog specification is ready to design.

## Learning Objectives

- Understand why architecture decisions are recorded before implementation.
- Understand monorepo boundaries and vertical-slice delivery.
- Understand risk-based quality gates and why build success is insufficient.
- Understand how AI context, review, tests, and knowledge capture work together.
