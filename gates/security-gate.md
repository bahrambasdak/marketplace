# Security Gate

## Preconditions
Changed assets, trust boundaries, actors, and risk level are identified.

## Checklist
- [ ] Authentication and authorization are explicit.
- [ ] Input validation and output handling are reviewed.
- [ ] Sessions, secrets, rate limits, uploads, webhooks, and dependencies are considered where relevant.
- [ ] Sensitive errors do not leak internal data.
- [ ] Security tests or evidence cover important abuse cases.

## Evidence
Threat model or risk note, review findings, tests, and dependency/security results where applicable.

## Failure Conditions
Missing server-side authorization, unvalidated untrusted input, exposed secrets, disabled controls, or unresolved high-severity finding.

## Reviewer
Quality/Security Agent, with Architect approval for high or critical risk.

## Exit Criteria
Controls are implemented and residual risk is explicitly accepted or remediated.
