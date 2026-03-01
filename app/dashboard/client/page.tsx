import { PremiumStatCard } from "@/components/ui/PremiumStatCard";
import { ChartTrendUp } from "@/components/illustrations/ChartTrendUp";
import { PulseRing } from "@/components/illustrations/PulseRing";
import { NodeNetwork } from "@/components/illustrations/NodeNetwork";

export default function ClientDashboardPage() {
    return (
        <div className="w-full max-w-5xl mx-auto space-y-8">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-primary mb-2">Project Command Center</h1>
                <p className="text-muted">Current Status: Phase 2 Development</p>
            </header>

            {/* Metrics Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <PremiumStatCard
                    title="Overall Progress"
                    value="65%"
                    Graphic={ChartTrendUp}
                />
                <PremiumStatCard
                    title="Next Milestone"
                    value={<span className="text-2xl">Frontend Handoff</span>}
                    subtext="Due: Oct 12"
                    Graphic={PulseRing}
                />
                <PremiumStatCard
                    title="Recent Feedback"
                    value={<span className="text-2xl">1 Message</span>}
                    subtext="Unread priority update"
                    Graphic={NodeNetwork}
                />
            </div>

            {/* The Timeline */}
            <h2 className="text-xl font-semibold text-primary mb-4">Implementation Timeline</h2>
            <div className="premium-glass rounded-2xl p-8">
                <div className="relative ml-3 space-y-10 py-2">
                    {/* Node track — subtle vertical line */}
                    <div className="absolute left-0 top-0 bottom-0 w-px bg-border-soft/50" aria-hidden="true" />

                    {/* Phase 1 — Completed */}
                    <div className="relative pl-8">
                        <div className="absolute flex items-center justify-center -left-[4px] top-1.5">
                            <div className="w-2 h-2 bg-muted rounded-full" />
                        </div>
                        <h3 className="text-lg font-semibold text-muted">1. Wireframing & UX</h3>
                        <p className="text-sm text-muted/60 mt-1">High-fidelity Figma prototypes approved. Tailwind tokens generated.</p>
                        <span className="inline-block mt-2 text-xs font-semibold px-3 py-1 bg-surface-strong rounded-full text-muted border border-border-soft/30">Completed</span>
                    </div>

                    {/* Phase 2 — Active */}
                    <div className="relative pl-8">
                        <div className="absolute w-4 h-4 rounded-full border border-primary bg-primary/20 flex items-center justify-center -left-[8px] top-1">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">2. Next.js Architecture</h3>
                        <p className="text-sm text-muted mt-1">Scaffolding App Router, premium-glass styling, and Framer Motion logic.</p>
                        <span className="inline-block mt-2 text-xs font-semibold px-3 py-1 bg-accent-dev/10 text-accent-dev rounded-full border border-accent-dev/20">In Progress</span>
                    </div>

                    {/* Phase 3 — Pending */}
                    <div className="relative pl-8">
                        <div className="absolute w-3 h-3 rounded-full border border-border-soft bg-transparent -left-[6px] top-1.5" />
                        <h3 className="text-lg font-semibold text-muted">3. Server Integration & Deployment</h3>
                        <p className="text-sm text-muted/40 mt-1">Vercel edge deployment, DB routing, and final Q&A sweeps.</p>
                        <span className="inline-block mt-2 text-xs font-semibold px-3 py-1 bg-surface rounded-full text-muted/60 border border-border-soft/20">Pending</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
