const ArchitectAgent = require('../agents/architectAgent')
const FshGeneratorAgent = require('../agents/fshGeneratorAgent')
const SushiCompiler = require('../compiler/sushiCompiler')

class Orchestrator {

    constructor() {
        this.architect = new ArchitectAgent();
        this.fshgenerator = new FshGeneratorAgent();
        this.sushicompiler = new SushiCompiler();
    }

    async run(patientJson) {
        const specification = await this.architect.generateSpecification(patientJson);
        console.log('=== Profile Specification ===');
        console.log( JSON.stringify(specification, null, 2) );
        const fsh = await this.fshgenerator.generateFSH(specification);
        const compilerOutput = await this.sushicompiler.compile(fsh)

        return compilerOutput;
    }
}

module.exports = Orchestrator;