class CompilerOutput {

    constructor (success, output, errors) {
        this.success = success;
        this.output = output;
        this.errors = errors;
    }
}

module.exports = CompilerOutput;