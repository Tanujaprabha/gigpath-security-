import ExcelJS from 'exceljs';

export async function generateSecurityReport(results) {
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Security Tests');

    worksheet.columns = [
        { header: 'Test Case ID', key: 'id', width: 25 },
        { header: 'Module', key: 'module', width: 20 },
        { header: 'Screen Name', key: 'screen', width: 25 },
        { header: 'Security Category', key: 'category', width: 25 },
        { header: 'Scenario Name', key: 'scenario', width: 45 },
        { header: 'Expected Result', key: 'expected', width: 45 },
        { header: 'Status', key: 'status', width: 15 },
        { header: 'Execution Time', key: 'time', width: 15 }
    ];

    // Style headers
    worksheet.getRow(1).font = { bold: true };
    worksheet.getRow(1).fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FFE0E0E0' }
    };

    results.forEach(test => {
        const row = worksheet.addRow({
            id: test.testCaseId,
            module: test.module,
            screen: test.screenName,
            category: test.securityCategory,
            scenario: test.scenarioName,
            expected: test.expectedResult,
            status: test.status,
            time: test.executionTime ? `${test.executionTime}ms` : 'N/A'
        });

        // Color status column based on Pass/Fail
        const statusCell = row.getCell('status');
        if (test.status === 'Pass') {
            statusCell.font = { color: { argb: 'FF008000' }, bold: true };
        } else if (test.status === 'Fail') {
            statusCell.font = { color: { argb: 'FFFF0000' }, bold: true };
        }
    });

    await workbook.xlsx.writeFile('SecurityTestReport.xlsx');
    console.log('\nReport generated successfully: SecurityTestReport.xlsx');
}
