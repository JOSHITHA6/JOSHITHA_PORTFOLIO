import {Moon,Sun} from 'lucide-react';
import { useState } from 'react';

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode]= useState(false);
    return (
        <button onClick={() => setIsDarkMode(!isDarkMode)}>
            {isDarkMode ? <Sun /> : <Moon />}
        </button>
    );
};