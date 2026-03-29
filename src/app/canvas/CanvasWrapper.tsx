'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

const ThemeContext = createContext<{ theme: Theme; toggle: () => void }>({
    theme: 'light',
    toggle: () => {},
});

export const useCanvasTheme = () => useContext(ThemeContext);

export default function CanvasWrapper({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = useState<Theme>('light');

    useEffect(() => {
        const saved = localStorage.getItem('canvas-theme') as Theme | null;
        if (saved) setTheme(saved);
    }, []);

    const toggle = () => {
        const next = theme === 'light' ? 'dark' : 'light';
        setTheme(next);
        localStorage.setItem('canvas-theme', next);
    };

    return (
        <ThemeContext.Provider value={{ theme, toggle }}>
            <div
                className={`min-h-screen transition-colors duration-500 ${
                    theme === 'dark' ? 'bg-[#111] text-white' : 'bg-[#fafafa] text-gray-900'
                }`}
                style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
            >
                {children}
            </div>
        </ThemeContext.Provider>
    );
}
