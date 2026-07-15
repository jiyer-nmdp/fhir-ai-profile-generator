                    +--------------------+
                    |    Orchestrator    |
                    +---------+----------+
                              |
                +-------------+--------------+
                |                            |
        Patient JSON                  Agent Skills
                |                            |
                +-------------+--------------+
                              |
                              v
                   FSH Generator Agent
                              |
                              v
                        patient.fsh
                              |
                              v
                     SUSHI Compiler
                              |
                              v
                    Compiler Diagnostics
                              |
                              v
                      Repair Agent
                              |
                              |
                       (Future Loop)


Orchestrator Responsibilities

1. Accept a FHIR resource as input.
2. Invoke the FSH Generator.
3. Write generated FSH to the SUSHI project.
4. Execute the SUSHI compiler.
5. Capture compiler diagnostics.
6. Invoke the Repair Agent when needed.
7. Return the final result.