const Orchestrator = require('./orchestrator/orchestrator');

async function main() {
    try {
        const orchestrator = new Orchestrator();
        const patient = require('../examples/patient.json');
        const result = await orchestrator.run(patient);
        if(result.success) {
            console.log("Pipeline completed successfully");
        }
        else {
            console.log("Pipeline failed");
        }
        console.log(JSON.stringify(result, null, 2));
    } catch (error) {
        console.log(error);
    }
}

main();