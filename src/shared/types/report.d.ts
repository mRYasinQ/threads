export interface IReport {
    id: string;
    message: string;
}

export interface IAddReportBody extends Omit<IReport, 'id'> {}
