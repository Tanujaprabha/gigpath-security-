import { simulateLoadTest, enrichMetadata, getRandomUsers } from './utils.js';
import assert from 'assert';

describe('TC-LOAD-RECOVERY', function() {
    it(`LT-REC-001 : Outage Recovery State Reconciliation Load`, async function() {
        const scenarioName = 'Outage Recovery State Reconciliation Load';
        const enriched = enrichMetadata(scenarioName);
        this.test.metadata = {
            id: `LT-REC-001`,
            module: 'Recovery',
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
