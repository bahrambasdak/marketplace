# Graph Report - marketplace  (2026-09-28)

## Corpus Check
- Corpus is ~9,221 words - fits in a single context window. You may not need a graph.

## Summary
- 270 nodes · 261 edges · 36 communities (23 shown, 13 thin omitted)
- Extraction: 85% EXTRACTED · 15% INFERRED · 0% AMBIGUOUS · INFERRED: 39 edges (avg confidence: 0.88)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- Application Source
- UI Configuration
- Marketplace Agents
- Catalog Foundation
- TypeScript Configuration
- Operations and Reliability
- Security Boundaries
- Next.js App Entry
- Runtime Dependencies
- Development Dependencies
- API and Data Rules
- Review and Debug Workflows
- Architecture Governance
- Delivery Quality Gates
- Accessible UI Standards
- Package Scripts
- Marketplace Architecture
- Test Quality
- Test Layers
- Frontend Delivery
- Performance Review
- Engineering Principles
- Git and Documentation
- Knowledge Capture
- Performance Gate
- Learning Notes
- Graph Navigation
- Workspace Setup
- PostCSS Configuration
- Next.js Branding
- Safe Refactoring
- Skills Index
- File Icon
- Globe Icon
- Vercel Branding
- Browser Icon

## God Nodes (most connected - your core abstractions)
1. `compilerOptions` - 16 edges
2. `Public Catalog` - 8 edges
3. `Marketplace Engineering Contract` - 8 edges
4. `tailwind` - 6 edges
5. `aliases` - 6 edges
6. `Workspace Instructions` - 6 edges
7. `Observability` - 6 edges
8. `Project Foundation` - 6 edges
9. `scripts` - 5 edges
10. `Marketplace Feature Design` - 5 edges

## Surprising Connections (you probably didn't know these)
- `Risk-Based Quality Gates` --semantically_similar_to--> `Risk Levels`  [INFERRED] [semantically similar]
  .ai/specs/00-project-foundation.md → AGENTS.md
- `Local-First Development` --semantically_similar_to--> `Controlled Vertical-Slice Delivery`  [INFERRED] [semantically similar]
  .ai/specs/00-project-foundation.md → README.md
- `Single-Vendor Catalog` --conceptually_related_to--> `Public Catalog`  [INFERRED]
  README.md → .ai/specs/01-catalog.md
- `AGENTS Contract Reference` --references--> `Marketplace Engineering Contract`  [EXTRACTED]
  CLAUDE.md → AGENTS.md
- `Marketplace Feature Design` --conceptually_related_to--> `Marketplace Backend Data`  [INFERRED]
  .ai/.github/prompts/design.prompt.md → .ai/.github/agents/backend-data.agent.md

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Marketplace Feature Delivery Workflow** — _ai__github_prompts_new_feature_prompt_feature_initiation, _ai__github_prompts_plan_feature_prompt_vertical_slice_planning, _ai__github_prompts_design_prompt_feature_design, _ai__github_prompts_implement_prompt_approved_slice_implementation, _ai__github_prompts_finish_feature_prompt_feature_gates [INFERRED 0.95]
- **Marketplace Quality Assurance Workflow** — _ai__github_prompts_debug_prompt_debugging, _ai__github_prompts_review_prompt_findings_first_review, _ai__github_prompts_security_review_prompt_security_review, _ai__github_prompts_test_prompt_test_selection [INFERRED 0.85]
- **Marketplace Architecture and Operations** — _ai__github_prompts_adr_prompt_architectural_decision_record, _ai__github_prompts_performance_review_prompt_performance_measurement, _ai__github_agents_architect_agent_marketplace_architect, _ai__github_agents_reliability_agent_marketplace_reliability [INFERRED 0.85]
- **Marketplace Delivery Workflow** — _ai__github_skills_requirement_analysis_skill_requirement_analysis, _ai__github_skills_architecture_design_skill_architecture_design, _ai__github_skills_frontend_feature_skill_frontend_feature, _ai__github_skills_testing_skill_testing [INFERRED 0.85]
- **Marketplace Engineering Roles** — _ai__agents_architect_architect, _ai__agents_backend_data_backend_data, _ai__agents_frontend_frontend, _ai__agents_quality_security_quality_security [EXTRACTED 1.00]
- **Feature Delivery Quality Evidence** — _ai_docs_development_vertical_slices, _ai_docs_development_risk_based_gates, _ai_gates_feature_gate_feature_gate, _ai_gates_readme_evidence_based_completion [INFERRED 0.85]
- **Production Operations Readiness** — _ai_docs_deployment_production_readiness, _ai_docs_observability_observability, _ai_gates_performance_gate_performance_gate, _ai_gates_release_gate_release_gate [INFERRED 0.75]
- **Security Assurance Controls** — _ai_docs_security_threat_modeling, _ai_docs_security_authorization, _ai_gates_security_gate_security_gate, _ai_rules_security_least_privilege [INFERRED 0.85]
- **Foundation Governance System** — _ai_specs_00_project_foundation_project_foundation, agents_marketplace_engineering_contract, _ai_specs_template_feature_specification [INFERRED 0.85]
- **Public Catalog Delivery Slice** — _ai_specs_01_catalog_public_catalog, _ai_specs_01_catalog_published_product, _ai_specs_01_catalog_publication_visibility, _ai_specs_01_catalog_accessibility [EXTRACTED 1.00]
- **Repository Collaboration And Navigation** — _github_copilot_instructions_graphify, agents_context_loading_order, agents_canonical_workspace_layout, readme_marketplace [INFERRED 0.85]

## Communities (36 total, 13 thin omitted)

