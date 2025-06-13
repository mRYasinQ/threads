import crypto from 'crypto';

import { readData, writeData } from '@/lib/utils';

import type { IReport } from '@/shared/types';

const REPORTS_FILE = 'reports';

export const getReports = async (): Promise<IReport[]> => {
    const reports = await readData<IReport[]>(REPORTS_FILE);
    return reports;
};

export const addReport = async (data: Omit<IReport, 'id'>): Promise<boolean> => {
    const reports = await getReports();
    const newReport: IReport = {
        id: crypto.randomUUID(),
        ...data,
    };
    reports.push(newReport);
    writeData<IReport[]>(REPORTS_FILE, reports);

    return true;
};
