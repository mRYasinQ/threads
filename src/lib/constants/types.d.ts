import type { HTMLInputTypeAttribute } from 'react';

export interface IFields<T> {
    title: string;
    id: string;
    registerType: keyof T;
    type: HTMLInputTypeAttribute;
    placeholder: string;
}
