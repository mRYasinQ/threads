import { SunIcon } from '@/icons/SunIcon';
import { MoonIcon } from '@/icons/MoonIcon';

const Themes = {
    system: {
        icon: null,
        value: 'system',
        label: 'System',
    },
    light: {
        icon: SunIcon,
        value: 'light',
        label: 'Light',
    },
    dark: {
        icon: MoonIcon,
        value: 'dark',
        label: 'Dark',
    },
};

export default Themes;
