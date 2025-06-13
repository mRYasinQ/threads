export interface IReport {
    id: string;
    message: string;
}

export interface IReportBody extends Omit<IReport, 'id'> {}
