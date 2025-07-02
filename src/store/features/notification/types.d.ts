import type { MouseEventHandler } from 'react';

export interface INotificationState {
    visible: boolean;
    message: string | null;
    location?: Location | null;
}

export interface INotificationPayload {
    message: string;
    location?: Location | null;
}

export interface INotificationProps {
    message: string;
    location?: Location;
    onClick?: MouseEventHandler;
}

export type Location = 'bottom' | 'top';
