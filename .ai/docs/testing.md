# Testing

Test behavior at the lowest layer that provides confidence. Use unit tests for pure rules, integration tests for service and database behavior, contract tests for shared APIs, component tests for meaningful UI interactions, and E2E tests for critical journeys.

Mock external providers at adapter boundaries. Do not mock away the database when testing persistence semantics. Prefer meaningful behavioral coverage over arbitrary percentages.
