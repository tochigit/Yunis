# Next.js Skill

## Purpose

Defines how Next.js should be used throughout Yunis.

---

# Version

Use the latest stable Next.js version approved by the project.

---

# Principles

- App Router only.
- Prefer Server Components.
- Use Client Components only when necessary.
- Keep routes organized.
- Prefer built-in Next.js features before third-party libraries.

---

# Routing

Organize routes by feature.

Avoid deeply nested folders unless required.

---

# Data Fetching

- Fetch data on the server whenever possible.
- Keep client fetching minimal.
- Avoid duplicate requests.

---

# Performance

- Lazy load large components.
- Optimize images.
- Minimize JavaScript.
- Use streaming when beneficial.

---

# Don't

- Create unnecessary client components.
- Duplicate layouts.
- Ignore loading and error states.