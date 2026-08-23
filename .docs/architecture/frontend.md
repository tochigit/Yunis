# Frontend Architecture

## Purpose

Defines the structure and responsibilities of the frontend application.

---

# Technology

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

The Web client is the first implementation target. Android and iOS are separate future native clients and are documented in [Platform Architecture](platforms.md).

---

# Responsibilities

The frontend is responsible for:

- Rendering UI
- User interactions
- Navigation
- Form validation
- State management
- Calling backend APIs

The Web client consumes shared APIs as a first-class platform client. It is not the source of truth for business rules or security-sensitive behavior.

The frontend is NOT responsible for:

- Authorization
- Business rules
- Payment verification
- AI processing

---

# Folder Organization

app/

components/

hooks/

lib/

services/

styles/

types/

---

# Component Principles

Components should be:

- Small
- Reusable
- Accessible
- Responsive

Avoid large components with multiple responsibilities.

---

# State Management

Prefer:

- Server Components where appropriate
- React Query (or equivalent)
- Local state for UI-only interactions

Avoid unnecessary global state.

---

# Design Philosophy

- Mobile-first
- Clean
- Premium
- Consistent
- Fast

All UI should follow the Yunis design system.

---

# Performance

- Lazy load when appropriate
- Optimize images
- Reduce unnecessary renders
- Keep bundle size small