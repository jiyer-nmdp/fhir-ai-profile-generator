# Agents

## FHIR Architect

Purpose:
Analyze a FHIR resource and determine appropriate profiling constraints.

Input:
FHIR Resource JSON

Output:
Profile specification

---

## FSH Generator

Purpose:
Generate valid FHIR Shorthand (FSH) from a profile specification.

Input:
Profile specification

Output:
FSH

---

## Compiler Analyzer

Purpose:
Interpret SUSHI compiler diagnostics.

Input:
Compiler output

Output:
Structured diagnostics

---

## Repair Agent

Purpose:
Modify generated FSH to address compiler diagnostics.

Input:
FSH + diagnostics

Output:
Updated FSH

---

## Documentation Agent

Purpose:
Summarize generated artifacts and changes.

Input:
Generated artifacts

Output:
Markdown summary