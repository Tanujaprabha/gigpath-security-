// load-generate-report.js
import ExcelJS from 'exceljs';
import fs from 'fs';
import path from 'path';

export async function generateLoadReport(results) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Load Tests');

    worksheet.columns = [
        { header: 'Test Case ID', key: 'id', width: 25 },
        { header: 'Module', key: 'module', width: 20 },
        { header: 'Scenario', key: 'scenario', width: 45 },
        { header: 'Expected Result', key: 'expected', width: 45 },
        { header: 'Status', key: 'status', width: 15 },
        { header: 'Execution Time', key: 'time', width: 15 }
    ];

    worksheet.getRow(1).font = { bold: true };

    results.forEach(test => {
        worksheet.addRow({
            id: test.testCaseId,
            module: test.module,
            scenario: test.scenario,
            expected: test.expectedResult,
            status: test.status,
            time: test.executionTime
        });
    });

    const reportDir = 'reports';
    const reportPath = path.join(reportDir, 'LoadTestReport.xlsx');

    if (!fs.existsSync(reportDir)) {
        fs.mkdirSync(reportDir, { recursive: true });
    }

    await workbook.xlsx.writeFile(reportPath);
    console.log('Report generated:', reportPath);
}
