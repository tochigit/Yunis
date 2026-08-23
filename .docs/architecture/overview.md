# Architecture Overview

## Purpose

This document provides a high-level overview of Yunis's architecture.

The system is designed to be modular, scalable, maintainable, and AI-friendly. Every major feature should function as an independent module while integrating seamlessly with the rest of the platform.

---

# Core Principles

- Modular architecture
- Mobile-first
- Server-driven security
- AI-provider agnostic
- API-first design
- Scalable infrastructure
- Clear separation of concerns
- One shared backend with multiple first-class clients

---

# System Layers

Client Layer

- Web: Next.js, React, TypeScript, Tailwind CSS, shadcn/ui
- Android: Kotlin and Jetpack Compose (future)
- iOS: Swift and SwiftUI (future)
- Optional desktop clients (future, if justified)

↓

Shared Platform Layer

- Authentication and authorization
- Versioned API contracts
- Domain services and business rules
- AI, payments, notifications, and storage services

↓

Data Layer

- Supabase PostgreSQL database
- Supabase Storage
- Cache

↓

External Services

- AI Providers
- Payment Providers
- Email Services
- Push Notifications

---

# Major Systems

- Authentication
- User Profiles
- Bond System
- Chat
- Challenges
- Memories
- Storybooks
- Bond Movies
- HeartString AI
- Hearts Economy
- Marketplace
- Community
- Notifications
- Admin Panel

Each system should remain as independent as possible.

---

# Communication

All clients communicate with the shared platform through well-defined APIs and contracts. The backend must not depend on the calling platform, and clients must not duplicate security-sensitive business logic.

Avoid direct dependencies between unrelated modules.

Platform-aware behavior should use explicit request context and capability boundaries. See [Platform Architecture](platforms.md) for client boundaries, capability metadata, and future deep-link continuity.

---

# Architecture Goals

- Easy to maintain
- Easy to extend
- Easy to test
- Easy for AI agents to understand
- Ready for future scaling