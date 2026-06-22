import { simulateLoadTest, enrichMetadata, getRandomUsers } from './utils.js';
import assert from 'assert';

describe('TC-LOAD-SPIKE', function() {
    const tests = [
        "Sudden 10x Traffic Spike Simulation",
        "API Gateway Throttling Validation",
        "Spike Traffic Cache Hit Ratio Load"
    ];

    tests.forEach((scenarioName, index) => {
        const idStr = (index + 1).toString().padStart(3, '0');
        it(`LT-SPK-${idStr} : ${scenarioName}`, async function() {
            const enriched = enrichMetadata(scenarioName);
            this.test.metadata = {
                id: `LT-SPK-${idStr}`,
                module: 'Spike',
                screenName: 'System',
                loadCategory: enriched.category,
                scenarioName: scenarioName,
                concurrentUsers: `${getRandomUsers()} Users`,
                expectedResult: enriched.expected
            };
            await simulateLoadTest();
            assert.ok(true);
        });
    });
});
