"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, LogOut, LayoutDashboard, Settings, FolderKanban } from "lucide-react";

export function MobileDashboardNav() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const isAdmin = pathname.includes('/admin');

    const adminLinks = [
        { name: "Overview", href: "/dashboard/admin", icon: LayoutDashboard },
        { name: "All Projects", href: "/dashboard/admin/projects", icon: FolderKanban },
        { name: "System Settings", href: "/dashboard/admin/settings", icon: Settings },
    ];

    const clientLinks = [
        { name: "My Dashboard", href: "/dashboard/client", icon: LayoutDashboard },
        { name: "Active Details", href: "/dashboard/client/projects", icon: FolderKanban },
        { name: "Account Settings", href: "/dashboard/client/settings", icon: Settings },
    ];

    const links = isAdmin ? adminLinks : clientLinks;

    return (
        <div className="md:hidden">
            <button
                onClick={() => setIsOpen(true)}
                className="text-primary hover:text-accent-dev transition-colors focus:outline-none"
                aria-label="Open mobile menu"
            >
                <Menu className="w-6 h-6" />
            </button>

            {isOpen && (
                <div className="fixed inset-0 z-100 w-full h-screen bg-background sm:bg-[#0f172a] flex flex-col pt-20 px-6">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="p-2 absolute top-6 right-6 text-muted hover:text-primary transition-colors focus:outline-none"
                        aria-label="Close mobile menu"
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <div className="flex flex-col gap-8 mt-8">
                        {links.map((link) => {
                            const Icon = link.icon;
                            const isActive = pathname === link.href;
                            return (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className={`flex items-center gap-4 text-2xl font-medium transition-colors ${isActive ? 'text-accent-dev' : 'text-primary hover:text-muted'}`}
                                >
                                    <Icon className="w-8 h-8" />
                                    {link.name}
                                </Link>
                            );
                        })}
                    </div>

                    <div className="mt-auto pb-12 pt-8 border-t border-border-soft">
                        <Link
                            href="/login"
                            onClick={() => setIsOpen(false)}
                            className="flex items-center gap-4 text-2xl font-medium text-muted hover:text-red-400 transition-colors"
                        >
                            <LogOut className="w-8 h-8" />
                            Sign Out
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
