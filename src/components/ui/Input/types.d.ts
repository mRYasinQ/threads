import type { HTMLInputTypeAttribute } from 'react';

export interface IInputProps {
    id: string;
    title: string;
    type: HTMLInputTypeAttribute;
    placeholder: string;
    errorMessage?: string;
}
