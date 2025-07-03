export interface IReport {
    id: string;
    message: string;
}

export type IAddReportBody = Omit<IReport, 'id'>;
