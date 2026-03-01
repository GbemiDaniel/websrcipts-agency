import { PremiumStatCard } from "@/components/ui/PremiumStatCard";
import { NodeNetwork } from "@/components/illustrations/NodeNetwork";
import { PulseRing } from "@/components/illustrations/PulseRing";
import { ChartTrendUp } from "@/components/illustrations/ChartTrendUp";

export default function AdminDashboardPage() {
    return (
        <div className="w-full max-w-7xl mx-auto space-y-8">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-primary mb-2">Agency Overview</h1>
                <p className="text-muted">Global analytics and active client roster.</p>
            </header>

            {/* Metrics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <PremiumStatCard
                    title="Active Projects"
                    value="12"
                    Graphic={NodeNetwork}
                />
                <PremiumStatCard
                    title="Pending Reviews"
                    value="4"
                    Graphic={PulseRing}
                />
                <PremiumStatCard
                    title="Completed (YTD)"
                    value="28"
                    Graphic={ChartTrendUp}
                />
                <PremiumStatCard
                    title="MRR"
                    value={<span className="text-accent-dev">$142.5k</span>}
                    Graphic={ChartTrendUp}
                />
            </div>

            {/* Client Roster Table */}
            <h2 className="text-xl font-semibold text-primary mb-4">Client Roster</h2>
            <div className="premium-glass rounded-2xl p-6 overflow-hidden">
                <div className="w-full overflow-x-auto">
                    <table className="w-full text-sm text-left whitespace-nowrap">
                        <thead>
                            <tr className="border-b border-border-soft/50">
                                <th className="px-6 pb-4 text-xs font-semibold text-muted uppercase tracking-widest">Client Name</th>
                                <th className="px-6 pb-4 text-xs font-semibold text-muted uppercase tracking-widest">Project Type</th>
                                <th className="px-6 pb-4 text-xs font-semibold text-muted uppercase tracking-widest">Status</th>
                                <th className="px-6 pb-4 text-xs font-semibold text-muted uppercase tracking-widest text-right">Last Updated</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* Row 1 */}
                            <tr className="group border-b border-border-soft/30 hover:bg-surface/20 transition-colors duration-200 cursor-pointer">
                                <td className="px-6 py-4 text-sm font-medium text-primary/80 group-hover:text-primary transition-colors">Enterprise Solutions Ltd</td>
                                <td className="px-6 py-4 text-muted">Next.js Dashboard</td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Active</span>
                                </td>
                                <td className="px-6 py-4 text-muted text-right">2 hrs ago</td>
                            </tr>
                            {/* Row 2 */}
                            <tr className="group border-b border-border-soft/30 hover:bg-surface/20 transition-colors duration-200 cursor-pointer">
                                <td className="px-6 py-4 text-sm font-medium text-primary/80 group-hover:text-primary transition-colors">Nexus AI</td>
                                <td className="px-6 py-4 text-muted">LLM Voice Interface</td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">In Review</span>
                                </td>
                                <td className="px-6 py-4 text-muted text-right">1 day ago</td>
                            </tr>
                            {/* Row 3 */}
                            <tr className="group border-b border-border-soft/30 hover:bg-surface/20 transition-colors duration-200 cursor-pointer">
                                <td className="px-6 py-4 text-sm font-medium text-primary/80 group-hover:text-primary transition-colors">DeFi Connect</td>
                                <td className="px-6 py-4 text-muted">Web3 dApp</td>
                                <td className="px-6 py-4">
                                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Active</span>
                                </td>
                                <td className="px-6 py-4 text-muted text-right">3 days ago</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
