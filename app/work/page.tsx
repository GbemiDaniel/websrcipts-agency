import { PageHeader } from "@/components/ui/PageHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";

export default function WorkPage() {
    return (
        <main className="relative min-h-screen text-primary selection:bg-accent-dev selection:text-white pb-32">
            <PageHeader title="Our Work" />
            <div className="container mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
                <ProjectCard
                    category="Fullstack Dashboard"
                    title="Collaborative Finance Platform"
                    description="A real-time financial tracking and resource management dashboard engineered with Next.js and a robust Node.js backend."
                    href="/work/collaborative-finance"
                />
                <ProjectCard
                    category="AI & Data Interface"
                    title="Predictive Analytics Engine"
                    description="An AI-powered web assistant featuring voice and chat modes for complex data modeling and rapid decision-making."
                    href="/work/predictive-analytics"
                />
                <ProjectCard
                    category="Web3 Infrastructure"
                    title="Decentralized Exchange UI"
                    description="A hardware-glass interface for a high-volume dApp, featuring smart contract bridging and real-time ledger updates."
                    href="/work/dex-ui"
                />
                <ProjectCard
                    category="Mobile App"
                    title="Enterprise Logistics Tracker"
                    description="A cross-platform mobile application providing real-time fleet tracking and seamless API integration with legacy systems."
                    href="/work/logistics-tracker"
                />
            </div>
        </main>
    );
}
