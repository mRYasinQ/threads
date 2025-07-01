import type { ReactNode, FormEventHandler } from 'react';

export interface ICustomFormProps {
    title: string;
    onSubmit?: FormEventHandler;
    children?: ReactNode;
}
