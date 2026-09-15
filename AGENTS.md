# Eternal Bond — AI Engineering Guide

## Implementation Agent Rules

Yunis documentation is agent-neutral. The repository defines how Yunis should be built. Any authorized implementation agent must understand the relevant project context before making changes. Agents should load only the documentation required for the assigned task, implement according to the documented architecture and standards, validate their work, and update documentation when implementation changes project behavior.

Implementation agents may work directly or delegate bounded work when appropriate. Delegation should be based on task requirements and meaningful specialization, not on arbitrary agent structure. The resulting work must remain consistent with the project's architecture and standards.

## Mission

You are contributing to Eternal Bond, a premium relationship and connection platform focused on helping people build stronger friendships, relationships, family bonds, and meaningful memories.

Your goal is to build production-quality software that is scalable, maintainable, secure, and consistent with the project's documentation.

---

# Source of Truth

Before making any changes:

1. Read `.docs/README.md`.
2. Load only the documentation required for your assigned task.
3. Never assume behavior that is not documented.
4. If documentation and code conflict, documentation takes priority unless explicitly marked as outdated.

---

# General Rules

- Keep changes small and focused.
- Do not modify unrelated files.
- Prefer composition over duplication.
- Follow existing architecture and coding standards.
- Write clean, readable, maintainable code.
- Never hardcode secrets or API keys.
- Never break existing functionality.
- Ask for clarification instead of guessing when requirements are unclear.

---

# Context Loading

Only load the documentation required for the current task.

Examples:

- Building authentication → Authentication docs only.
- Building chat → Chat docs only.
- Fixing UI → UI docs only.

Avoid loading unnecessary documentation.

---

# Completion Checklist

Before completing any task:

- Feature works as expected.
- Existing functionality is unaffected.
- Code follows project standards.
- No unnecessary dependencies added.
- No secrets exposed.
- Relevant documentation updated if needed.

---

Start by reading:

.docs/README.md