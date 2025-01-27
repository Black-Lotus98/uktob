// import SunIcon from '../../../assets/images/svg/sunIcon.svg';
// import MoonIcon from '../../../assets/images/svg/moonIcon.svg';
import useColorMode from '@/hooks/useColorMode';


const DarkModeSwitcher = () => {
    const [colorMode, setColorMode] = useColorMode();

    return (
        <label
            className={`relative m-0 block h-7.5 w-14 rounded-full ${colorMode === 'dark' ? 'bg-primary' : 'bg-stroke'
                }`}
        >
            <input
                type="checkbox"
                onChange={() => {
                    if (typeof setColorMode === 'function') {
                        setColorMode(colorMode === 'light' ? 'dark' : 'light');
                    }
                }}
                className="dur absolute top-0 z-50 m-0 h-full w-full cursor-pointer opacity-0"
            />
            <span className={`absolute top-1/2 left-[3px] flex h-6 w-6 -translate-y-1/2
                items-center justify-center rounded-full bg-white shadow-switcher duration-75
                 ease-linear ${colorMode === 'dark' && '!right-[3px] !translate-x-full rtl:!translate-x-0'}`}
            >
                <span className="dark:hidden">
                    {/* <SunIcon />1 */}
                    light
                </span>
                <span className="hidden dark:inline-block">
                    {/* <MoonIcon /> */}
                    dark
                </span>
            </span>
        </label>
    );
};

export default DarkModeSwitcher;
