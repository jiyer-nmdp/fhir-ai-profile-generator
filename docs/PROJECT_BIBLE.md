# Project Bible

## Vision

Build an AI-assisted workflow that helps implementers create FHIR profiles using the existing HL7 ecosystem.

The goal is not to replace standards-based tooling, but to augment it by integrating AI with FSH, SUSHI, and validation workflows.

---

## Problem

Creating high-quality FHIR profiles requires:

- Understanding FHIR
- Learning FSH
- Using SUSHI
- Understanding compiler diagnostics
- Iterative refinement

These activities present a significant learning curve.

---

## Hypothesis

An LLM can assist implementers by:

1. Generating draft FSH
2. Compiling using SUSHI
3. Learning from compiler diagnostics
4. Producing increasingly valid profiles

---

## MVP

Input:

FHIR Patient resource

Output:

Compiled StructureDefinition

Workflow:

Patient JSON

↓

Generate FSH

↓

Compile

↓

Capture diagnostics

↓

(Repair loop)

---

## Success Criteria

Competition submission demonstrates:

✓ AI-generated FSH

✓ Successful SUSHI compilation

✓ Clear workflow

✓ Learning documented

---

## Out of Scope

- Full Implementation Guides
- Multiple resource types
- UI
- ValueSets
- CodeSystems
- Terminology services
- Multi-agent workflows
