import { createSlice } from '@reduxjs/toolkit';

import type { IMenuState } from './types';

const initialState: IMenuState = {
    activeSidebarMenu: false,
    activeThemeMenu: false,
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleMenu: (state) => ({ ...initialState, activeSidebarMenu: !state.activeSidebarMenu }),
        showMenu: () => ({ ...initialState, activeSidebarMenu: true }),
        exitMenu: () => ({ ...initialState, activeSidebarMenu: false }),
        showThemeMenu: () => ({ ...initialState, activeSidebarMenu: true, activeThemeMenu: true }),
        resetMenu: () => initialState,
    },
});

export default menuSlice;
export const { toggleMenu, showMenu, exitMenu, showThemeMenu, resetMenu } = menuSlice.actions;
