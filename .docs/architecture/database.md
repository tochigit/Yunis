# Database Architecture

## Purpose

Defines the database structure, ownership, and data flow for Yunis.

---

# Technology

- Supabase PostgreSQL
- Supabase Storage
- Row Level Security (RLS)

---

# Responsibilities

The database is responsible for:

- Persistent data
- Relationships
- Permissions
- Searchable records
- Audit data

The database is NOT responsible for:

- Business logic
- AI processing
- Payment verification
- UI state

---

# Core Principles

- Normalize where practical.
- Avoid duplicate data.
- Prefer references over copies.
- Every table must have a primary key.
- Every relationship must be explicit.

---

# Primary Domains

Authentication

↓

Users

↓

Bonds

↓

Messages

↓

Challenges

↓

Challenge Proofs

↓

Memories

↓

Storybooks

↓

Bond Movies

↓

Heart Economy

↓

Subscriptions

↓

Marketplace

↓

Community

↓

Notifications

↓

Settings

---

# Storage

Large files should never be stored inside database tables.

Examples:

- Images
- Videos
- Voice Notes
- Storybook PDFs
- Generated Movies

Database stores:

- File metadata
- Owner
- Path
- Permissions

Actual files are stored in Supabase Storage.

---

# Security

Every table must enforce Row Level Security.

Never expose private data through public queries.

Authorization is verified before every operation.

---

# Performance

- Use indexes when appropriate.
- Avoid unnecessary joins.
- Paginate large datasets.
- Archive inactive data when needed.

---

# Future Growth

The schema should support future expansion without requiring major redesigns.

New systems should integrate without breaking existing relationships.