import { PageHeader } from "@/components/ui/PageHeader";
import { TeamCard } from "@/components/ui/TeamCard";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-32 pb-24">
            <PageHeader title="About Webscripts" />
            <section className="container mx-auto px-6 max-w-4xl prose prose-invert mt-16">
                <h2 className="text-xl text-primary font-bold mb-4">
                    The Webscripts Architecture
                </h2>
                <p className="text-lg text-muted md:text-xl">
                    We bridge the gap between premium React frontend experiences, robust backend systems, and native mobile solutions.
                </p>
            </section>

            <div className="container mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                <TeamCard
                    name="Frontend Engineering"
                    role="React / Next.js"
                    description="Architecting pixel-perfect, sub-second web interfaces and interactive hardware-glass layouts."
                    glowColor="var(--glow-dev)"
                />
                <TeamCard
                    name="Backend & Cloud"
                    role="Systems Architect"
                    description="Building the secure APIs, database infrastructures, and scalable server logic that power the platform."
                    glowColor="var(--glow-writer)"
                />
                <TeamCard
                    name="Mobile Development"
                    role="Native & Cross-Platform"
                    description="Translating complex web applications into fluid, app-store ready experiences for iOS and Android."
                    glowColor="var(--glow-accent)"
                />
            </div>
        </main>
    );
}
