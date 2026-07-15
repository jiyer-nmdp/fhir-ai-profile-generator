# Project Bible

## Vision

Build an AI-assisted profile generation framework that integrates with the standard HL7 FHIR tooling ecosystem.

Rather than replacing established standards-based tools, the framework augments them by combining Large Language Models (LLMs), FHIR Shorthand (FSH), SUSHI, and iterative validation into a single developer workflow.

The long-term goal is to reduce the barrier to creating high-quality FHIR Implementation Guides while remaining compatible with existing HL7 tooling and standards.

---

## Research Question

Can a Large Language Model generate valid FHIR Shorthand (FSH) from existing FHIR resources and iteratively improve the generated artifacts using compiler feedback from the standard HL7 toolchain?

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
