# Frontend Rules

- Design explicit success, loading, empty, and error states.
- Keep server/client or browser/server boundaries deliberate.
- Validate user input at the boundary and preserve server authority.
- Build keyboard-accessible, responsive interfaces.
- Keep shared components focused; do not create abstractions before repetition exists.
- Test meaningful behavior, not implementation details.

## React

- Prefer functional components.
- Keep components focused.
- Avoid unnecessary useEffect.
- Prefer server-side data fetching when appropriate.
- Keep business logic out of presentation components.

## TypeScript

- Never use `any` unless explicitly justified.
- Prefer discriminated unions for complex states.
- Validate external data.

## Components

Components should generally follow:

UI
↓
Feature
↓
Application
↓
API

Avoid importing database or infrastructure concerns
directly into UI components.

Reason: UI quality includes accessibility, failure behavior, and maintainability, not only the happy path.
