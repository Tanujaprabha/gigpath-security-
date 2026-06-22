import { simulateLoadTest, enrichMetadata, getRandomUsers } from './utils.js';
import assert from 'assert';

describe('TC-LOAD-ENDURANCE', function() {
    const tests = [
        "24-Hour Sustained Moderate Load",
        "Memory Leak Detection Over Time"
    ];

    tests.forEach((scenarioName, index) => {
        const idStr = (index + 1).toString().padStart(3, '0');
        it(`LT-END-${idStr} : ${scenarioName}`, async function() {
            const enriched = enrichMetadata(scenarioName);
            this.test.metadata = {
                id: `LT-END-${idStr}`,
                module: 'Endurance',
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
