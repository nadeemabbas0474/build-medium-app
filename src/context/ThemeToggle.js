import { useTheme } from 'next-themes';
import { useState, useEffect } from 'react';
// import { MoonIcon, SunIcon } from '@heroicons/react/outline';
import { IoIosMoon, IoMdSunny } from 'react-icons/io';

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return (
    <button
      className="w-8 h-8 rounded-lg dark:bg-slate-800 flex items-center justify-center transition-all duration-300 focus:outline-none"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      aria-label="Toggle Dark Mode"
    >
      {theme === 'light' ? (
        <div className="text-blue-500 w-5 h-5"><IoMdSunny/></div>
      ) : (
        <div className="text-blue-500 w-5 h-5"><IoIosMoon/> </div>
      )}
    </button>
  );
};

export default ThemeToggler;