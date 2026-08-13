# Yunis Project Rules

These rules apply to every AI agent and every contributor.

---

# 1. Code Quality

- Production-ready code only.
- No placeholder implementations unless explicitly requested.
- Prefer readability over cleverness.
- Keep functions and components focused.

---

# 2. Project Structure

- One feature, one responsibility.
- Reuse existing code before creating new code.
- Avoid duplicate logic.
- Keep folders organized.

---

# 3. Documentation

- Update documentation whenever functionality changes.
- Never leave outdated documentation.
- Keep documents concise and modular.

---

# 4. Security

- Never expose secrets.
- Never commit API keys.
- Validate all user input.
- Enforce authorization on the server.
- Never trust client-side data.

---

# 5. Performance

- Avoid unnecessary re-renders.
- Lazy load when appropriate.
- Optimize database queries.
- Keep bundle size reasonable.

---

# 6. UI/UX

- Follow the Yunis design system.
- Mobile-first.
- Responsive by default.
- Accessibility should never be ignored.
- Consistency is more important than creativity.

---

# 7. AI Development

- Read only the documentation required for the current task.
- Never modify unrelated files.
- Finish one task before starting another.
- Ask for clarification instead of making assumptions.

---

# 8. Git

- Keep commits focused.
- One feature per branch.
- Never commit broken code.
- Pull before pushing.

---

# 9. Testing

Before marking a task complete:

- Build succeeds.
- No TypeScript errors.
- No lint errors.
- Existing functionality still works.

---

# 10. Philosophy

Build Yunis like a product that will serve millions of users.

Every decision should prioritize:

- Simplicity
- Scalability
- Maintainability
- Reliability
- User trust