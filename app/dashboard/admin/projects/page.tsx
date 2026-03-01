import { HardwareCard } from "@/components/ui/HardwareCard";

export default function AdminProjects() {
    return (
        <div className="w-full max-w-7xl mx-auto space-y-8">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-primary mb-2">Admin Projects</h1>
                <p className="text-muted">Manage global repository of active client initiatives.</p>
            </header>

            <HardwareCard className="p-8 mt-6">
                <div className="flex flex-col items-center justify-center min-h-[40vh] text-center gap-4">
                    <h2 className="text-xl font-bold text-primary">Module Under Construction</h2>
                    <p className="text-muted">The comprehensive project management datagrid is currently being integrated by the backend systems team.</p>
                </div>
            </HardwareCard>
        </div>
    );
}
