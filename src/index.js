const Orchestrator = require('./orchestrator/orchestrator');

async function main() {
    try {
        const orchestrator = new Orchestrator();
        const patient = require('../examples/patient.json');
        const result = await orchestrator.run(patient);
        console.log('Pipeline completed successfully.');
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

main();