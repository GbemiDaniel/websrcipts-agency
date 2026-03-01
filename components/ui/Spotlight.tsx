import React from 'react';

interface SpotlightProps {
    color?: string;
    size?: number | string;
    className?: string;
    position?: {
        top?: string | number;
        bottom?: string | number;
        left?: string | number;
        right?: string | number;
    };
}

/**
 * Spotlight (Server Component)
 * 
 * Generates an ambient radial glow sitting strictly behind content (-z-10).
 * Does not use client-side logic—remains a pure visually optimal server-rendered element.
 */
export function Spotlight({
    color = 'var(--glow-dev)',
    size = 400,
    className = '',
    position = { top: '-10%', left: '-10%' }
}: SpotlightProps) {
    return (
        <div
            className={`absolute -z-10 pointer-events-none rounded-full ${className}`}
            style={{
                background: `radial-gradient(circle at center, ${color} 0%, transparent 60%)`,
                width: typeof size === 'number' ? `${size}px` : size,
                height: typeof size === 'number' ? `${size}px` : size,
                filter: 'blur(80px)', /* extreme blur to soften the gradient */
                opacity: 0.25,        /* keep the glow subtle */
                ...position,
            }}
            aria-hidden="true"
        />
    );
}
