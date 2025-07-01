import { IFields } from '@/lib/constants/types';
import type { HTMLInputTypeAttribute } from 'react';
import type { FieldError, FieldValues, UseFormRegister } from 'react-hook-form';

export interface IInputProps {
    id: string;
    title: string;
    type: HTMLInputTypeAttribute;
    placeholder: string;
    errorMessage?: string;
}
