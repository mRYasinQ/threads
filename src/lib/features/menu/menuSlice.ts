import { createSlice } from '@reduxjs/toolkit';

import type { IMenuState } from './types';

const initialState: IMenuState = {
    activeMenu: false,
    activeThemeMenu: false,
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleMenu: (state) => ({ ...initialState, activeMenu: !state.activeMenu }),
        showMenu: () => ({ ...initialState, activeMenu: true }),
        exitMenu: () => ({ ...initialState, activeMenu: false }),
        showThemeMenu: () => ({ ...initialState, activeThemeMenu: true }),
        resetMenu: () => initialState,
    },
});

export default menuSlice;
export const { toggleMenu, showMenu, exitMenu, showThemeMenu, resetMenu } = menuSlice.actions;
