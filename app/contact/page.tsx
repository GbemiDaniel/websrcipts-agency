import { PageHeader } from "@/components/ui/PageHeader";
import { HardwareCard } from "@/components/ui/HardwareCard";
import { Spotlight } from "@/components/ui/Spotlight";
import { ContactForm } from "@/components/ui/ContactForm";

export default function ContactPage() {
    return (
        <main className="relative min-h-screen overflow-hidden text-primary selection:bg-accent-dev selection:text-white pb-32">
            <PageHeader title="Get in Touch" />
            <div className="container mx-auto px-6 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-10">
                {/* Left Column: Direct Info */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-xl font-semibold text-primary mb-2">General Inquiries</h3>
                        <a href="mailto:hello@webskitinsights.com" className="text-muted hover:text-accent-dev transition-colors">
                            hello@webskitinsights.com
                        </a>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold text-primary mb-2">Technical Support</h3>
                        <a href="mailto:support@webskitinsights.com" className="text-muted hover:text-accent-dev transition-colors">
                            support@webskitinsights.com
                        </a>
                    </div>
                </div>

                {/* Right Column: Intake Form */}
                <HardwareCard className="p-8 relative overflow-hidden flex flex-col gap-4">
                    <Spotlight color="var(--glow-writer)" position={{ top: "-10%", right: "-10%" }} size="400px" />
                    <ContactForm />
                </HardwareCard>
            </div>
        </main>
    );
}
