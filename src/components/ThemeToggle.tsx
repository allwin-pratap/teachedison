'use client';

import { useThemeStore } from '../store/themestore';
import { SunIcon, MoonIcon } from '@/components/CustomIcon'

const ThemeToggle = () => {
  const theme = useThemeStore((state) => state.theme);
  const toggleTheme = useThemeStore((state) => state.toggleTheme);
  return (
    <button
      onClick={toggleTheme}
      className={`flex items-center justify-center rounded-full w-5 `}
    >
      {theme === "dark" ? (
        <SunIcon className={"fill-black"} />
      ) : (
        <MoonIcon className={"fill-black"} />
      )}
    </button>
  );
};

export default ThemeToggle;
