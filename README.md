# FHIR AI Profile Generator

An experimental proof of concept that explores AI-assisted generation of FHIR profiles using the standard HL7 FHIR tooling ecosystem.

This project investigates whether a Large Language Model (LLM) can generate FHIR Shorthand (FSH) from existing FHIR resources, use SUSHI to compile those profiles, and iteratively improve generated artifacts using compiler feedback.

The initial proof of concept is being developed as a submission for the HL7 FHIR + AI Challenge.

---

## Problem Statement

Developing FHIR Implementation Guides and profiles requires significant expertise in:

- FHIR
- FHIR Shorthand (FSH)
- SUSHI
- StructureDefinitions
- Validation tooling

Creating profiles manually is often iterative, requiring repeated compilation and correction before a valid implementation artifact is produced.

This project explores whether AI can assist implementers during that workflow.

---

## Current Scope (MVP)

The initial proof of concept focuses on a single workflow.

```
Patient JSON
      ↓
Generate FSH
      ↓
Compile with SUSHI
      ↓
Capture compiler diagnostics
      ↓
(Repair loop - next phase)
```

---

## Current Status

🚧 Early prototype

Current milestone:

- [ ] Repository created
- [ ] Learn FSH
- [ ] Learn SUSHI
- [ ] Manual Patient profile
- [ ] Successful compilation
- [ ] AI-generated profile
- [ ] Compiler feedback capture
- [ ] AI repair loop

---

## Technology

- Node.js
- FHIR Shorthand (FSH)
- SUSHI
- HL7 FHIR R4
- GPT-based LLM

---

## License

Apache 2.0
