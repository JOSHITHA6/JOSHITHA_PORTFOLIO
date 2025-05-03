import { Moon, Sun } from "lucide-react"; 
import { useState, useEffect } from "react";

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle the 'dark' class on the html element whenever isDarkMode changes
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <button onClick={() => setIsDarkMode(prev => !prev)} className="p-2 rounded-full">
      {isDarkMode ? <Sun /> : <Moon />}
    </button>
  );
};
