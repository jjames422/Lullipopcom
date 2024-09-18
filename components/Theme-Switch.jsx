'use client';

import { useState, useEffect } from 'react';
import { VisuallyHidden } from '@react-aria/visually-hidden';
import { useTheme } from 'next-themes';
import clsx from 'clsx';

import { SunFilledIcon, MoonFilledIcon } from '@/components/Icons';

export const ThemeSwitch = ({ className, classNames }) => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isLightTheme = theme === 'light';

  const handleChange = () => {
    setTheme(isLightTheme ? 'dark' : 'light');
  };

  if (!isMounted) return null;

  return (
    <button
      aria-label={`Switch to ${isLightTheme ? 'dark' : 'light'} mode`}
      className={clsx(
        'px-px transition-opacity hover:opacity-80 cursor-pointer',
        className,
        classNames?.base
      )}
      onClick={handleChange}
    >
      <VisuallyHidden>
        <input type="checkbox" checked={isLightTheme} onChange={handleChange} />
      </VisuallyHidden>
      <div
        className={clsx(
          'w-auto h-auto bg-transparent rounded-lg flex items-center justify-center',
          '!text-default-500 pt-px px-0 mx-0',
          classNames?.wrapper
        )}
      >
        {isLightTheme ? (
          <SunFilledIcon size={22} />
        ) : (
          <MoonFilledIcon size={22} />
        )}
      </div>
    </button>
  );
};
