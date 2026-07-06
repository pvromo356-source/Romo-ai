# Romo AI Decision Log

## Decision 001

Date:
2026-07-05

Title:
Romo AI will be AI-agnostic.

Status:
Accepted

Why:
Romo AI should never depend directly on OpenAI, Anthropic, Google, NVIDIA or any single provider.

Impact:
We will build an AI Router so future models can be swapped without rewriting the product.

Alternatives Considered:
- OpenAI only
- Claude only
- Gemini only

Decision:
Build Romo AI around our own intelligence layer, not around one provider.
