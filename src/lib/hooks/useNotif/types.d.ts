import type { Location } from '@/store/features/notification/types';

export interface INotifResult {
    isShowNotif: boolean;
    notifMessage: string;
    notifLocation: Location;
    showNotif: (message: string, location?: Location) => void;
    hideNotif: () => void;
}
