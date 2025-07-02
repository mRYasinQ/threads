import { createSlice } from '@reduxjs/toolkit';

import type { PayloadAction } from '@reduxjs/toolkit';
import type { IAuthState, IAuthPayload } from './types';

const initialState: IAuthState = {
    isAuthenticated: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsAuthenticated: (state, { payload: { authenticatedStatus } }: PayloadAction<IAuthPayload>) => {
            state.isAuthenticated = authenticatedStatus;
        },
    },
});

export default authSlice;
export const { setIsAuthenticated } = authSlice.actions;
