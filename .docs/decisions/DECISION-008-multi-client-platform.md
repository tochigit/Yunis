# Decision 008

## Title

Multi-client platform architecture

## Supersedes

This decision supersedes the mobile packaging portion of [Decision 002](DECISION-002-tech-stack.md) and the single-application assumptions in [Decision 005](DECISION-005-architecture.md). Those records remain historical decisions.

## Decision

Yunis is one product delivered through multiple first-class clients over a shared backend:

- Web uses Next.js, React, TypeScript, Tailwind CSS, and shadcn/ui.
- Android will use Kotlin and Jetpack Compose.
- iOS will use Swift and SwiftUI.
- Desktop clients remain optional and require separate justification.

The Web client is implemented first. Android and iOS are future native clients, not Capacitor packages or Web wrappers.

The shared backend owns authentication, authorization, business rules, domain services, AI, payments, notifications, storage access, and security-sensitive operations. All clients consume the same documented APIs, contracts, Supabase database, storage, and backend services.

Platform-specific behavior must be expressed through explicit client capabilities and request context, not duplicated platform conditionals throughout domain logic. Deep links and universal/app links are future continuity work and must resolve to the appropriate client while preserving the shared account and data model.

## Status

Approved

## Consequences

- Native client work will have separate codebases and platform-native interaction models.
- API contracts and shared domain models require deliberate ownership and versioning.
- Capacitor is no longer an active mobile architecture.
- The current implementation phase remains Web-first; this decision does not require native application scaffolding.
