# Decision 005

## Title

Architecture

---

## Decision

The application will use a modular architecture.

Each system should remain independent whenever possible.

Communication between systems should occur through clearly defined interfaces.

Yunis is delivered through multiple first-class clients over shared backend services. The Web client is implemented first; future Android and iOS clients remain native codebases and consume the same APIs, account system, database, storage, AI infrastructure, and business rules. See [Decision 008](DECISION-008-multi-client-platform.md) for the superseding platform decision.

---

## Status

Approved