// This will create a .fsh file that can be used as input for SUSHI in the future

const {exec} = require('child_process');
const util = require('util');
const fs = require('fs');
const path = require('path');

const CompilerOutput = require("../models/compilerOutput");

const execPromise = util.promisify(exec);

class SushiCompiler {

    async compile(fshInput) {
        console.log("=== Running SUSHI Compiler ===");
        console.log(fshInput);

        const sushiProjectPath = path.join(
            __dirname,
            "../..//sushi-project"
        );

        const fshPath = path.join(
            sushiProjectPath,
            "input/fsh/ai-generated-patient.fsh"
        );

        fs.writeFileSync(
            fshPath,
            fshInput
        );

        try {
            const {stdout, stderr } = await execPromise(
                'npx sushi .',
                {
                    cwd: sushiProjectPath,
                }
            );
            return new CompilerOutput(true, stdout, stderr);
        } catch (error) {
            return new CompilerOutput(false, error.stdout, error.stderr);
        }
    }
}

module.exports = SushiCompiler;