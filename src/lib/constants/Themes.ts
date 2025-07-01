import { SunIcon } from '@/components/icons/SunIcon';
import { MoonIcon } from '@/components/icons/MoonIcon';

const Themes = {
    auto: {
        icon: null,
        value: 'auto',
        label: 'Auto',
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
