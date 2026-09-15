# Yunis Implementation Tasks

## Purpose

This directory contains the implementation roadmap for Yunis.

The project is divided into phases.

Each phase should be completed before moving to the next unless explicitly marked as parallel.

---

## Principles

- Complete one phase at a time.
- Keep pull requests focused.
- Update documentation when implementation changes.
- Test before marking a phase complete.

---

## Implementation Workflow

Implementation agents must understand the relevant project context before beginning work. They load only the required documentation, implement according to the project architecture and standards, validate the result, and update documentation when behavior changes.

The phase assignments below define the primary responsibility and optional specialist support for each slice of work. They are not a mandatory vendor-specific ownership model. Work may be completed by one agent or by multiple agents operating within their documented role boundaries.

| Phase | Primary responsibility | Optional specialist support |
| --- | --- | --- |
| 1. Foundation | Implement and integrate shared backend foundation and Web client | Backend, Frontend, Project Manager |
| 2. Design System | Implement and integrate the Web design system | UI/UX, Frontend |
| 3. Authentication | Implement end-to-end authentication | Backend, Database, Frontend, security review |
| 4. Database | Implement schema integration and server access | Database, Backend |
| 5. Bond System | Implement the complete feature slice | Backend, Database, Frontend, UI/UX |
| 6. Chat | Implement the complete feature slice | Backend, Database, Frontend |
| 7. Memories | Implement the complete feature slice | Backend, Database, Frontend |
| 8. Challenges | Implement the complete feature slice | Backend, Database, Frontend, AI |
| 9. HeartString AI | Implement gateway integration and feature behavior | AI, Backend, Database |
| 10. Storybooks | Implement generation flow and Web experience | AI, Backend, Frontend |
| 11. Bond Movies | Implement generation flow and Web experience | AI, Backend, Frontend |
| 12. Hearts Economy | Implement rules, persistence, and UI | Backend, Database, Frontend |
| 13. Payments & Subscriptions | Implement server-verified payment flows | Backend, Database, Frontend, security review |
| 14. Marketplace | Implement the complete feature slice | Backend, Database, Frontend |
| 15. Community | Implement the complete feature slice | Backend, Database, Frontend, moderation review |
| 16. Notifications | Implement delivery, preferences, and UI | Backend, Frontend |
| 17. Admin Panel | Implement authorized administration workflows | Backend, Database, Frontend, security review |
| 18. Testing & Optimization | Implement fixes and run the validation strategy | QA, Backend, Frontend |
| 19. Launch | Prepare and validate release | QA, Project Manager, release/operations specialist if available |

The former `Project Manager -> Backend -> Database -> Frontend -> UI/UX -> AI -> QA` chain is retired as an operating requirement. The existing specialists remain available, and historical task assignment sections are retained as project history unless a phase is actively revised.

---

## Definition of Done

A phase is complete only when:

- Requirements implemented
- Tests pass
- Documentation updated
- Code reviewed
- QA approved

---

## Current Phases

1. Foundation
2. Design System
3. Authentication
4. Database
5. Bond System
6. Chat
7. Memories
8. Challenges
9. HeartString AI
10. Storybooks
11. Bond Movies
12. Hearts Economy
13. Payments & Subscriptions
14. Marketplace
15. Community
16. Notifications
17. Admin Panel
18. Testing & Optimization
19. Launch

## Platform Delivery Sequence

The implementation roadmap remains Web-first:

1. Shared backend foundation and Web client
2. Complete and refine Web/PWA experience
3. Native Android client with Kotlin and Jetpack Compose
4. Native iOS client with Swift and SwiftUI
5. Optional desktop clients when justified

Native client work must consume shared APIs and must not introduce separate databases or a Capacitor wrapper.

When native work begins, implementation teams or agents coordinate Web, Kotlin/Jetpack Compose, and Swift/SwiftUI work against the same backend. Platform specialists are optional reviewers, not separate mandatory owners.