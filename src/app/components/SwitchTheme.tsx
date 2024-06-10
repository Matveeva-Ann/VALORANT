'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function SwitchThemes() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <p></p>;

  if (resolvedTheme === 'dark') {
    return (
      <div
        className="p-2 bg-white dark:bg-black text-black dark:text-white flex justify-center items-center rounded-full"
        onClick={() => setTheme('light')}
      >
        <FiSun className='text-xl'></FiSun>
      </div>
    );
  }

  if (resolvedTheme === 'light') {
    return (
      <div
        className="p-2 bg-white dark:bg-black text-black dark:text-white flex justify-center items-center rounded-full"
        onClick={() => setTheme('dark')}
      >
        <FiMoon className='text-xl'></FiMoon>
      </div>
    );
  }
}