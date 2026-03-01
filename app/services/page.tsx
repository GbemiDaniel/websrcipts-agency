import { PageHeader } from "@/components/ui/PageHeader";
import { FeatureBlock } from "@/components/ui/FeatureBlock";

export default function ServicesPage() {
    return (
        <main className="relative min-h-screen text-primary selection:bg-accent-dev selection:text-white pb-32">
            <PageHeader title="Our Services" />
            <div className="space-y-32 py-24 container mx-auto px-6 relative z-10">
                <FeatureBlock
                    title="High-Performance Frontend"
                    description="Pixel-perfect, interactive user interfaces using modern React frameworks."
                    features={["Next.js App Router Architecture", "Hardware-Glass UI/UX", "Sub-second Page Loads"]}
                    align="left"
                    glowColor="var(--glow-dev)"
                />
                <FeatureBlock
                    title="Robust Backend Infrastructure"
                    description="Secure, scalable server logic and database management."
                    features={["REST & GraphQL APIs", "Scalable Cloud Architecture", "High-Security Data Processing"]}
                    align="right"
                    glowColor="var(--glow-writer)"
                />
                <FeatureBlock
                    title="Mobile App Development"
                    description="Fluid, app-store ready mobile experiences."
                    features={["iOS & Android Deployment", "Native Performance", "Seamless API Integration"]}
                    align="left"
                    glowColor="var(--glow-accent)"
                />
            </div>
        </main>
    );
}