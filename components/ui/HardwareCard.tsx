import React, { ReactNode } from 'react';
import styles from './HardwareCard.module.css';

interface HardwareCardProps {
    children: ReactNode;
    className?: string;
    glowColor?: string;
}

/**
 * HardwareCard (Server Component)
 * 
 * Reusable wrapper providing a physical glass aesthetic with extreme backdrop blur,
 * deep inner shadows, and a subtle glowing top edge (if glowColor is provided).
 */
export function HardwareCard({ children, className = '', glowColor }: HardwareCardProps) {
    return (
        <div className={`${styles.card} ${className}`}>
            {glowColor && (
                <div
                    className={styles.glowTop}
                    style={{ background: `linear-gradient(90deg, transparent, ${glowColor}, transparent)` }}
                    aria-hidden="true"
                />
            )}
            {children}
        </div>
    );
}
