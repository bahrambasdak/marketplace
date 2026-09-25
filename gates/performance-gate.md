# Performance Gate

## Preconditions

A user-facing or operational performance concern is identified and measurable.

## Checklist

- [ ] Metric and baseline are defined.
- [ ] Database, API, rendering, network, bundle, image, or search behavior is inspected as relevant.
- [ ] The change is justified by evidence.
- [ ] Before/after measurement or an explicit measurement limitation is recorded.

## Evidence

Benchmark, query plan, browser measurement, load result, or documented rationale.

## Failure Conditions

Speculative optimization, unbounded query behavior, missing pagination, or regression against an agreed threshold.

## Reviewer

Reliability Agent with the responsible implementation role.

## Exit Criteria

The measured behavior is acceptable for the feature risk and remaining work is recorded.
