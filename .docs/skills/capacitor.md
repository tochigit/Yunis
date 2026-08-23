# Capacitor Skill (Deprecated)

> Historical record only. Capacitor is no longer the Yunis mobile application architecture.

## Purpose

This document records the previous packaging approach. It must not be used for new mobile work.

---

# Responsibilities

The previous approach used Capacitor for:

- Android build
- iOS build
- Native APIs
- App Store deployment

---

# Principles

- Web-first.
- Native when necessary.
- One codebase.
- Consistent experience.

---

# Native Features

The previous approach used Capacitor plugins for:

- Push Notifications
- Camera
- File Access
- Share
- Deep Links

---

# Current Guidance

Do not add Capacitor packaging or plugin dependencies. Future Android work belongs in Kotlin/Jetpack Compose and future iOS work belongs in Swift/SwiftUI. Both clients must consume the shared backend and follow [Platform Architecture](../architecture/platforms.md).

Business logic remains inside shared backend services.