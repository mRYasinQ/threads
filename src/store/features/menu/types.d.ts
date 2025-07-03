import type { PayloadAction } from '@reduxjs/toolkit';

export interface IMenuState {
    activeSidebarMenu: boolean;
    activeThemeMenu: boolean;
    activePostMenu: string | null;
}

export type PostMenuAction = PayloadAction<string>;
