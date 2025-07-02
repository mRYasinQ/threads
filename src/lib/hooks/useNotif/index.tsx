'use client';

import { useAppDispatch, useAppSelector } from '../redux';

import { showNotification, hideNotification } from '@/store/features/notification/notificationSlice';

import type { INotifResult } from './types';
import type { Location } from '@/store/features/notification/types';

export const useNotif = (): INotifResult => {
    const dispatch = useAppDispatch();
    const { visible, message, location } = useAppSelector((state) => state.notification);

    const showNotif = (message: string, location?: Location) => dispatch(showNotification({ message, location }));
    const hideNotif = () => dispatch(hideNotification());

    return {
        isShowNotif: visible,
        notifMessage: message,
        notifLocation: location,
        showNotif,
        hideNotif,
    };
};
