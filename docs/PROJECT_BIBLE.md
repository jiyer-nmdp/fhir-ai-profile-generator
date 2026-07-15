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

An AI-assisted workflow that combines LLM-generated FSH with the standard HL7 validation toolchain can reduce the effort required to create valid FHIR profiles while preserving compatibility with existing standards and tooling.

1. Generating draft FSH
2. Compiling using SUSHI
3. Learning from compiler diagnostics
4. Producing increasingly valid profiles

---

## MVP
The initial proof of concept intentionally focuses on a single FHIR resource (Patient) in order to validate the architecture before expanding to additional resource types.

#### Input: FHIR Patient resource

#### Output: Compiled StructureDefinition

#### Workflow:

Patient JSON

↓

Orchestrator

↓

FSH Generator

↓

patient.fsh

↓

SUSHI

↓

Compiler Output

↓

Repair loop (agent)

---

## Success Criteria

The proof of concept demonstrates:

✓ Generation of FSH from a FHIR Patient resource

✓ Successful compilation using SUSHI

✓ Capture of compiler diagnostics

✓ Demonstration of an iterative validation workflow

✓ Clear architecture and documented design decisions

---

## Out of Scope

- Full Implementation Guides
- Multiple resource types
- UI
- ValueSets
- CodeSystems
- Terminology services
- Multi-agent workflows
