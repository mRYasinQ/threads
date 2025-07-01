import { MouseEventHandler, ReactHTMLElement } from 'react';

export interface IMenuItem {
    text: string;
    icon?: ReactHTMLElement;
    onClick: MouseEventHandler;
}
