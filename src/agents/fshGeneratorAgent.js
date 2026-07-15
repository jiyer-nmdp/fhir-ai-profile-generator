class FshGeneratorAgent {

    async generateFSH(specification) {
        console.log("FSH Generator");

        return `
            Profile: GeneratedPatient
            Parent: Patient
            * identifier 1..*
            * name 1..*
            * gender 1..1
        `;
    }
}

module.exports = FshGeneratorAgent;