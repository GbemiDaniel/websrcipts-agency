"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FolderKanban, Settings, LogOut } from "lucide-react";

export function DashboardSidebar() {
    const pathname = usePathname();
    const isAdmin = pathname.includes('/admin');

    const adminLinks = [
        { name: "Overview", href: "/dashboard/admin", icon: <LayoutDashboard size={18} /> },
        { name: "Projects", href: "/dashboard/admin/projects", icon: <FolderKanban size={18} /> },
        { name: "Settings", href: "/dashboard/admin/settings", icon: <Settings size={18} /> },
    ];

    const clientLinks = [
        { name: "Overview", href: "/dashboard/client", icon: <LayoutDashboard size={18} /> },
        { name: "Projects", href: "/dashboard/client/projects", icon: <FolderKanban size={18} /> },
        { name: "Settings", href: "/dashboard/client/settings", icon: <Settings size={18} /> },
    ];

    const linksToRender = isAdmin ? adminLinks : clientLinks;

    return (
        <aside className="hidden md:flex flex-col w-64 border-r border-border-soft bg-surface h-screen sticky top-0 shrink-0">
            <div className="h-16 flex items-center px-6 border-b border-border-soft shrink-0">
                <Link href="/" className="text-xl font-bold text-primary hover:text-accent-dev transition-colors">
                    Webskit Insights
                </Link>
            </div>

            <nav className="flex-1 p-4 flex flex-col gap-2 overflow-y-auto">
                {linksToRender.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-md transition-colors ${isActive
                                ? "bg-surface-strong text-primary shadow-[0_0_10px_var(--glow-dev)] border border-border-soft"
                                : "text-muted hover:text-primary hover:bg-surface"
                                }`}
                        >
                            {link.icon}
                            {link.name}
                        </Link>
                    )
                })}
            </nav>

            <div className="mt-auto p-4 border-t border-border-soft">
                <Link href="/login" className="flex items-center gap-3 text-muted hover:text-red-400 transition-colors">
                    <LogOut className="w-5 h-5" />
                    Sign Out
                </Link>
            </div>
        </aside>
    );
}
