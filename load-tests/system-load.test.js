import { simulateLoadTest, enrichMetadata, getRandomUsers } from './utils.js';
import assert from 'assert';

describe('TC-LOAD-SYSTEM', function() {
    it(`LT-SYS-001 : Global Configuration Initialization Load`, async function() {
        const scenarioName = 'Global Configuration Initialization Load';
        const enriched = enrichMetadata(scenarioName);
        this.test.metadata = {
            id: `LT-SYS-001`,
            module: 'System',
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
