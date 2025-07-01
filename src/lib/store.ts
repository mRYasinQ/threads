import { configureStore } from '@reduxjs/toolkit';

import reportSlice from './features/report/reportSlice';
import menuSlice from './features/menu/menuSlice';

export const makeStore = () => {
    return configureStore({
        reducer: {
            report: reportSlice.reducer,
            menu: menuSlice.reducer,
        },
    });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