### Community 0 - "Application Source"
Cohesion: 0.08
Nodes (29): Button(), buttonVariants, name, packageManager, private, version, @base-ui/react, class-variance-authority (+21 more)

### Community 1 - "UI Configuration"
Cohesion: 0.09
Nodes (21): aliases, components, hooks, lib, ui, utils, iconLibrary, menuAccent (+13 more)

### Community 2 - "Marketplace Agents"
Cohesion: 0.12
Nodes (19): Marketplace Architect, Marketplace Backend Data, Marketplace Frontend, Marketplace Product Mentor, Marketplace Quality Security, Marketplace Reliability, Workspace Instructions, Architectural Decision Record (+11 more)

### Community 3 - "Catalog Foundation"
Cohesion: 0.13
Nodes (19): Architecture Decisions, Local-First Development, Project Foundation, Risk-Based Quality Gates, Catalog Accessibility, Public Catalog, Publication Visibility, Published Product (+11 more)

### Community 4 - "TypeScript Configuration"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 5 - "Operations and Reliability"
Cohesion: 0.13
Nodes (15): Cloud-Agnostic Deployment, Deployment, Production Readiness, Reproducible Local Development, Correlation Identifiers, Error Tracking, Health Checks, Operational Metrics (+7 more)

### Community 6 - "Security Boundaries"
Cohesion: 0.13
Nodes (15): Authentication, Authorization, Safe Error Behavior, Security, Threat Modeling, Security Gate, Trust Boundaries, Server-Side Authorization (+7 more)

### Community 7 - "Next.js App Entry"
Cohesion: 0.15
Nodes (8): app_globals, geistMono, geistSans, inter, metadata, lib_utils_cn, nextConfig, next

### Community 8 - "Runtime Dependencies"
Cohesion: 0.15
Nodes (13): dependencies, @base-ui/react, class-variance-authority, cn, graphify, lucide-react, next, react (+5 more)

### Community 9 - "Development Dependencies"
Cohesion: 0.15
Nodes (13): devDependencies, eslint, eslint-config-next, @eslint/js, eslint-plugin-react, globals, tailwindcss, @tailwindcss/postcss (+5 more)

### Community 10 - "API and Data Rules"
Cohesion: 0.18
Nodes (11): Backend and Data Agent, Quality and Security Agent, API and Validation, Authentication and Authorization, Input and Output Contracts, Validation Boundaries, Data Invariants, Schema and Migrations (+3 more)

### Community 11 - "Review and Debug Workflows"
Cohesion: 0.27
Nodes (10): Product Mentor Agent, Reusable Workflows, Code Review, Regression Review, Debugging, Falsifiable Hypothesis, Acceptance Criteria, Requirement Analysis (+2 more)

### Community 12 - "Architecture Governance"
Cohesion: 0.29
Nodes (7): Architect Agent, ADR Process, Durable High-Impact Decisions, ADR Template, Architecture Decision Records, Architecture Design, System Boundaries

### Community 13 - "Delivery Quality Gates"
Cohesion: 0.33
Nodes (6): Acceptance Criteria, Development Workflow, Risk-Based Gates, Vertical Slices, Evidence-Based Completion, Quality Gates

### Community 14 - "Accessible UI Standards"
Cohesion: 0.40
Nodes (5): Feature Gate, Observable Acceptance Criteria, Accessible Responsive Interfaces, Frontend Rules, Explicit UI States

### Community 15 - "Package Scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

### Community 16 - "Marketplace Architecture"
Cohesion: 0.50
Nodes (4): Architecture, Multi-Vendor Behavior, Single-Vendor Catalog, TypeScript Monorepo

### Community 17 - "Test Quality"
Cohesion: 0.50
Nodes (4): Behavioral Coverage, Deterministic Tests, Regression Coverage, Testing Rules

### Community 18 - "Test Layers"
Cohesion: 0.50
Nodes (4): End-to-End Tests, Integration Tests, Testing, Unit Tests

### Community 19 - "Frontend Delivery"
Cohesion: 0.67
Nodes (3): Frontend Agent, Accessible Responsive User Interface, Frontend Feature

### Community 20 - "Performance Review"
Cohesion: 0.67
Nodes (3): Reliability Agent, Baseline Measurement, Performance Review

### Community 21 - "Engineering Principles"
Cohesion: 0.67
Nodes (3): Cohesive Modules, General Engineering Rules, Validated Configuration

### Community 22 - "Git and Documentation"
Cohesion: 0.67
Nodes (3): Durable Decisions, Focused Changes, Git and Documentation Rules

## Knowledge Gaps
- **155 isolated node(s):** `inter`, `geistSans`, `geistMono`, `metadata`, `$schema` (+150 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 174 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **13 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `dependencies` connect `Runtime Dependencies` to `Application Source`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **Why does `devDependencies` connect `Development Dependencies` to `Application Source`?**
  _High betweenness centrality (0.023) - this node is a cross-community bridge._
- **Why does `next` connect `Next.js App Entry` to `Application Source`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Public Catalog` (e.g. with `Feature Specification Template` and `Single-Vendor Catalog`) actually correct?**
  _`Public Catalog` has 2 INFERRED edges - model-reasoned connections that need verification._
- **What connects `inter`, `geistSans`, `geistMono` to the rest of the system?**
  _155 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Application Source` be split into smaller, more focused modules?**
  _Cohesion score 0.0784313725490196 - nodes in this community are weakly interconnected._
- **Should `UI Configuration` be split into smaller, more focused modules?**
  _Cohesion score 0.09090909090909091 - nodes in this community are weakly interconnected._