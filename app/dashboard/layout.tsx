import React from "react";
import { DashboardSidebar } from "@/components/ui/DashboardSidebar";
import { ProfileDropdown } from "@/components/ui/ProfileDropdown";
import { Menu } from "lucide-react";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen overflow-hidden bg-background text-primary selection:bg-accent-dev selection:text-white">
            {/* Sidebar Navigation */}
            <DashboardSidebar />

            {/* Main Content Wrapper */}
            <div className="flex-1 flex flex-col overflow-hidden relative">
                {/* Topbar Header */}
                <header className="sticky top-0 z-10 h-16 border-b border-border-soft flex items-center justify-between px-6 bg-background/80 backdrop-blur-md shrink-0">
                    <div className="flex items-center gap-4">
                        <Menu className="md:hidden" size={24} />
                        <div className="text-sm font-medium text-muted">Workspace / Dashboard</div>
                    </div>
                    <div className="flex items-center gap-4">
                        <ProfileDropdown />
                    </div>
                </header>

                {/* Main Content Area */}
                <main className="flex-1 overflow-y-auto p-6 md:p-8 bg-background relative z-0">
                    {children}
                </main>
            </div>
        </div>
    );
}
