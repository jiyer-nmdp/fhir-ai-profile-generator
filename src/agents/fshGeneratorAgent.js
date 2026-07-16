class FshGeneratorAgent {

    async generateFSH(specification) {
        console.log('FSH Generator');

        let fsh = '';

        fsh += `Profile: ${specification.profileName}\n`;
        fsh += `Parent: ${specification.resourceType}\n\n`;

        specification.constraints.forEach(constraint => {
            const field = constraint.path.split('.')[1];
            fsh += `* ${field} ${constraint.min}..${constraint.max}\n`;

        });
        return fsh;
    }
}

module.exports = FshGeneratorAgent;