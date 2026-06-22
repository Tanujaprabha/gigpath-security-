const Mocha = require('mocha');
const { EVENT_RUN_BEGIN, EVENT_RUN_END, EVENT_TEST_PASS, EVENT_TEST_FAIL, EVENT_SUITE_BEGIN } = Mocha.Runner.constants;
const ExcelJS = require('exceljs');
const fs = require('fs');
const path = require('path');

class ExcelReporter {
    constructor(runner) {
        this.results = [];
        this.failedTests = [];
        this.totalTests = 0;
        this.passedTests = 0;
        this.failedCount = 0;
        this.totalDuration = 0;
        this.startTime = 0;

        console.log('\nLoad Testing Framework Initialized\n');

        runner.once(EVENT_RUN_BEGIN, () => {
            this.startTime = Date.now();
        });

        runner.on(EVENT_SUITE_BEGIN, (suite) => {
            if (suite.title && !suite.root) {
                console.log(`${suite.title}\n`);
            }
        });

        runner.on(EVENT_TEST_PASS, (test) => {
            const duration = test.duration || 0;
            this.totalDuration += duration;
            this.passedTests++;
            this.totalTests++;

            const meta = test.metadata || {};
            
            console.log(`✔ ${meta.id || 'LT-???'} : ${meta.scenarioName || test.title} (${duration}ms)`);
            console.log(`Progress : ${this.totalTests}/300\n`);

            this.results.push({
                testCaseId: meta.id || 'Unknown',
                module: meta.module || 'Unknown',
                screenName: meta.screenName || 'Unknown',
                loadCategory: meta.loadCategory || 'Unknown',
                scenarioName: meta.scenarioName || test.title,
                concurrentUsers: meta.concurrentUsers || 'N/A',
                expectedResult: meta.expectedResult || 'Pass without errors',
                status: 'Pass',
                executionTime: `${duration}ms`
            });
        });

        runner.on(EVENT_TEST_FAIL, (test, err) => {
            const duration = test.duration || 0;
            this.totalDuration += duration;
            this.failedCount++;
            this.totalTests++;

            const meta = test.metadata || {};

            console.log(`✖ ${meta.id || 'LT-???'} : ${meta.scenarioName || test.title} - FAILED`);
            console.log(`Progress : ${this.totalTests}/300\n`);

            const row = {
                testCaseId: meta.id || 'Unknown',
                module: meta.module || 'Unknown',
                screenName: meta.screenName || 'Unknown',
                loadCategory: meta.loadCategory || 'Unknown',
                scenarioName: meta.scenarioName || test.title,
                concurrentUsers: meta.concurrentUsers || 'N/A',
                expectedResult: meta.expectedResult || 'Pass without errors',
                status: 'Fail',
                executionTime: `${duration}ms`
            };

            this.results.push(row);
            this.failedTests.push(row);
        });

        runner.once(EVENT_RUN_END, () => {
            const endTime = Date.now();
            const executionTimeSecs = ((endTime - this.startTime) / 1000).toFixed(2);
            
            console.log(`${this.passedTests} passing`);
            if (this.failedCount > 0) {
                console.log(`${this.failedCount} failing`);
            }
            console.log(`\nExecution Time : ${executionTimeSecs} sec\n`);
        });
    }

    done(failures, exit) {
        this.generateExcelReport()
            .then(() => {
                exit(failures);
            })
            .catch(err => {
                console.error('Failed to generate Excel report:', err);
                exit(failures);
            });
    }

    async generateExcelReport() {
        const workbook = new ExcelJS.Workbook();

        // 1. Load Test Execution Summary
        const summarySheet = workbook.addWorksheet('Load Test Execution Summary');
        summarySheet.columns = [
            { header: 'Total Tests', key: 'total', width: 15 },
            { header: 'Passed', key: 'passed', width: 15 },
            { header: 'Failed', key: 'failed', width: 15 },
            { header: 'Average Execution Time', key: 'avgTime', width: 25 }
        ];
        
        const avgTime = this.totalTests > 0 ? (this.totalDuration / this.totalTests).toFixed(2) + 'ms' : '0ms';
        summarySheet.addRow({
            total: this.totalTests,
            passed: this.passedTests,
            failed: this.failedCount,
            avgTime: avgTime
        });

        // 2. Load Test Results
        const resultsSheet = workbook.addWorksheet('Load Test Results');
        const resultsColumns = [
            { header: 'Test Case ID', key: 'testCaseId', width: 25 },
            { header: 'Module', key: 'module', width: 20 },
            { header: 'Screen Name', key: 'screenName', width: 25 },
            { header: 'Load Category', key: 'loadCategory', width: 25 },
            { header: 'Scenario Name', key: 'scenarioName', width: 45 },
            { header: 'Concurrent Users', key: 'concurrentUsers', width: 20 },
            { header: 'Expected Result', key: 'expectedResult', width: 45 },
            { header: 'Status', key: 'status', width: 15 },
            { header: 'Execution Time', key: 'executionTime', width: 15 }
        ];
        resultsSheet.columns = resultsColumns;

        this.results.forEach(test => {
            const row = resultsSheet.addRow(test);
            const statusCell = row.getCell('status');
            if (test.status === 'Pass') {
                statusCell.font = { color: { argb: 'FF008000' }, bold: true };
            } else if (test.status === 'Fail') {
                statusCell.font = { color: { argb: 'FFFF0000' }, bold: true };
            }
        });

        // 3. Failed Tests
        const failedSheet = workbook.addWorksheet('Failed Tests');
        failedSheet.columns = resultsColumns;
        this.failedTests.forEach(test => {
            const row = failedSheet.addRow(test);
            const statusCell = row.getCell('status');
            statusCell.font = { color: { argb: 'FFFF0000' }, bold: true };
        });

        // Styling headers
        [summarySheet, resultsSheet, failedSheet].forEach(sheet => {
            const headerRow = sheet.getRow(1);
            headerRow.font = { bold: true };
            headerRow.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFE0E0E0' }
            };
        });

        const reportDir = path.join(process.cwd(), 'reports');
        if (!fs.existsSync(reportDir)) {
            fs.mkdirSync(reportDir, { recursive: true });
        }

        const reportPath = path.join(reportDir, 'LoadTestReport.xlsx');
        
        try {
            await workbook.xlsx.writeFile(reportPath);
            console.log(`Excel report generated automatically at ${reportPath}`);
        } catch (error) {
            if (error.code === 'EBUSY' || error.code === 'EPERM') {
                console.log(`\n⚠ LoadTestReport.xlsx is currently open.`);
                console.log(`Generating timestamped report instead...\n`);
                
                const now = new Date();
                const timestamp = now.getFullYear() + '-' + 
                    String(now.getMonth() + 1).padStart(2, '0') + '-' + 
                    String(now.getDate()).padStart(2, '0') + '_' + 
                    String(now.getHours()).padStart(2, '0') + '-' + 
                    String(now.getMinutes()).padStart(2, '0') + '-' + 
                    String(now.getSeconds()).padStart(2, '0');
                    
                const fallbackPath = path.join(reportDir, `LoadTestReport_${timestamp}.xlsx`);
                
                try {
                    await workbook.xlsx.writeFile(fallbackPath);
                    console.log(`Report generated:\n${fallbackPath}`);
                } catch (fallbackError) {
                    console.error('Failed to generate timestamped report:', fallbackError);
                }
            } else {
                console.error('An unexpected error occurred while writing the report:', error);
            }
        }
    }
}

module.exports = ExcelReporter;
