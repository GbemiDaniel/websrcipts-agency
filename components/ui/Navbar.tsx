"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { Button } from './Button';

/**
 * Global Navbar (Client Component)
 * 
 * Sticky navigation with premium glassmorphism.
 * Includes an animated mobile menu overlay.
 */
export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        // Cleanup function to ensure it is reset when unmounted
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (pathname.includes('/dashboard') || pathname.includes('/login') || pathname.includes('/register')) {
        return null;
    }

    const getLinkClass = (href: string, isMobile = false) => {
        const isActive = pathname === href;
        const baseClass = isMobile
            ? "text-2xl font-semibold transition-colors disabled:opacity-50"
            : "text-sm transition-colors";

        return `${baseClass} ${isActive ? "text-accent-dev [text-shadow:0_0_15px_var(--glow-dev)] transition-all duration-300" : "text-muted hover:text-accent-dev"}`;
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md border-b border-border-soft">
            <div className="container mx-auto px-6 h-20 flex items-center justify-between relative z-50">

                {/* Left: Brand Name */}
                <Link href="/" className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-primary transition-colors hover:text-accent-dev whitespace-nowrap" onClick={() => setIsOpen(false)}>
                    Webscripts
                </Link>

                {/* Center: Desktop Navigation Links */}
                <nav className="hidden lg:flex items-center gap-8">
                    <Link href="/" className={getLinkClass('/')}>
                        Home
                    </Link>
                    <Link href="/services" className={getLinkClass('/services')}>
                        Services
                    </Link>
                    <Link href="/work" className={getLinkClass('/work')}>
                        Work
                    </Link>
                    <Link href="/about" className={getLinkClass('/about')}>
                        About
                    </Link>
                    <Link href="/contact" className={getLinkClass('/contact')}>
                        Contact
                    </Link>
                    <div className="w-px h-4 bg-border-soft hidden lg:block" />
                    <Link href="/login" className={getLinkClass('/login')}>
                        Portal Login
                    </Link>
                </nav>

                {/* Right: CTA Button & Mobile Menu Toggle */}
                <div className="flex items-center gap-4">
                    <div className="hidden lg:block">
                        <Button variant="primary" href="/contact" className="h-8 md:h-10 px-4 md:px-6 text-xs md:text-sm">
                            Book A call
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle button */}
                    <button
                        className="lg:hidden p-2 text-primary focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: "-100%" }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: "-100%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center min-h-screen w-full"
                    >
                        <nav className="flex flex-col items-center gap-8">
                            <Link
                                href="/"
                                className={getLinkClass('/', true)}
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                            <Link
                                href="/services"
                                className={getLinkClass('/services', true)}
                                onClick={() => setIsOpen(false)}
                            >
                                Services
                            </Link>
                            <Link
                                href="/work"
                                className={getLinkClass('/work', true)}
                                onClick={() => setIsOpen(false)}
                            >
                                Work
                            </Link>
                            <Link
                                href="/about"
                                className={getLinkClass('/about', true)}
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                            <Link
                                href="/contact"
                                className={getLinkClass('/contact', true)}
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>
                            <Link
                                href="/login"
                                className={getLinkClass('/login', true)}
                                onClick={() => setIsOpen(false)}
                            >
                                Portal Login
                            </Link>
                            <Button variant="primary" href="/contact" className="mt-4 h-12 px-8 text-base" onClick={() => setIsOpen(false)}>
                                Book A call
                            </Button>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
