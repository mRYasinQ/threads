import { createSlice } from '@reduxjs/toolkit';

import type { IMenuState, PostMenuAction } from './types';

const initialState: IMenuState = {
    activeSidebarMenu: false,
    activeThemeMenu: false,
    activePostMenu: null,
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        toggleMenu: (state) => ({ ...initialState, activeSidebarMenu: !state.activeSidebarMenu }),
        showMenu: () => ({ ...initialState, activeSidebarMenu: true }),
        exitMenu: () => ({ ...initialState, activeSidebarMenu: false }),
        showThemeMenu: () => ({ ...initialState, activeSidebarMenu: true, activeThemeMenu: true }),
        togglePostMenu: (state, action: PostMenuAction) => ({
            ...initialState,
            activePostMenu: state.activePostMenu === action.payload ? null : action.payload,
        }),
        resetMenu: () => initialState,
    },
});

export default menuSlice;
export const { toggleMenu, showMenu, exitMenu, showThemeMenu, togglePostMenu, resetMenu } = menuSlice.actions;
