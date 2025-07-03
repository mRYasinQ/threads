'use client';

import { useCallback, useEffect } from 'react';

import { useNotif } from '@/lib/hooks/useNotif';

import { Notification } from './Notification';

export const NotificationController = ({ children }: { children: React.ReactNode }) => {
    const { isShowNotif, notifMessage, notifLocation, hideNotif } = useNotif();

    const closeNotifHandler = useCallback(() => hideNotif(), [hideNotif]);

    useEffect(() => {
        if (!isShowNotif) return;

        const timerId = setTimeout(() => closeNotifHandler(), 5000);
        return () => clearTimeout(timerId);
    }, [isShowNotif, closeNotifHandler]);

    return (
        <>
            {isShowNotif && (
                <Notification message={notifMessage} location={notifLocation} onClick={closeNotifHandler} />
            )}
            {children}
        </>
    );
};
