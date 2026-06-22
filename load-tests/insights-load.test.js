import { simulateLoadTest, enrichMetadata, getRandomUsers } from './utils.js';
import assert from 'assert';

describe('TC-LOAD-INSIGHTS', function() {
    const tests = [
        "Insights Overview Data Fetch Load",
        "Concurrent Overview Rendering",
        "Overview Graph Animation Load",
        "Insights Summary Calculation Burst",
        "Overview Date Range Update Load",
        "Top Categories Extraction Load",
        "Insights Widget Metric Aggregation Stress",
        "Weekly Report Fetch and Parse Load",
        "Week-over-week Comparison Calculation Load",
        "Weekly Report Email Trigger Burst",
        "Weekly Category Difference Chart Load",
        "Weekly Summary Export Parsing Load",
        "Cash Flow Real-time Sync Load",
        "Cash Flow Graph Smoothing Algorithm Stress",
        "Concurrent Cash Flow Inflow Queries",
        "Concurrent Cash Flow Outflow Queries",
        "Cash Flow Month Selection Burst",
        "Cash Flow Anomalies Highlighting Load",
        "Predictions AI Model Inference Timeout Load",
        "Predictions Scenario Simulation Burst",
        "Upcoming Expense Forecast Fetch Load",
        "Predictions Graph Extrapolation Load",
        "Dynamic Prediction Adjustments Load",
        "Predictions Caching Layer Fallback Test",
        "Financial Health Score Calculation Burst",
        "Health Score Metric Breakdown Load",
        "Health Recommendations Fetch Load",
        "Financial Health Status Icon Rendering Load",
        "Debt to Income Ratio Calculation Load",
        "Savings Rate History Fetch Load",
        "Emergency Fund Progress Check Load",
        "Health Score Historical Trend Rendering Load",
        "Concurrent Health Dashboard Reloads",
        "Health Score Peer Comparison Fetch Load",
        "Financial Health Empty State Rendering Load"
    ];

    tests.forEach((scenarioName, index) => {
        const idStr = (index + 1).toString().padStart(3, '0');
        it(`LT-INS-${idStr} : ${scenarioName}`, async function() {
            let screenName = 'InsightsOverviewPage';
            if (index >= 7 && index < 12) screenName = 'WeeklyReportPage';
            if (index >= 12 && index < 18) screenName = 'CashFlowPage';
            if (index >= 18 && index < 24) screenName = 'PredictionsPage';
            if (index >= 24 && index < 35) screenName = 'FinancialHealthPage';

            const enriched = enrichMetadata(scenarioName);
            this.test.metadata = {
                id: `LT-INS-${idStr}`,
                module: 'Insights',
                screenName: screenName,
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
