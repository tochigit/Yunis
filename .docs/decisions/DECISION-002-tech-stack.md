# Decision 002

## Title

Technology Stack

---

## Decision

Primary technologies:

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui
- Supabase

Client platforms:

- Web: Next.js, React, TypeScript, Tailwind CSS, shadcn/ui
- Android: Kotlin and Jetpack Compose (future)
- iOS: Swift and SwiftUI (future)

The shared backend remains the source of truth. Capacitor is not an approved native-client strategy; see [Decision 008](DECISION-008-multi-client-platform.md).

AI Providers:

- OpenAI
- Gemini
- DeepSeek
- Groq

---

## Status

Approved; mobile packaging portion superseded by Decision 008