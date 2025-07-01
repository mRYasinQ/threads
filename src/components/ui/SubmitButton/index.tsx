import { ISubmitButtonProps } from './types';

export const SubmitButton = ({ children }: ISubmitButtonProps) => {
    return (
        <button
            type="submit"
            className="cursor-pointer rounded-xl bg-gray-900 px-4 py-2 text-base font-semibold text-gray-100 dark:bg-white dark:text-gray-900"
        >
            {children}
        </button>
    );
};
