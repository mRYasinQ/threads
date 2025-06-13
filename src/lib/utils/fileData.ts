import fs from 'fs/promises';
import path from 'path';

export const createJSONFilePath = (fileName: string): string => {
    const filePath = path.join(process.cwd(), 'src', 'data', `${fileName}.json`);
    return filePath;
};

export const readData = async <DataType>(fileName: string): Promise<DataType> => {
    const data: string = await fs.readFile(createJSONFilePath(fileName), 'utf8');
    const parsedData: DataType = JSON.parse(data);
    return parsedData;
};

export const writeData = async <DataType>(fileName: string, data: DataType): Promise<void> => {
    const result = await fs.writeFile(createJSONFilePath(fileName), JSON.stringify(data), 'utf8');
    return result;
};
