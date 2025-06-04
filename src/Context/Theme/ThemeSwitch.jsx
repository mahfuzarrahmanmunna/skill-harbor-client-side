import React from 'react';
import { useTheme } from './ThemeContext';
import { Moon, SunMoon } from 'lucide-react';

const ThemeSwitch = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={`btn btn-circle btn-outline border-0 hover:shadow ${theme === 'light' ? 'bg-gray-200' : 'bg-gray-700'}`}>
            <div onClick={toggleTheme}>
                {theme == 'light' ? <SunMoon className='text-gray-800' /> : <Moon className='text-gray-100' />}
            </div>
        </div>
    );
};

export default ThemeSwitch;