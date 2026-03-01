"use client";
import React from "react";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function Footer() {
    const pathname = usePathname();

    if (pathname.includes('/dashboard') || pathname.includes('/login') || pathname.includes('/register')) {
        return null;
    }

    return (
        <footer className="border-t border-border-soft bg-background py-12 mt-24">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Brand Column */}
                <div className="col-span-1 md:col-span-2">
                    <span className="text-xl font-bold text-primary">Webscripts Agency</span>
                    <p className="mt-4 text-sm text-muted max-w-xs">
                        Pixel-perfect React and Next.js interfaces engineered with robust full-stack architectures.
                    </p>
                </div>

                {/* Quick Links Column */}
                <div className="flex flex-col gap-3">
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Explore</h4>
                    <Link href="/services" className="text-sm text-muted hover:text-accent-dev transition-colors">Services</Link>
                    <Link href="/work" className="text-sm text-muted hover:text-accent-dev transition-colors">Work</Link>
                    <Link href="/about" className="text-sm text-muted hover:text-accent-dev transition-colors">About</Link>
                    <Link href="/contact" className="text-sm text-muted hover:text-accent-dev transition-colors">Contact</Link>
                </div>

                {/* Socials / Legal Column */}
                <div className="flex flex-col gap-3">
                    <h4 className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Connect</h4>
                    <Link href="#" className="text-sm text-muted hover:text-accent-dev transition-colors">Twitter / X</Link>
                    <Link href="#" className="text-sm text-muted hover:text-accent-dev transition-colors">GitHub</Link>
                    <Link href="#" className="text-sm text-muted hover:text-accent-dev transition-colors">LinkedIn</Link>
                </div>
            </div>

            {/* Copyright */}
            <div className="container mx-auto px-6 mt-16 pt-8 border-t border-border-soft/50 text-center">
                <div className="text-xs text-muted">
                    &copy; 2026 Webscripts Agency. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
