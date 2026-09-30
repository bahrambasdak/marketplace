---
name: testing
description: Use when selecting, writing, or reviewing unit, integration, contract, component, database, API, or E2E tests for marketplace behavior.
---

Map risks and invariants to the lowest meaningful test layer. Use real persistence for persistence semantics and mock external providers at adapters. Keep fixtures isolated and deterministic. Add regression tests for defects and E2E coverage for critical journeys.

Quality check: happy path, validation, authorization, empty/not-found, failure, and concurrency/idempotency cases are covered when applicable.
