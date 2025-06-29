import crypto from 'crypto';

import { readData, writeData } from '@/lib/utils/server';

import type { IReport } from '@/shared/types';

const REPORTS_FILE = 'reports';

export const getAllReports = async (): Promise<IReport[]> => {
    const reports = await readData<IReport[]>(REPORTS_FILE);
    return reports;
};

export const addReport = async (data: Omit<IReport, 'id'>): Promise<boolean> => {
    const reports = await getAllReports();
    const newReport: IReport = {
        id: crypto.randomUUID(),
        ...data,
    };
    reports.push(newReport);
    writeData<IReport[]>(REPORTS_FILE, reports);

    return true;
};
