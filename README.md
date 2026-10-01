# Yunis

**Stay connected to what matters.**

Relationships need connection. Connection needs intention.

Yunis is a relationship-centered platform for the people who already matter to one another. Implementation began on 1 October 2026. The first checkpoint establishes the Web application and development workflow; the overall foundation phase remains in progress.

## Start Locally

Use Node.js 24 LTS and npm 11 or newer. `.nvmrc` records the recommended Node major; `package-lock.json` records the dependency installation.

```sh
npm ci
npm run dev
```

Open [http://127.0.0.1:3000](http://127.0.0.1:3000). In Windows PowerShell, use `npm.cmd` if execution policy blocks `npm.ps1`.

Step 1 requires no Supabase credentials or environment variables. `.env.example` contains an optional telemetry setting. Keep actual environment files local and never commit credentials.

## Verify a Change

```sh
npm run check
```

This checks formatting, ESLint, strict TypeScript, the production build, and an HTTP smoke test. The smoke test starts the built application on an available loopback port, checks the homepage, stylesheet, and an unknown route, then stops its server. Run `npm run build` before running `npm test` separately.

To inspect the production application yourself:

```sh
npm run build
npm start
```

GitHub Actions runs the same checks on pull requests and pushes to `main`, using Node.js 24 and locked dependencies. Prettier checks application code, tooling, and new root handoff/setup files. Existing `.docs/`, `AGENTS.md`, and `PROJECT_INDEX.md` formatting is preserved; documentation changes still require link and diff review.

Tooling limitation: the current Next.js lint plugins require ESLint 9-compatible peers. ESLint 9 is [end of life](https://eslint.org/version-support/); its upgrade remains tracked in the checkpoint. Do not force ESLint 10 past incompatible plugin peer requirements.

## Project Boundaries

- `src/app/`: Web routes, layouts, and global styling.
- `src/components/ui/`: locally owned shadcn/ui primitives.
- `src/lib/`: shared presentation utilities currently used by the application.
- `scripts/`: production smoke verification.
- `.docs/`: product philosophy, requirements, architecture, standards, and implementation tasks.
- `CHECKPOINT.md`: current implementation status, verification evidence, and exact continuation.

The Web client is the first client. Business rules and privileged data access belong in shared server services. Versioned APIs and Supabase configuration are subsequent Phase 01 checkpoints; authentication and relationship features follow their documented phases. Future native clients consume the same shared backend.

The initial page and theme tokens provide a usable starting point. The complete design system is Phase 02.

## Continue the Project

Read [AGENTS.md](AGENTS.md), [.docs/README.md](.docs/README.md), [CHECKPOINT.md](CHECKPOINT.md), and only the documents relevant to the next task. [PROJECT_INDEX.md](PROJECT_INDEX.md) provides navigation. Inspect the current branch, working tree, and existing application before making changes.

Complete one verifiable checkpoint on a focused branch and PR. Update the checkpoint and relevant documentation with actual results and outstanding work. Merge only with approval for that PR, then continue when requested.
