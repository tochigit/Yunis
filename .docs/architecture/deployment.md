# Deployment Architecture

## Purpose

Defines how Yunis is built, deployed, and maintained.

---

# Objectives

Deployments should be:

- Reliable
- Repeatable
- Fast
- Safe

---

# Platforms

Web Client

- Vercel

Shared Backend

- Next.js Server
- API services and contracts

Database

- Supabase

Storage

- Supabase Storage

Native Clients (future)

- Android: Kotlin/Jetpack Compose, Google Play
- iOS: Swift/SwiftUI, Apple App Store

Native clients consume the shared backend and database. They are independently built and released; they are not packaged versions of the Web client.

Desktop clients are optional future deployments and require separate product and operational justification.

---

# Environment Strategy

Development

↓

Preview

↓

Production

Each environment should remain isolated.

Never use production data for development.

---

# Environment Variables

Environment variables should contain:

- API Keys
- Database URLs
- Service credentials
- Feature configuration

Never commit environment files.

---

# CI/CD

Every deployment should automatically:

- Install dependencies
- Run linting
- Run type checking
- Execute tests
- Build the application

Deployment proceeds only if all checks pass.

---

# Rollback

Every deployment should support rollback.

If a deployment fails:

- Restore the previous stable version
- Preserve user data
- Log the failure

---

# Monitoring

Track:

- Build failures
- Deployment status
- Application errors
- API performance
- Database health

---

# Releases

Releases should be:

- Versioned
- Documented
- Tested

Major releases should include release notes.

---

# Philosophy

Deployments should be routine.

Releasing new features should never feel risky or unpredictable.