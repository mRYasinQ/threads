'use client';

import { useAppDispatch } from '@/lib/hooks/redux';

import { showReportModal } from '@/store/features/report/reportSlice';

export const ShowReportButton = () => {
    const dispatch = useAppDispatch();

    const showReportHandler = () => dispatch(showReportModal());

    return (
        <button className="cursor-pointer" onClick={showReportHandler}>
            Report a problem
        </button>
    );
};
