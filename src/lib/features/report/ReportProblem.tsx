'use client';

import { useEffect } from 'react';

import { useAppDispatch, useAppSelector } from '@/lib/hooks/redux';

import { closeReportModal } from './reportSlice';

import { ReportProblemForm } from './ReportProblemForm';

import { RemoveIcon } from '@/icons/RemoveIcon';

export const ReportProblem = () => {
    const dispatch = useAppDispatch();
    const { isShowModal } = useAppSelector((state) => state.report);

    useEffect(() => {
        if (isShowModal) {
            document.body.classList.add('overflow-y-hidden');
        } else {
            document.body.classList.remove('overflow-y-hidden');
        }
    }, [isShowModal]);

    const closeModalHandler = () => dispatch(closeReportModal());

    return (
        isShowModal && (
            <div className="fixed top-0 left-0 z-20 h-full w-full">
                <div
                    onClick={closeModalHandler}
                    className="fixed top-0 left-0 z-20 h-full w-full bg-white/15 backdrop-blur-sm dark:bg-black/15"
                ></div>
                <button
                    onClick={closeModalHandler}
                    className="fixed top-8 left-8 z-30 flex size-11 cursor-pointer items-center justify-center rounded-full bg-gray-100 stroke-gray-400 duration-200 hover:scale-110 dark:bg-gray-900 dark:stroke-gray-700"
                >
                    <RemoveIcon />
                </button>
                <div className="relative top-1/2 z-30 mx-auto flex h-fit w-full -translate-y-1/2 flex-col items-center justify-center gap-4 px-4 sm:w-110 sm:px-0">
                    <h4 className="text-center text-lg font-bold text-gray-800 dark:text-gray-200">Report a problem</h4>
                    <ReportProblemForm closeModal={closeModalHandler} />
                </div>
            </div>
        )
    );
};
