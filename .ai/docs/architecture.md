# Architecture

The intended shape is a TypeScript monorepo with separate web, API, and shared package boundaries. Exact frameworks, ORM, API style, authentication, and deployment choices remain ADR decisions in the foundation phase.

The product starts as a single-vendor catalog and evolves toward multi-vendor behavior only after the foundational domain, authorization, ordering, inventory, and operational concerns are understood.
