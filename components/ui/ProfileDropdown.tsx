"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function ProfileDropdown() {
    const pathname = usePathname();
    const isAdmin = pathname.includes('/admin');
    const settingsHref = isAdmin ? '/dashboard/admin/settings' : '/dashboard/client/settings';

    return (
        <div className="relative group cursor-pointer border border-transparent">
            <div className="w-8 h-8 rounded-full bg-surface-strong border border-border-soft flex items-center justify-center shrink-0">
                {/* Avatar placeholder */}
                <span className="text-xs font-bold text-muted">WI</span>
            </div>
            {/* Extended invisible hit area to prevent hover dropoff */}
            <div className="absolute top-full right-0 w-48 h-2 bg-transparent z-40"></div>
            <div className="absolute right-0 top-full mt-2 w-48 bg-background border border-border-soft rounded-md shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 flex flex-col py-2">
                <Link href={settingsHref} className="px-4 py-2 text-sm text-muted hover:text-primary hover:bg-surface transition-colors">Profile Settings</Link>
                <Link href="/login" className="px-4 py-2 text-sm text-red-400 hover:bg-surface transition-colors">Sign Out</Link>
            </div>
        </div>
    );
}
