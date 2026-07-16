class FshGeneratorAgent {

    async generateFSH(specification) {
        let fsh = '';
        fsh += `Profile: ${specification.profileName}\n`;
        fsh += `Parent: ${specification.resourceType}\n\n`;

        specification.constraints.forEach(constraint => {
            const field = constraint.path.split('.')[1];
            fsh += `* ${field} ${constraint.min}..${constraint.max}\n`;

        });
        console.log('\n\n[3/5] FSH Generator');
        console.log(fsh);
        return fsh;
    }
}

module.exports = FshGeneratorAgent;