import React, { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    label?: string;
}

/**
 * Reusable Input Component
 * Styled with our premium hardware-glass design tokens.
 */
export function Input({ className = '', ...props }: InputProps) {
    return (
        <input
            className={`flex h-12 w-full rounded-md border border-border-soft bg-surface px-4 py-3 text-sm text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent-dev focus:border-transparent transition-colors ${className}`}
            {...props}
        />
    );
}
