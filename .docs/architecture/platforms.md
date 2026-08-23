# Platform Architecture

## Purpose

Defines how Yunis supports multiple clients over one shared backend and product model.

## Product Shape

Yunis is one product with multiple first-class clients:

- Web: Next.js, React, TypeScript, Tailwind CSS, and shadcn/ui.
- Android: Kotlin and Jetpack Compose (future client).
- iOS: Swift and SwiftUI (future client).
- Desktop: optional future clients, introduced only when justified.

The Web client is the immediate implementation target. Native clients must be genuinely native experiences; they are not Web wrappers.

## Shared Platform

All clients use the same:

- Account and session system
- API contracts and error model
- Backend services and business rules
- Supabase PostgreSQL database and Row Level Security
- Supabase Storage
- AI infrastructure, payment services, and notifications

Clients communicate through documented backend APIs. Clients must not duplicate security-sensitive business logic or bypass the server-driven security model with direct privileged database access.

## API and Contract Boundaries

Shared platform interfaces should define:

- Authentication and session exchange
- Authorization outcomes
- Request and response models
- Shared domain concepts
- Stable error codes and messages
- Pagination, filtering, and versioning conventions
- Platform and capability metadata where behavior depends on client support

The backend must not depend on whether a request came from Web, Android, or iOS. Client-specific presentation belongs in the clients; shared product behavior belongs in backend services.

## Platform Context

Platform-aware behavior should use a normalized request context and capability boundaries rather than scattered platform checks. The context may include:

- Platform
- Device type
- Screen class
- Input method
- Supported native capabilities
- Relevant permission state

Only capabilities that affect a current feature should be modeled. Unsupported capabilities should produce a defined response, such as an "Available in the Yunis app" or "Available on Web/Desktop" experience.

## Continuity and Deep Links

Shared Yunis URLs are a future continuity boundary. Universal Links and Android App Links should open the installed native client when appropriate and otherwise fall back to Web, while preserving the same account and backend data. Complete mobile link infrastructure is deferred to native-client implementation and deployment work.

## Delivery Sequence

1. Shared backend foundation and Web client
2. Complete and refine Web/PWA experience
3. Native Android client with Kotlin and Jetpack Compose
4. Native iOS client with Swift and SwiftUI
5. Optional desktop clients when justified
