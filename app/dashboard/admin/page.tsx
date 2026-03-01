import { HardwareCard } from "@/components/ui/HardwareCard";

export default function AdminDashboardPage() {
    return (
        <div className="w-full max-w-7xl mx-auto space-y-8">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-primary mb-2">Agency Overview</h1>
                <p className="text-muted">Global analytics and active client roster.</p>
            </header>

            {/* Metrics Row */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <HardwareCard className="p-6">
                    <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-2">Active Projects</h3>
                    <p className="text-3xl font-bold text-primary">12</p>
                </HardwareCard>
                <HardwareCard className="p-6">
                    <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-2">Pending Reviews</h3>
                    <p className="text-3xl font-bold text-primary">4</p>
                </HardwareCard>
                <HardwareCard className="p-6">
                    <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-2">Completed (YTD)</h3>
                    <p className="text-3xl font-bold text-primary">28</p>
                </HardwareCard>
                <HardwareCard className="p-6">
                    <h3 className="text-sm font-semibold text-muted uppercase tracking-wider mb-2">MRR</h3>
                    <p className="text-3xl font-bold text-accent-dev">$142.5k</p>
                </HardwareCard>
            </div>

            {/* Client Roster Table */}
            <h2 className="text-xl font-semibold text-primary mb-4">Client Roster</h2>
            <HardwareCard className="overflow-hidden w-full overflow-x-auto">
                <div className="w-full overflow-x-auto pb-4">
                    <table className="w-full text-sm text-left whitespace-nowrap">
                        <thead className="bg-surface border-b border-border-soft">
                            <tr>
                                <th className="px-6 py-4 text-xs font-semibold text-muted uppercase tracking-wider">Client Name</th>
                                <th className="px-6 py-4 text-xs font-semibold text-muted uppercase tracking-wider">Project Type</th>
                                <th className="px-6 py-4 text-xs font-semibold text-muted uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-xs font-semibold text-muted uppercase tracking-wider text-right">Last Updated</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-border-soft">
                            {/* Row 1 */}
                            <tr className="group border-b border-border-soft/50 hover:bg-surface transition-all duration-200 cursor-pointer">
                                <td className="px-6 py-4 text-sm font-medium text-primary/80 group-hover:text-primary transition-colors">Enterprise Solutions Ltd</td>
                                <td className="px-6 py-4 text-muted">Next.js Dashboard</td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Active</span>
                                </td>
                                <td className="px-6 py-4 text-muted text-right">2 hrs ago</td>
                            </tr>
                            {/* Row 2 */}
                            <tr className="group border-b border-border-soft/50 hover:bg-surface transition-all duration-200 cursor-pointer">
                                <td className="px-6 py-4 text-sm font-medium text-primary/80 group-hover:text-primary transition-colors">Nexus AI</td>
                                <td className="px-6 py-4 text-muted">LLM Voice Interface</td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-400 border border-amber-500/20">In Review</span>
                                </td>
                                <td className="px-6 py-4 text-muted text-right">1 day ago</td>
                            </tr>
                            {/* Row 3 */}
                            <tr className="group border-b border-border-soft/50 hover:bg-surface transition-all duration-200 cursor-pointer">
                                <td className="px-6 py-4 text-sm font-medium text-primary/80 group-hover:text-primary transition-colors">DeFi Connect</td>
                                <td className="px-6 py-4 text-muted">Web3 dApp</td>
                                <td className="px-6 py-4">
                                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Active</span>
                                </td>
                                <td className="px-6 py-4 text-muted text-right">3 days ago</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </HardwareCard>
        </div>
    );
}
