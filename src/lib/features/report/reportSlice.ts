import { createSlice } from '@reduxjs/toolkit';

import type { IReportState } from './types';

const initialState: IReportState = {
    isShowModal: false,
};

const reportSlice = createSlice({
    name: 'report',
    initialState,
    reducers: {
        showReportModal: (state) => {
            state.isShowModal = true;
        },
        closeReportModal: (state) => {
            state.isShowModal = false;
        },
    },
});

export default reportSlice;
export const { showReportModal, closeReportModal } = reportSlice.actions;
