# AI Architecture

## Purpose

Defines how Artificial Intelligence operates throughout Yunis.

---

# Philosophy

The application communicates with a single internal AI Gateway.

The AI Gateway communicates with external AI providers.

The rest of the application never talks directly to AI providers.

---

# Supported Providers

- OpenAI
- DeepSeek
- Google Gemini
- Groq

Additional providers can be added in the future without changing application code.

---

# AI Gateway Responsibilities

- Route requests
- Select provider
- Select model
- Handle retries
- Fallback between providers
- Track usage
- Track costs
- Apply rate limits

---

# AI Features

- HeartString AI
- Storybook Generation
- Bond Movie Generation
- Conversation Insights
- Reflection Generation
- Memory Summaries
- Writing Assistance

---

# Provider Independence

Changing AI providers should require configuration changes only.

Application code should remain unchanged.

---

# Security

- API keys remain server-side.
- Keys are never exposed to clients.
- AI responses are validated before use.

---

# Cost Protection

The gateway should support:

- Daily spending limits
- Request limits
- Usage monitoring
- Automatic fallback
- Graceful degradation

---

# Scalability

AI requests should support asynchronous processing where appropriate.

Long-running AI operations should not block the user interface.

---

# Future Expansion

The architecture must support:

- New providers
- New models
- New AI-powered features

without requiring significant architectural changes.