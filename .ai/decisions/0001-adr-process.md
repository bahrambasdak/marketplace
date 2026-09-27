# ADR-0001: Record Architectural Decisions

- Status: Accepted
- Date: 2026-09-25
- Review trigger: The decision process no longer gives enough context for a major architectural change.

## Context

This greenfield marketplace will evolve across many features and technology boundaries. Important choices must remain understandable after the original conversation is gone.

## Problem

Without a lightweight decision record, architecture can drift silently and future contributors cannot distinguish deliberate trade-offs from accidental behavior.

## Options Considered

### Option A: Record every implementation detail

Rejected because it creates noise and discourages maintenance.

### Option B: Record only durable, high-impact decisions

Chosen because it preserves context for boundaries, data, security, reliability, external dependencies, and long-term maintainability.

## Decision

Use `decisions/_template.md` for decisions that affect architecture or create meaningful future constraints. ADRs are committed with the code, linked from relevant specifications, and updated when superseded rather than deleted.

## Consequences

The project gains a durable design history. Small local choices remain in code and reviews. Proposed decisions must be resolved before high-risk implementation begins.

## Alternatives Rejected

A separate external decision system was rejected because repository-local context is easier for humans and AI tools to discover and version.

## Related Specifications And Decisions

- `specs/00-project-foundation.md`
