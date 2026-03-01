import { HardwareCard } from "@/components/ui/HardwareCard";

export default function ClientProjects() {
    return (
        <div className="w-full max-w-5xl mx-auto space-y-8">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-primary mb-2">Project Repository</h1>
                <p className="text-muted">Review current deliverables, design tokens, and codebase snapshots.</p>
            </header>

            <HardwareCard className="p-8 mt-6">
                <div className="flex flex-col items-center justify-center min-h-[40vh] text-center gap-4">
                    <h2 className="text-xl font-bold text-primary">Module Under Construction</h2>
                    <p className="text-muted">The deliverable matrix is currently syncing with the main repository. Please check back shortly.</p>
                </div>
            </HardwareCard>
        </div>
    );
}
