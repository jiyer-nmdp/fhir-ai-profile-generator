class CompilerOutput {

    constructor (success, output, errors, artifacts = []) {
        this.success = success;
        this.output = output;
        this.errors = errors;
        this.artifacts = artifacts;
    }
}

module.exports = CompilerOutput;