# Yunis Documentation

Welcome to the Yunis knowledge base.

Yunis — Stay connected to what matters.

Relationships need connection. Connection needs intention.

This directory is the single source of truth for the project. Every AI agent and developer must use this documentation before making changes.

---

# Documentation Structure

/.docs

- bible/ → Product vision and philosophy.
- prd/ → Product requirements and feature specifications.
- architecture/ → System architecture and technical design.
- agents/ → AI agent roles and responsibilities.
- skills/ → Reusable engineering knowledge.
- tools/ → Standard operating procedures and reusable workflows.
- tasks/ → Individual implementation tasks.
- standards/ → Coding, naming, and project standards.
- prompts/ → Reusable prompts when needed.
- decisions/ → Important engineering and product decisions.
- templates/ → Templates for documentation and tasks.

---

# Development Workflow

1. An implementation agent reads `AGENTS.md` and the relevant `.docs/agents/README.md` guidance.
2. The agent identifies the task and loads only the documentation required for it.
3. The agent implements directly or coordinates bounded specialist work when specialization provides meaningful value.
4. The agent validates, reviews, integrates, and resolves conflicts.
5. The agent updates documentation when implementation changes behavior.

---

# Documentation Priority

When multiple documents exist, use this order:

1. Architecture
2. Standards
3. Decisions
4. PRD
5. Bible
6. Tasks
7. Skills
8. Tools

---

# Principles

- Keep documentation modular.
- One document = one responsibility.
- Never duplicate information.
- Update documentation when behavior changes.
- Keep files focused and easy to navigate.

---

# Current Status

Workspace Phase: In Progress

The documentation will expand as Yunis is developed.