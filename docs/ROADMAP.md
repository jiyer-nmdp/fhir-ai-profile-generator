# Roadmap

## Purpose

This proof of concept demonstrates the core AI-assisted generation and validation loop.

The architecture intentionally separates orchestration from tooling so that local tool invocations can later be replaced with MCP servers, while specialized reasoning stages can later evolve into ACP-based collaborative agents.

---

## Milestone 1 - Project Foundation

- Repository setup
- Documentation
- Architecture
- Node.js project
- SUSHI setup

---

## Milestone 2 - Manual FSH Pipeline

- Manual Patient profile
- Manual Patient example
- Successful SUSHI compilation

---

## Milestone 3 - AI-Assisted Generation

- Patient JSON input
- AI-generated FSH
- Compile with SUSHI
- Capture compiler diagnostics

---

## Milestone 4 - Iterative Validation

- Analyze compiler diagnostics
- Repair generated FSH
- Recompile successfully

---

## Future Roadmap

- MCP tool adapters
- ACP agent collaboration
- Additional FHIR resources
- IG Publisher integration
- Terminology services