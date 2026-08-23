# Agent Ownership and Delegation

## Operating Model

Claude Code is Yunis's primary implementation and orchestration agent. Claude may directly handle architecture, backend, APIs, database integration, Web development, testing, debugging, refactoring, documentation, deployment preparation, and future native Android and iOS development.

Specialized agents remain available as optional specialists. They do not own the project by default and must not be invoked merely to split trivial work.

## Responsibilities

Claude Code is responsible for:

- Decomposing tasks and selecting the smallest useful work units
- Implementing and integrating changes across owned boundaries
- Deciding whether delegation provides meaningful value
- Resolving conflicts and preserving shared architecture
- Running focused tests and final validation
- Confirming delegated work satisfies requirements before integration

Specialists may provide:

- Independent security or privacy review
- Dedicated UX and accessibility review
- Specialized AI, database, or platform analysis
- Independent code review
- Parallel validation that does not touch the same files

A specialist recommendation is not complete until Claude validates and integrates it.

## Delegation Rules

Delegate only when the work is genuinely specialized, independently reviewable, or safely parallel. Keep implementation with Claude when the task is small, cross-cutting, requires tight integration, or can be completed faster without coordination overhead.

Before delegating, Claude should identify the scope, expected artifact, owned files, validation command, and integration criteria. Delegated work must return its findings or changes clearly, avoid unrelated edits, and include evidence from its validation.

Never delegate security-sensitive decisions without Claude's review. Never allow parallel agents to edit the same files without an explicit integration plan.

## Specialist Boundaries

- Backend: optional API, service, contract, and server-security review.
- Database: optional schema, migration, RLS, indexing, and Supabase review.
- Frontend: optional Web UI implementation or review when parallel ownership is clear.
- UI/UX: optional design-system, accessibility, and interaction review.
- AI: optional AI gateway, provider, and HeartString AI review.
- QA: optional independent test planning, regression review, and release validation.
- Project Manager: optional roadmap and dependency coordination; not a required implementation gate.

No separate native agent is required today. Claude can orchestrate future Kotlin/Compose and Swift/SwiftUI work, using specialist review only when platform-specific expertise materially reduces risk.

## Integration Sequence

```text
Claude decomposes
    -> Claude implements or delegates a bounded specialist task
    -> focused validation
    -> Claude reviews and integrates
    -> final project validation
```

The shared backend and platform architecture remain the source of truth for every client.
