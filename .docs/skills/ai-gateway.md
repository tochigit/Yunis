# AI Gateway Skill

## Purpose

Defines how AI providers are managed.

---

# Philosophy

The application communicates with one AI Gateway.

The AI Gateway communicates with providers.

---

# Supported Providers

- OpenAI
- Gemini
- DeepSeek
- Groq

Additional providers may be added without changing application code.

---

# Responsibilities

- Route requests
- Select provider
- Retry failures
- Monitor usage
- Track costs

---

# Rules

- Never expose API keys.
- Never call providers directly from the frontend.
- Keep providers interchangeable.