# Admin Panel

## Goal

Provide administrators with a secure and comprehensive interface to manage Yunis without requiring direct database access.

The Admin Panel must never expose sensitive infrastructure details.

---

# Design Philosophy

- Fast
- Minimal
- Secure
- Audit-friendly
- Role-based

---

# Admin Roles

## Super Admin

Full access.

Can manage:

- Platform
- Users
- Staff
- Payments
- AI
- Database Tools
- Feature Flags

---

## Moderator

Can manage:

- Reports
- Community
- Users
- Marketplace Moderation

Cannot access:

- Payments
- Environment Variables
- AI Keys
- System Settings

---

## Support Staff

Can view user accounts for support purposes.

Cannot modify critical platform settings.

---

# Dashboard

Dashboard displays:

- Active Users
- New Users
- Active Bonds
- AI Requests
- Revenue
- Subscription Growth
- Hearts Purchased
- Marketplace Sales
- Server Health
- Storage Usage
- Error Rate

---

# User Management

Administrators can:

- Search users
- Suspend users
- Ban users
- Warn users
- Reset subscriptions
- View reports
- View moderation history

Never view private chats without legal/admin approval workflows.

---

# Bond Management

View:

- Bond Members
- Bond Statistics
- Reports
- Storage Usage

Never edit memories directly.

---

# Marketplace Management

Approve:

- Products
- Updates
- Creators

Reject inappropriate submissions.

---

# Community Moderation

Manage:

- Global Chat
- Reports
- Spam
- Abuse
- Appeals

---

# AI Dashboard

View:

- Requests
- Provider Usage
- Cost
- Average Response Time
- Failed Requests
- Daily Spending

Switch providers without redeployment.

---

# Payment Dashboard

View:

- Revenue
- Refunds
- Purchases
- Chargebacks
- Subscription Metrics

---

# Analytics

Examples:

- DAU
- MAU
- Retention
- Churn
- Conversion
- AI Usage
- Storybooks Generated
- Movies Generated

---

# Feature Flags

Enable or disable:

- Beta Features
- Experiments
- AI Providers
- Marketplace Features
- Community Features

without redeploying the application.

---

# Audit Logs

Every administrative action is logged.

Examples:

- Login
- Ban
- Refund
- Feature Toggle
- Role Change

Audit logs cannot be deleted.

---

# Security

Require:

- MFA
- Role Verification
- Session Timeout
- IP Logging
- Activity Logs

Sensitive actions require confirmation.

---

# Future Expansion

Support:

- Regional Moderators
- Customer Support Dashboard
- Automated Moderation
- AI-assisted Moderation