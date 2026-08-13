# Security Architecture

## Purpose

Defines the security principles and requirements for Yunis.

---

# Philosophy

Security is built into every layer of the application.

Never assume the client is trustworthy.

The server is always the source of truth.

---

# Core Principles

- Secure by default
- Least privilege
- Defense in depth
- Privacy first
- Validate everything
- Audit important actions

---

# Authentication

Authentication is managed by Supabase Authentication.

Requirements:

- Secure sessions
- Email verification
- Password reset
- Session expiration
- Device management

Passwords are never stored in plaintext.

---

# Authorization

Authorization is enforced by:

- Backend services
- Row Level Security (RLS)

Every request must verify permissions before accessing or modifying data.

---

# API Security

- Validate all requests
- Sanitize all inputs
- Reject malformed requests
- Never expose internal errors
- Rate limit public endpoints

---

# AI Security

- API keys remain server-side
- Providers are accessed only through the AI Gateway
- AI responses should be validated before being displayed or stored
- AI usage should be monitored

---

# Storage Security

Private uploads must not be publicly accessible.

Examples:

- Photos
- Videos
- Voice Notes
- Storybooks
- Bond Movies

Access must always be verified before serving files.

---

# Payment Security

- Payments are verified server-side
- Never trust client payment status
- Validate webhooks
- Record every transaction
- Prevent duplicate processing

---

# Secrets

Never store:

- API Keys
- Database credentials
- Tokens
- Secrets

inside source code.

All secrets must come from environment variables.

---

# Monitoring

Log important security events:

- Failed logins
- Suspicious requests
- Permission failures
- Payment failures
- AI abuse attempts

Logs must never contain sensitive user information.

---

# Security Checklist

Every new feature should answer:

- Is authentication required?
- Is authorization enforced?
- Is user input validated?
- Are secrets protected?
- Are errors handled safely?
- Are logs appropriate?

Only after all answers are "Yes" is the feature considered secure.