import { configureStore } from '@reduxjs/toolkit';

import api from './services/api';
import authSlice from './features/auth/authSlice';
import notificationSlice from './features/notification/notificationSlice';
import menuSlice from './features/menu/menuSlice';
import reportSlice from './features/report/reportSlice';

const rootReducer = {
    [api.reducerPath]: api.reducer,
    auth: authSlice.reducer,
    notification: notificationSlice.reducer,
    menu: menuSlice.reducer,
    report: reportSlice.reducer,
};

export const makeStore = (preloadedState?: RootState) => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
        preloadedState,
    });
};

export type RootState = {
    [K in keyof typeof rootReducer]: ReturnType<(typeof rootReducer)[K]>;
};
export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
