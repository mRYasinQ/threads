import type { MouseEventHandler } from 'react';

export interface INotificationState {
    visible: boolean;
    message: string;
    location?: Location;
}

export interface INotificationPayload {
    message: string;
    location?: Location;
}

export interface INotificationProps {
    message: string;
    location?: Location;
    onClick?: MouseEventHandler;
}

export type Location = 'bottom' | 'top';
