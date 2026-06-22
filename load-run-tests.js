import loadTestSuite from './load-test-suite.js';
import { generateLoadReport } from './load-generate-report.js';

async function runTests() {
    console.log('Load Testing Framework Initialized\n');
    console.log('Running placeholder test...');

    // Generating report with placeholder suite
    await generateLoadReport(loadTestSuite);
}

runTests().catch(err => {
    console.error('Error running load tests:', err);
    process.exit(1);
});
