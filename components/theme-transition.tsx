'use client'

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeTransition() {
    const { theme, resolvedTheme } = useTheme();
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [previousTheme, setPreviousTheme] = useState<string | undefined>();
    const [transitionTheme, setTransitionTheme] = useState<string>('');

    useEffect(() => {
        const currentTheme = resolvedTheme || theme;

        if (previousTheme && previousTheme !== currentTheme && currentTheme) {
            setIsTransitioning(true);
            setTransitionTheme(currentTheme);

            // Force a longer timeout to ensure visibility
            const timer = setTimeout(() => {
                setIsTransitioning(false);
            }, 1000);

            return () => clearTimeout(timer);
        }

        // Only update previous theme after a small delay to ensure detection
        const updateTimer = setTimeout(() => {
            setPreviousTheme(currentTheme);
        }, 100);

        return () => clearTimeout(updateTimer);
    }, [theme, resolvedTheme, previousTheme]);

    if (!isTransitioning) return null;

    return (
        <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">

            {/* Show the transition for both dark & light . [transitionTheme=='light'], [transitionTheme=='dark']*/}

            <div
                className={`absolute inset-0 ${
                    transitionTheme === 'dark'
                        ? 'bg-slate-900 opacity-75'
                        : 'bg-slate-950 opacity-75'
                } animate-slide-left-to-right transition-all duration-1000 ease-in-out`}
            />

        </div>
    );
}

