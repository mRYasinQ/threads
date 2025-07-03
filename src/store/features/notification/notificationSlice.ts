import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { INotificationState, INotificationPayload } from './types';

const initialState: INotificationState = {
    visible: false,
    message: '',
    location: undefined,
};

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        showNotification: (
            state,
            { payload: { message, location = 'bottom' } }: PayloadAction<INotificationPayload>,
        ) => {
            state.visible = true;
            state.message = message;
            state.location = location;
        },
        hideNotification: () => initialState,
    },
});

export default notificationSlice;
export const { showNotification, hideNotification } = notificationSlice.actions;
