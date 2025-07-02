import { configureStore } from '@reduxjs/toolkit';

import api from './services/api';
import notificationSlice from './features/notification/notificationSlice';
import reportSlice from './features/report/reportSlice';
import menuSlice from './features/menu/menuSlice';
import authSlice from './features/auth/authSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            [api.reducerPath]: api.reducer,
            auth: authSlice.reducer,
            notification: notificationSlice.reducer,
            menu: menuSlice.reducer,
            report: reportSlice.reducer,
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
