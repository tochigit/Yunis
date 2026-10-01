# Quick Start

If you're new to the project, read these files in order:

1. README.md
2. PROJECT_INDEX.md
3. .docs/architecture/
4. .docs/standards/
5. .docs/decisions/
6. .docs/prd/
7. .docs/bible/
8. .docs/tasks/

Only begin implementation after understanding the documentation.

# Project Index

Master navigation for the Yunis documentation. This index is generated from the files that currently exist under `.docs` and should be regenerated whenever documentation is added, removed, or reorganized.

Yunis — Stay connected to what matters.

Relationships need connection. Connection needs intention.

## Table of Contents

- [Documentation Flow](#documentation-flow)
- [Where Should I Edit?](#where-should-i-edit)
- [Root Documentation](#root-documentation)
- [Agents](#agents)
- [Architecture](#architecture)
- [Bible](#bible)
- [Decisions](#decisions)
- [PRD](#prd)
- [Skills](#skills)
- [Standards](#standards)
- [Tasks](#tasks)
- [Templates](#templates)
- [Tools](#tools)

## Documentation Flow

```text
Architecture
↓
Standards
↓
Decisions
↓
PRD
↓
Bible
↓
Tasks
↓
Implementation
```

Architecture defines the technical shape of the system. Standards define how implementation should be written inside that architecture. Decisions record major accepted choices. PRD documents product behavior and feature requirements. Bible documents enduring product philosophy. Tasks translate the docs into implementation phases.

## Where Should I Edit?

If changing product requirements:
→ Edit [PRD](#prd).

If changing long-term philosophy:
→ Edit [Bible](#bible).

If changing implementation order:
→ Edit [Tasks](#tasks).

If changing coding conventions:
→ Edit [Standards](#standards).

If changing architecture:
→ Edit [Architecture](#architecture).

If changing agent ownership:
→ Edit [Agents](#agents).

If changing reusable engineering guidance:
→ Edit [Skills](#skills) or [Tools](#tools).

If recording a major product or engineering choice:
→ Edit [Decisions](#decisions).

## Root Documentation

- [README.md](README.md)
  - Explains local Web development, validation commands, current application boundaries, and how to continue implementation.

- [CHECKPOINT.md](CHECKPOINT.md)
  - Records the current verified implementation step, branch and PR evidence, remaining work, and exact continuation action.

- [.docs/README.md](.docs/README.md)
  - Entry point for the Yunis knowledge base, documentation structure, workflow, and priority order. It governs how agents and developers should load the rest of the docs.

## Agents

- [.docs/agents/README.md](.docs/agents/README.md)
  - Defines the project’s agent-neutral implementation workflow, specialist boundaries, delegation rules, and integration requirements.

- [.docs/agents/ai.md](.docs/agents/ai.md)
  - Defines the AI agent role, responsibilities, ownership boundaries, and standards. Related to AI architecture, HeartString AI requirements, and AI gateway skill guidance.

- [.docs/agents/backend.md](.docs/agents/backend.md)
  - Defines backend agent responsibilities, owned surfaces, exclusions, and standards. Related to backend architecture, API templates, database docs, and security requirements.

- [.docs/agents/database.md](.docs/agents/database.md)
  - Defines database agent responsibilities, ownership, restrictions, and standards. Related to database architecture, Supabase guidance, and database decision records.

- [.docs/agents/frontend.md](.docs/agents/frontend.md)
  - Defines frontend agent responsibilities, owned UI surfaces, exclusions, and standards. Related to frontend architecture, React, Next.js, Tailwind, and shadcn/ui skills.

- [.docs/agents/project-manager.md](.docs/agents/project-manager.md)
  - Defines the project manager agent role, modifiable documents, restricted areas, and workflow. Related to task planning, PRD organization, and documentation updates.

- [.docs/agents/qa.md](.docs/agents/qa.md)
  - Defines QA responsibilities, owned testing surfaces, exclusions, and testing checklist expectations. Related to testing tasks, final checklist, and code review workflows.

- [.docs/agents/ui-ux.md](.docs/agents/ui-ux.md)
  - Defines UI/UX agent responsibilities, owned design areas, exclusions, and design principles. Related to design language, design system tasks, and component guidance.

## Architecture

- [.docs/architecture/ai.md](.docs/architecture/ai.md)
  - Describes AI architecture purpose, provider strategy, gateway responsibilities, and AI feature boundaries. Related to HeartString AI PRD, AI behavior philosophy, and AI gateway skill documentation.

- [.docs/architecture/backend.md](.docs/architecture/backend.md)
  - Defines backend architecture responsibilities, principles, services, and rules. Related to API templates, security architecture, database architecture, and backend agent ownership.

- [.docs/architecture/database.md](.docs/architecture/database.md)
  - Defines database technology, responsibilities, core principles, and primary domains. Related to Supabase skill guidance, database templates, and database decision records.

- [.docs/architecture/deployment.md](.docs/architecture/deployment.md)
  - Describes deployment objectives, platforms, environment strategy, and environment variable handling. Related to release process, deployment checklist, and security architecture.

- [.docs/architecture/frontend.md](.docs/architecture/frontend.md)
  - Defines frontend technology, folder organization, component principles, and frontend responsibilities. Related to React, Next.js, Tailwind, shadcn/ui, and design system tasks.

- [.docs/architecture/overview.md](.docs/architecture/overview.md)
  - Provides the high-level system architecture, system layers, major systems, and communication model. Related to all specialized architecture documents and implementation tasks.

- [.docs/architecture/platforms.md](.docs/architecture/platforms.md)
  - Defines the shared backend, first-class Web/Android/iOS clients, API boundaries, capability context, deep-link continuity, and delivery sequence.

- [.docs/architecture/security.md](.docs/architecture/security.md)
  - Defines security philosophy, authentication, authorization, and core security principles. Related to product security PRD, security review tool, and deployment architecture.

## Bible

- [.docs/bible/README.md](.docs/bible/README.md)
  - Entry point for the Yunis Bible, reading order, and relationship to other documentation. Related to all philosophy documents in this folder.

- [.docs/bible/ai-behavior.md](.docs/bible/ai-behavior.md)
  - Defines expected AI communication style, decision making, transparency, privacy, and reliability. Related to AI philosophy, AI architecture, and HeartString AI requirements.

- [.docs/bible/ai-philosophy.md](.docs/bible/ai-philosophy.md)
  - Defines the product philosophy for AI, including what AI should and should not do. Related to AI behavior, AI architecture, and AI gateway skill guidance.

- [.docs/bible/bond-lifecycle.md](.docs/bible/bond-lifecycle.md)
  - Describes the lifecycle model for bonds inside Yunis. Related to the bond system PRD and relationship growth model.

- [.docs/bible/community-philosophy.md](.docs/bible/community-philosophy.md)
  - Defines the community purpose, principles, content expectations, privacy posture, and growth approach. Related to the community PRD and moderation requirements.

- [.docs/bible/competitive-landscape.md](.docs/bible/competitive-landscape.md)
  - Defines Yunis's competitive positioning, Meetup's adjacent role, the recurring relationship lifecycle, growth hypotheses, and a framework for evaluating compatible expansion. Related to product philosophy, product principles, and bond lifecycle.

- [.docs/bible/design-language.md](.docs/bible/design-language.md)
  - Defines the product design philosophy, goals, visual identity, UX approach, and component direction. Related to frontend architecture, UI/UX agent guidance, and design system tasks.

- [.docs/bible/engineering-philosophy.md](.docs/bible/engineering-philosophy.md)
  - Defines broad engineering principles and the final engineering principle for the project. Related to standards, architecture, and implementation task execution.

- [.docs/bible/future-vision.md](.docs/bible/future-vision.md)
  - Describes long-term product vision, future features, global expansion, and AI evolution. Related to roadmap, PRD vision, and future planning decisions.

- [.docs/bible/heart-economy-rules.md](.docs/bible/heart-economy-rules.md)
  - Defines the philosophy and rules for Hearts, including spending priorities, free Hearts, and inflation concerns. Related to Hearts Economy PRD, monetization PRD, and marketplace PRD.

- [.docs/bible/monetization-philosophy.md](.docs/bible/monetization-philosophy.md)
  - Defines monetization principles, business model posture, trust expectations, and long-term thinking. Related to subscriptions, Hearts Economy, marketplace, and monetization PRDs.

- [.docs/bible/philosophy.md](.docs/bible/philosophy.md)
  - Defines the core Yunis mission, beliefs, product identity, and success criteria. Related to product vision, product principles, and all feature requirements.

- [.docs/bible/product-principles.md](.docs/bible/product-principles.md)
  - Lists the core product principles for relationships, meaning, quality, AI, privacy, and trust. Related to PRD decisions and design language.

- [.docs/bible/relationship-growth-model.md](.docs/bible/relationship-growth-model.md)
  - Defines relationship growth signals, signals to ignore, and growth model principles. Related to bond lifecycle, challenges, memories, and HeartString AI behavior.

- [.docs/bible/relationship-philosophy.md](.docs/bible/relationship-philosophy.md)
  - Currently empty placeholder for relationship philosophy documentation. Related to bond lifecycle, relationship growth model, and product philosophy.

- [.docs/bible/retention-philosopy.md](.docs/bible/retention-philosopy.md)
  - Defines healthy retention, unhealthy retention, notification principles, and success expectations. Related to notifications PRD, product principles, and community philosophy.

- [.docs/bible/storybook-generation.md](.docs/bible/storybook-generation.md)
  - Defines philosophy for AI-generated storybooks, source material, AI responsibilities, writing style, and permanence. Related to storybook PRD, memories PRD, and AI behavior.

- [.docs/bible/things-we-will-never-do.md](.docs/bible/things-we-will-never-do.md)
  - Lists explicit product and ethical boundaries the project will not cross. Related to product principles, monetization philosophy, privacy, and AI behavior.

## Decisions

- [.docs/decisions/README.md](.docs/decisions/README.md)
  - Entry point for engineering decision records. Related to all individual decision documents and architecture history.

- [.docs/decisions/DECISION-001-project-philosophy.md](.docs/decisions/DECISION-001-project-philosophy.md)
  - Records the accepted decision for project philosophy. Related to the Bible, product vision, and product principles.

- [.docs/decisions/DECISION-002-tech-stack.md](.docs/decisions/DECISION-002-tech-stack.md)
  - Records the accepted technology stack decision. Related to architecture, standards, and stack-specific skill documents.

- [.docs/decisions/DECISION-003-ai-strategy.md](.docs/decisions/DECISION-003-ai-strategy.md)
  - Records the accepted AI strategy decision. Related to AI architecture, AI philosophy, HeartString AI, and AI gateway guidance.

- [.docs/decisions/DECISION-004-documentation.md](.docs/decisions/DECISION-004-documentation.md)
  - Records the accepted documentation strategy decision. Related to `.docs/README.md`, templates, and documentation update workflows.

- [.docs/decisions/DECISION-005-architecture.md](.docs/decisions/DECISION-005-architecture.md)
  - Records the accepted architecture decision. Related to architecture overview and specialized architecture documents.

- [.docs/decisions/DECISION-006-security.md](.docs/decisions/DECISION-006-security.md)
  - Records the accepted security decision. Related to security architecture, product security PRD, and security review workflow.

- [.docs/decisions/DECISION-007-database.md](.docs/decisions/DECISION-007-database.md)
  - Records the accepted database decision. Related to database architecture, Supabase skill guidance, and database templates.

- [.docs/decisions/DECISION-008-multi-client-platform.md](.docs/decisions/DECISION-008-multi-client-platform.md)
  - Records the approved multi-client platform architecture and supersedes the Capacitor mobile strategy. Related to platform architecture, deployment, frontend, backend, and task sequencing.

## PRD

- [.docs/prd/README.md](.docs/prd/README.md)
  - Entry point for Yunis product requirements, goals, and reading order. Related to all feature-specific PRD files.

- [.docs/prd/admin-panel.md](.docs/prd/admin-panel.md)
  - Defines admin panel goals, design philosophy, and admin roles. Related to admin implementation tasks, security requirements, and moderation workflows.

- [.docs/prd/bond-movies.md](.docs/prd/bond-movies.md)
  - Defines Bond Movies goals, source material, AI responsibilities, movie types, and customization. Related to memories, storybooks, AI behavior, and monetization.

- [.docs/prd/bonds.md](.docs/prd/bonds.md)
  - Defines the bond system, ownership, bond information, types, and customization. Related to bond lifecycle, relationship growth model, and bond implementation tasks.

- [.docs/prd/challenges.md](.docs/prd/challenges.md)
  - Defines challenge goals, types, categories, creation, and proof requirements. Related to relationship growth, Hearts Economy, notifications, and community.

- [.docs/prd/chat.md](.docs/prd/chat.md)
  - Defines messaging, AI assistance, shared content, and chat experience requirements. Related to HeartString AI, notifications, security, and chat implementation tasks.

- [.docs/prd/community.md](.docs/prd/community.md)
  - Defines community goals, areas, global chat, community profiles, and moderation. Related to community philosophy, admin panel, and security requirements.

- [.docs/prd/heart-economy.md](.docs/prd/heart-economy.md)
  - Defines Hearts Economy goals, philosophy, uses, earning, and purchases. Related to heart economy rules, monetization, marketplace, and subscriptions.

- [.docs/prd/heartstring-ai.md](.docs/prd/heartstring-ai.md)
  - Defines HeartString AI goals, responsibilities, personality, context, and permissions. Related to AI architecture, AI behavior, chat, memories, and storybooks.

- [.docs/prd/marketplace.md](.docs/prd/marketplace.md)
  - Defines marketplace goals, philosophy, categories, purchases, and creator program. Related to Hearts Economy, monetization, subscriptions, and community.

- [.docs/prd/memories.md](.docs/prd/memories.md)
  - Defines memory types, memory information, albums, and AI features. Related to bonds, storybooks, Bond Movies, and HeartString AI.

- [.docs/prd/monetization.md](.docs/prd/monetization.md)
  - Defines monetization goals and revenue sources, including subscriptions, Hearts, and marketplace. Related to monetization philosophy, subscriptions, Hearts Economy, and marketplace.

- [.docs/prd/notifications.md](.docs/prd/notifications.md)
  - Defines notification categories, smart notifications, controls, and quiet hours. Related to retention philosophy, chat, challenges, and community.

- [.docs/prd/onboarding.md](.docs/prd/onboarding.md)
  - Defines account creation, first-time experience, first bond, and empty state requirements. Related to user profiles, bonds, authentication tasks, and frontend architecture.

- [.docs/prd/profiles.md](.docs/prd/profiles.md)
  - Defines user profile information, customization, privacy, and statistics. Related to onboarding, community profiles, privacy, and database architecture.

- [.docs/prd/roadmap.md](.docs/prd/roadmap.md)
  - Defines product roadmap phases. Related to implementation tasks and future vision.

- [.docs/prd/security.md](.docs/prd/security.md)
  - Defines product security philosophy, authentication, authorization, storage, and AI privacy. Related to security architecture, security decision records, and security review workflows.

- [.docs/prd/storybook.md](.docs/prd/storybook.md)
  - Defines storybook goals, sources, AI responsibilities, structure, and editions. Related to storybook generation philosophy, memories, HeartString AI, and monetization.

- [.docs/prd/subscriptions.md](.docs/prd/subscriptions.md)
  - Defines subscription goals, plans, benefits, storage, and relationship to Hearts. Related to monetization philosophy, monetization PRD, Hearts Economy, and payments tasks.

- [.docs/prd/users.md](.docs/prd/users.md)
  - Defines target users, age, user types, motivations, and excluded audiences. Related to product vision, onboarding, community, and feature prioritization.

- [.docs/prd/vision.md](.docs/prd/vision.md)
  - Defines product name, mission, vision, values, and product goals. Related to project philosophy, product principles, roadmap, and all product requirements.

## Skills

- [.docs/skills/ai-gateway.md](.docs/skills/ai-gateway.md)
  - Defines reusable AI gateway implementation guidance, provider support, responsibilities, and rules. Related to AI architecture, HeartString AI, and AI agent ownership.

- [.docs/skills/animation.md](.docs/skills/animation.md)
  - Defines animation philosophy, principles, appropriate uses, and animation limits. Related to design language, frontend architecture, and UI implementation tasks.

- [.docs/skills/capacitor.md](.docs/skills/capacitor.md)
  - Deprecated historical record of the former Capacitor packaging approach. New native work follows the platform architecture decision.

- [.docs/skills/glassmorphism.md](.docs/skills/glassmorphism.md)
  - Defines glassmorphism design direction, principles, avoided patterns, and design goal. Related to design language, Tailwind guidance, and component design.

- [.docs/skills/nextjs.md](.docs/skills/nextjs.md)
  - Defines Next.js purpose, version expectations, routing, data fetching, and principles. Related to frontend architecture, React, TypeScript, and implementation tasks.

- [.docs/skills/react.md](.docs/skills/react.md)
  - Defines React principles for hooks, components, props, and component structure. Related to frontend architecture, TypeScript, and component templates.

- [.docs/skills/shadcn-ui.md](.docs/skills/shadcn-ui.md)
  - Defines shadcn/ui styling, component, and accessibility guidance. Related to design language, Tailwind, frontend architecture, and UI components.

- [.docs/skills/supabase.md](.docs/skills/supabase.md)
  - Defines Supabase responsibilities, principles, database guidance, and storage guidance. Related to database architecture, security architecture, and backend work.

- [.docs/skills/tailwind.md](.docs/skills/tailwind.md)
  - Defines Tailwind CSS principles, organization, responsive behavior, and avoided patterns. Related to design language, frontend architecture, and shadcn/ui.

- [.docs/skills/typescript.md](.docs/skills/typescript.md)
  - Defines TypeScript rules, standards, and error-handling expectations. Related to coding standards, React, Next.js, backend, and frontend implementation.

## Standards

- [.docs/standards/coding-standards.md](.docs/standards/coding-standards.md)
  - Currently empty placeholder for coding standards. Related to TypeScript, React, backend, and frontend implementation conventions.

- [.docs/standards/folder-structure.md](.docs/standards/folder-structure.md)
  - Currently empty placeholder for folder structure standards. Related to frontend architecture, backend architecture, and project organization.

- [.docs/standards/git-workflow.md](.docs/standards/git-workflow.md)
  - Currently empty placeholder for Git workflow standards. Related to release process, code review, and task execution.

- [.docs/standards/naming-conventions.md](.docs/standards/naming-conventions.md)
  - Currently empty placeholder for naming conventions. Related to coding standards, database templates, and component templates.

- [.docs/standards/project-rules.md](.docs/standards/project-rules.md)
  - Defines project rules for code quality, structure, documentation, security, and performance. Related to all implementation tasks and review workflows.

- [.docs/standards/tech-stack.md](.docs/standards/tech-stack.md)
  - Currently empty placeholder for tech stack standards. Related to technology decisions, architecture, and stack-specific skill documents.

## Tasks

- [.docs/tasks/README.md](.docs/tasks/README.md)
  - Entry point for implementation tasks, principles, AI workflow, definition of done, and current phases. Related to all phase task documents and final checklist.

- [.docs/tasks/final-checklist.md](.docs/tasks/final-checklist.md)
  - Defines final checklist items for documentation, infrastructure, core features, premium features, and platform features. Related to launch, QA, and release process.

- [.docs/tasks/phase-01-foundation.md](.docs/tasks/phase-01-foundation.md)
  - Defines foundation phase goal, deliverables, dependencies, historical specialist assignments, and success criteria. Related to architecture, standards, and initial project setup.

- [.docs/tasks/phase-02-design-system.md](.docs/tasks/phase-02-design-system.md)
  - Defines design system phase goal, deliverables, dependencies, historical specialist assignments, and success criteria. Related to design language, UI/UX agent guidance, and component standards.

- [.docs/tasks/phase-03-authentication.md](.docs/tasks/phase-03-authentication.md)
  - Defines authentication phase goal, deliverables, dependencies, historical specialist assignments, and success criteria. Related to security architecture, product security, onboarding, and Supabase.

- [.docs/tasks/phase-04-database.md](.docs/tasks/phase-04-database.md)
  - Defines database phase goal, deliverables, dependencies, historical specialist assignments, and success criteria. Related to database architecture, Supabase, and database decisions.

- [.docs/tasks/phase-05-bond-system.md](.docs/tasks/phase-05-bond-system.md)
  - Defines bond system phase goal, deliverables, dependencies, historical specialist assignments, and success criteria. Related to bonds PRD, bond lifecycle, and relationship growth model.

- [.docs/tasks/phase-06-chat.md](.docs/tasks/phase-06-chat.md)
  - Defines chat phase goal, deliverables, dependencies, historical specialist assignments, and success criteria. Related to chat PRD, HeartString AI, notifications, and security.

- [.docs/tasks/phase-07-memories.md](.docs/tasks/phase-07-memories.md)
  - Defines memories phase goal, deliverables, dependencies, historical specialist assignments, and success criteria. Related to memories PRD, bonds, storybooks, and Bond Movies.

- [.docs/tasks/phase-08-challenges.md](.docs/tasks/phase-08-challenges.md)
  - Defines challenges phase goal, deliverables, dependencies, historical specialist assignments, and success criteria. Related to challenges PRD, Hearts Economy, notifications, and relationship growth.

- [.docs/tasks/phase-09-heartstring-ai.md](.docs/tasks/phase-09-heartstring-ai.md)
  - Defines HeartString AI phase goal, deliverables, dependencies, historical specialist assignments, and success criteria. Related to HeartString AI PRD, AI architecture, and AI behavior.

- [.docs/tasks/phase-10-storybooks.md](.docs/tasks/phase-10-storybooks.md)
  - Defines storybooks phase goal, deliverables, dependencies, historical specialist assignments, and success criteria. Related to storybook PRD, storybook generation philosophy, and memories.

- [.docs/tasks/phase-11-bond-movies.md](.docs/tasks/phase-11-bond-movies.md)
  - Defines Bond Movies phase goal, deliverables, dependencies, historical specialist assignments, and success criteria. Related to Bond Movies PRD, storybooks, memories, and AI.

- [.docs/tasks/phase-12-hearts-economy.md](.docs/tasks/phase-12-hearts-economy.md)
  - Defines Hearts Economy phase goal, deliverables, dependencies, historical specialist assignments, and success criteria. Related to Hearts Economy PRD, heart economy rules, monetization, and marketplace.

- [.docs/tasks/phase-13-payments-subscriptions.md](.docs/tasks/phase-13-payments-subscriptions.md)
  - Defines payments and subscriptions phase goal, deliverables, dependencies, historical specialist assignments, and success criteria. Related to subscriptions PRD, monetization PRD, and deployment/security architecture.

- [.docs/tasks/phase-14-marketplace.md](.docs/tasks/phase-14-marketplace.md)
  - Defines marketplace phase goal, deliverables, dependencies, historical specialist assignments, and success criteria. Related to marketplace PRD, Hearts Economy, community, and monetization.

- [.docs/tasks/phase-15-community.md](.docs/tasks/phase-15-community.md)
  - Defines community phase goal, deliverables, dependencies, historical specialist assignments, and success criteria. Related to community PRD, community philosophy, profiles, and moderation.

- [.docs/tasks/phase-16-notifications.md](.docs/tasks/phase-16-notifications.md)
  - Defines notifications phase goal, deliverables, dependencies, historical specialist assignments, and success criteria. Related to notifications PRD, retention philosophy, chat, and challenges.

- [.docs/tasks/phase-17-admin-panel.md](.docs/tasks/phase-17-admin-panel.md)
  - Defines admin panel phase goal, deliverables, dependencies, historical specialist assignments, and success criteria. Related to admin panel PRD, security, community moderation, and QA.

- [.docs/tasks/phase-18-testing-optimization.md](.docs/tasks/phase-18-testing-optimization.md)
  - Defines testing and optimization phase goal, deliverables, dependencies, historical specialist assignments, and success criteria. Related to QA agent guidance, testing checklist, performance review, and final checklist.

- [.docs/tasks/phase-19-launch.md](.docs/tasks/phase-19-launch.md)
  - Defines launch phase goal, deliverables, dependencies, historical specialist assignments, and success criteria. Related to deployment checklist, release process, final checklist, and product readiness.

## Templates

- [.docs/templates/agent-template.md](.docs/templates/agent-template.md)
  - Template for documenting an agent role, responsibilities, ownership, exclusions, and workflow. Related to the agent documents.

- [.docs/templates/api-template.md](.docs/templates/api-template.md)
  - Template for documenting API endpoints, methods, authentication, request, and purpose. Related to backend architecture and feature implementation.

- [.docs/templates/component-template.md](.docs/templates/component-template.md)
  - Template for documenting components, props, state, and events. Related to frontend architecture, React, shadcn/ui, and design system work.

- [.docs/templates/database-template.md](.docs/templates/database-template.md)
  - Template for documenting database tables, columns, relationships, and indexes. Related to database architecture and Supabase guidance.

- [.docs/templates/decision-template.md](.docs/templates/decision-template.md)
  - Template for recording decision ID, title, context, decision, and alternatives. Related to the decisions folder.

- [.docs/templates/feature-template.md](.docs/templates/feature-template.md)
  - Template for documenting feature name, objective, user story, requirements, and acceptance criteria. Related to PRD files and feature implementation tasks.

- [.docs/templates/prd-template.md](.docs/templates/prd-template.md)
  - Template for product requirements, goals, user stories, functional requirements, and non-functional requirements. Related to the PRD folder.

- [.docs/templates/task-template.md](.docs/templates/task-template.md)
  - Template for implementation tasks, affected files, objective, and description. Related to the tasks folder and project manager workflow.

## Tools

- [.docs/tools/code-review.md](.docs/tools/code-review.md)
  - Defines code review purpose, verification criteria, rejection criteria, and acceptance criteria. Related to QA, standards, and implementation review.

- [.docs/tools/component-builder.md](.docs/tools/component-builder.md)
  - Defines component builder inputs, process, checklist, and output expectations. Related to component templates, frontend architecture, and design system tasks.

- [.docs/tools/deployment-checklist.md](.docs/tools/deployment-checklist.md)
  - Provides deployment checklist guidance. Related to deployment architecture, release process, launch tasks, and final checklist.

- [.docs/tools/documentation-updater.md](.docs/tools/documentation-updater.md)
  - Defines when documentation should be updated, what not to update, verification expectations, and output. Related to documentation decision records and all docs maintenance.

- [.docs/tools/feature-builder.md](.docs/tools/feature-builder.md)
  - Defines feature builder inputs, process, requirements, and output expectations. Related to PRD files, task phases, and implementation work.

- [.docs/tools/perfomance-review.md](.docs/tools/perfomance-review.md)
  - Defines performance review verification guidance. Related to testing and optimization tasks, final checklist, and frontend/backend standards.

- [.docs/tools/release-process.md](.docs/tools/release-process.md)
  - Defines release process steps. Related to deployment checklist, final checklist, launch tasks, and Git workflow standards.

- [.docs/tools/security-review.md](.docs/tools/security-review.md)
  - Defines security review purpose, checklist, and rejection criteria. Related to security architecture, product security PRD, and authentication/database tasks.

- [.docs/tools/testing-checklist.md](.docs/tools/testing-checklist.md)
  - Provides testing checklist guidance. Related to QA agent responsibilities, testing and optimization tasks, and final checklist.


| Role | Primary Responsibility |
| ---- | --------------------- |
| Implementation | Architecture, integration, validation, and change delivery |
| Backend | APIs, services, business logic, and platform security |
| Frontend | Web UI implementation and user-facing product surfaces |
| Database | Schema, migrations, security, and data integrity |
| UI/UX | Design system, interaction, and accessibility review |
| QA | Verification, regression checks, and release confidence |
