import React, { ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import Link from 'next/link';

type BaseProps = {
    children: React.ReactNode;
    variant?: 'primary' | 'outline' | 'ghost';
    className?: string;
};

type asButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
type asLinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = asButtonProps | asLinkProps;

export function Button({ children, variant = 'primary', className = '', ...props }: ButtonProps) {
    const baseStyles = "inline-flex h-9 md:h-11 items-center justify-center rounded-full px-5 md:px-8 text-sm md:text-base font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent-dev focus:ring-offset-2 focus:ring-offset-background";

    const variants = {
        primary: "bg-[#22d3ee] text-slate-950 hover:bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.4)]",
        outline: "border border-border-soft text-primary hover:bg-surface hover:text-white",
        ghost: "text-muted hover:text-white hover:bg-white/5",
    };

    const selectedVariant = variants[variant];
    const combinedClasses = `${baseStyles} ${selectedVariant} ${className}`;

    if ('href' in props && props.href) {
        const { href, ...anchorProps } = props as asLinkProps;
        return (
            <Link href={href!} className={combinedClasses} {...anchorProps}>
                {children}
            </Link>
        );
    }

    return (
        <button className={combinedClasses} {...(props as asButtonProps)}>
            {children}
        </button>
    );
}
