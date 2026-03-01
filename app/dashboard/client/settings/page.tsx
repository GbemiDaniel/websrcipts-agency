import { HardwareCard } from "@/components/ui/HardwareCard";

export default function ClientSettings() {
    return (
        <div className="w-full max-w-5xl mx-auto space-y-8">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-primary mb-2">Account Settings</h1>
                <p className="text-muted">Manage your notification vectors and billing integration.</p>
            </header>

            <HardwareCard className="p-8 mt-6">
                <div className="flex flex-col items-center justify-center min-h-[40vh] text-center gap-4">
                    <h2 className="text-xl font-bold text-primary">Module Under Construction</h2>
                    <p className="text-muted">Stripe integration is currently processing in the sandbox environment. Billing will be enabled upon Phase 3 sign-off.</p>
                </div>
            </HardwareCard>
        </div>
    );
}
