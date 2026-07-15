class ArchitectAgent {

    async generateSpecification(patientJson) {
        console.log("Architect Agent");

        return {
            resource: "Patient",
            requiredFields: [
                "identifier",
                "name",
                "gender"
            ]
        };
    }

}

module.exports = ArchitectAgent;