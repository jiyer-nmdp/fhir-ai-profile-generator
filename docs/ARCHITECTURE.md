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
