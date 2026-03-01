"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { User } from "lucide-react";

export function ProfileDropdown() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const isAdmin = pathname.includes('/admin');

    // Determine dynamic routing
    const settingsHref = isAdmin ? '/dashboard/admin/settings' : '/dashboard/client/settings';

    return (
        <div className="relative cursor-pointer">
            {/* Avatar Trigger */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 rounded-full bg-surface border border-border-soft flex items-center justify-center hover:bg-surface-strong transition-colors"
                aria-label="User menu"
            >
                {/* Avatar placeholder */}
                <span className="text-xs font-bold text-muted">WI</span>
            </div>

            {/* Dropdown Menu - Conditional Render to fix touch constraints */}
            {isOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 bg-surface-strong border border-border-soft rounded-md shadow-2xl z-100 flex flex-col py-2">
                    <Link
                        href={settingsHref}
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-2 text-sm text-muted hover:text-primary hover:bg-surface transition-colors"
                    >
                        Profile Settings
                    </Link>
                    <Link
                        href="/login"
                        onClick={() => setIsOpen(false)}
                        className="px-4 py-2 text-sm text-red-400 hover:bg-surface transition-colors"
                    >
                        Sign Out
                    </Link>
                </div>
            )}
        </div>
    );
}
