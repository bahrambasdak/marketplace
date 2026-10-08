# Project Foundation

- Status: Draft
- Risk: HIGH
- Owner: Architect and Product Mentor
- Dependencies: None

## Objective

Establish the technical, operational, and AI-collaboration foundation required to build a production-oriented marketplace in controlled vertical slices, without implementing live marketplace behavior before the first slice is approved.

## User Problem

Future feature work needs consistent boundaries, durable decisions, repeatable quality checks, and a clear delivery process. Without that foundation, the project drifts toward premature abstraction, inconsistent contracts, and poor verification.

## Scope

- Define the repository-level engineering contract and collaboration model.
- Establish the baseline toolchain, local workflow, and quality expectations for TypeScript, linting, type checks, and build validation.
- Clarify application boundaries and the shape of the early architecture without building marketplace features.
- Define the required ADR structure and which decisions must be explicit before product work begins.
- Prepare the repository for the first catalog vertical slice with a clear design and risk model.

## Out Of Scope

- Marketplace pages, APIs, database tables, auth flows, payments, checkout, fulfillment, or vendor onboarding.
- Installing production dependencies before architecture decisions are approved.
- Production infrastructure, optimization work, or future marketplace complexity that is not required for the first slice.

## Actors And Permissions

- Project developer: owns the product direction and approves architectural decisions that affect long-term boundaries.
- Product Mentor: clarifies scope, acceptance criteria, and product intent.
- Architect: defines system boundaries, trade-offs, and ADRs.
- Backend/Data, Frontend, Security, Reliability, and Quality roles: review and validate the relevant risk areas.
- AI roles support architecture, planning, implementation, testing, and review, but must not make silent high-risk decisions.

## Functional Requirements

1. The repository must have one authoritative collaboration contract and one canonical source of guidance for agents, rules, specs, ADRs, docs, and gates.
2. Product work must be captured as a feature specification with observable acceptance criteria and risk classification.
3. High-impact architectural changes must be written as ADRs before implementation begins.
4. The project must define a reproducible local development workflow and the required validation commands for each stage of work.
5. The project must support a vertical-slice delivery model that keeps scope small and reviewable.
6. Learning, knowledge capture, and durable documentation must be part of the workflow for meaningful changes.

## Non-Functional Requirements

- TypeScript strictness is the default once application code exists.
- Local development must remain reproducible and cloud-agnostic.
- Quality checks must be automated where stable and valuable.
- Documentation must remain concise enough to maintain and discover.
- The foundation must favor simplicity over premature abstraction.

## Architecture Decisions To Resolve

The following decisions require a separate ADR when they affect architectural boundaries or long-term platform direction:

- Monorepo package manager and task runner.
- Frontend framework and rendering model.
- Backend runtime and API style.
- PostgreSQL access layer and migration approach (resolved for the initial catalog in [ADR-0002](../decisions/0002-catalog-runtime-and-data-access.md)).
- Validation and shared contract strategy.
- Authentication and session strategy.
- Test runner and browser-testing approach.
- Local infrastructure and eventual deployment boundary.
- Module boundary strategy for the first catalog slice: single deployment vs. separate web/API packages.
- Product data model and publication lifecycle for public catalog reads.
- Money, image, and optional field representation for catalog content.
- Error and response semantics for public catalog endpoints.

Each ADR should record the decision, the context, the alternatives considered, and the consequences for future implementation.

## Design Direction For The First Slice

The first marketplace slice is a single-vendor public catalog. The architecture should remain intentionally narrow and server-authoritative:

- public catalog reads are open to visitors and require no auth;
- unpublished or missing products must never leak private data;
- product listing and detail pages are deterministic and testable;
- the catalog must support loading, empty, error, and unavailable states;
- product discovery must stay simple until there is evidence for additional filtering, search, or seller complexity.

This keeps the foundation aligned with the catalog specification while maintaining the option to evolve toward a larger marketplace later.

## Security Considerations

Do not commit secrets or hard-code credentials. Define environment variable ownership, secure defaults, dependency review, and approval requirements before runtime code is added. Public catalog reads must validate input and enforce publication visibility on the server.

## Performance Considerations

Define measurement points for page load, API latency, query behavior, bundle cost, and image size, but avoid optimizing an application that does not exist yet. For the first slice, the focus is on bounded outcomes and measurable read paths rather than speculative infrastructure.

## Testing Requirements

The foundation must define commands and CI intent for formatting, linting, type checking, unit/integration testing, and critical E2E journeys. The commands may initially be placeholders until the stack ADRs are approved, but the intent must be explicit and testable.

## Observability

Define structured logging, health checks, error reporting, metrics, and tracing responsibilities. Implement only the minimum needed for each future feature and ensure logs do not expose sensitive data.

## Acceptance Criteria

- [ ] Initial architecture decisions are recorded as ADRs.
- [ ] Root collaboration contract and supporting AI system files are committed.
- [ ] Specification and ADR templates are approved.
- [ ] Risk levels and quality gates are documented.
- [ ] Local development and environment conventions are documented.
- [ ] No marketplace feature has been implemented.
- [ ] The first catalog specification is ready for design and implementation planning.

## Learning Objectives

- Understand why architecture decisions are recorded before implementation.
- Understand how vertical slices keep product work small and reviewable.
- Understand why product boundaries, data ownership, and public-read rules matter before runtime code is added.
- Understand how AI context, review, test strategy, and knowledge capture work together in a disciplined engineering workflow.
