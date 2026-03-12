// Import XLSX
import * as EXCEL from "xlsx";
import fs from "fs";

// Define TestData Structure
interface TestRecord {
    skill1: string;
    skill2: string;
}

// Create method to read excel file
export function readExcelFile(filepath: string): TestRecord[] {

    // Read Excel file
    const file = fs.readFileSync(filepath);

    // Parse workbook
    const workbook = EXCEL.read(file, { type: "buffer" });

    // Get first sheet
    const sheet = workbook.Sheets[workbook.SheetNames[0]];

    // Convert sheet to JSON
    const rawData: any[] = EXCEL.utils.sheet_to_json(sheet, { header: 1 });

    // Convert Raw Data into TestRecord
    const records: TestRecord[] = rawData.slice(1).map((column: any) => ({
        skill1: column[0],
        skill2: column[1]
    }));

    return records;
}