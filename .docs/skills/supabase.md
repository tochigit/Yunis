# Supabase Skill

## Purpose

Defines how Supabase should be used throughout Yunis.

---

# Responsibilities

Supabase provides:

- Authentication
- PostgreSQL Database
- Storage
- Row Level Security
- Realtime
- Edge Functions (when appropriate)

---

# Principles

- Authentication first.
- RLS on every protected table.
- Storage for large files only.
- Database for structured data only.

---

# Database

- Use migrations.
- Never manually edit production tables.
- Index frequently queried columns.
- Normalize where practical.

---

# Storage

Store:

- Images
- Videos
- Voice Notes
- PDFs
- Generated Assets

Never store large binary files inside database tables.

---

# Security

- Enable RLS.
- Never expose service role keys.
- Validate permissions server-side.