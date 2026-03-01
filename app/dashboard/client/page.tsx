import { HardwareCard } from "@/components/ui/HardwareCard";

export default function ClientDashboardPage() {
    return (
        <div className="w-full max-w-5xl mx-auto space-y-8">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-primary mb-2">Project Command Center</h1>
                <p className="text-muted">Current Status: Phase 2 Development</p>
            </header>

            {/* Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <HardwareCard className="p-6">
                    <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-2">Overall Progress</h3>
                    <p className="text-4xl font-bold text-primary">65%</p>
                </HardwareCard>

                <HardwareCard className="p-6">
                    <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-2">Next Milestone</h3>
                    <p className="text-2xl font-bold text-primary">Frontend Handoff</p>
                    <p className="text-sm text-accent-dev mt-1">Due: Oct 12</p>
                </HardwareCard>

                <HardwareCard className="p-6">
                    <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-2">Recent Feedback</h3>
                    <p className="text-2xl font-bold text-primary">1 Message</p>
                    <p className="text-sm text-muted mt-1">Unread priority update</p>
                </HardwareCard>
            </div>

            {/* The Timeline */}
            <h2 className="text-xl font-semibold text-primary mb-4">Implementation Timeline</h2>
            <HardwareCard className="p-8">
                <div className="relative border-l border-border-soft ml-3 space-y-8 py-2">
                    {/* Phase 1 */}
                    <div className="relative pl-8">
                        <div className="absolute w-4 h-4 bg-surface-strong border border-border flex items-center justify-center rounded-full -left-[8.5px] top-1">
                            <div className="w-1.5 h-1.5 bg-muted rounded-full" />
                        </div>
                        <h3 className="text-lg font-bold text-primary">1. Wireframing & UX</h3>
                        <p className="text-sm text-muted mt-1">High-fidelity Figma prototypes approved. Tailwind tokens generated.</p>
                        <span className="inline-block mt-2 text-xs font-semibold px-2 py-1 bg-surface-strong rounded text-muted">Completed</span>
                    </div>

                    {/* Phase 2 */}
                    <div className="relative pl-8">
                        <div className="absolute w-4 h-4 bg-background border border-accent-dev flex items-center justify-center rounded-full -left-[8.5px] top-1 [box-shadow:0_0_10px_var(--glow-dev)]">
                            <div className="w-1.5 h-1.5 bg-accent-dev rounded-full" />
                        </div>
                        <h3 className="text-lg font-bold text-primary text-accent-dev mt-0">2. Next.js Architecture</h3>
                        <p className="text-sm text-muted mt-1">Scaffolding App Router, hardware-glass styling, and Framer Motion logic.</p>
                        <span className="inline-block mt-2 text-xs font-semibold px-2 py-1 bg-accent-dev/10 text-accent-dev rounded animate-pulse">In Progress</span>
                    </div>

                    {/* Phase 3 */}
                    <div className="relative pl-8">
                        <div className="absolute w-4 h-4 bg-background border border-border-soft flex items-center justify-center rounded-full -left-[8.5px] top-1">
                        </div>
                        <h3 className="text-lg font-bold text-muted">3. Server Integration & Deployment</h3>
                        <p className="text-sm text-muted/50 mt-1">Vercel edge deployment, DB routing, and final Q&A sweeps.</p>
                        <span className="inline-block mt-2 text-xs font-semibold px-2 py-1 bg-surface rounded text-muted">Pending</span>
                    </div>
                </div>
            </HardwareCard>
        </div>
    );
}
