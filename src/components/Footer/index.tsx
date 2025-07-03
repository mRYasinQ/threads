import { ShowReportButton } from './ShowReportButton';

export const Footer = () => {
    return (
        <div className="mb-16 flex h-16 items-center justify-center lg:mb-0">
            <ul className="mx-auto flex items-center justify-center space-x-3 text-sm text-gray-400 dark:text-gray-600">
                <li>
                    <span>© {new Date().getFullYear()}</span>
                </li>
                <li>
                    <ShowReportButton />
                </li>
            </ul>
        </div>
    );
};
