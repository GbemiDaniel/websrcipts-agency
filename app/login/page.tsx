import { HardwareCard } from "@/components/ui/HardwareCard";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Spotlight } from "@/components/ui/Spotlight";
import Link from "next/link";

export default function LoginPage() {
    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center p-6 text-primary selection:bg-accent-dev selection:text-white">
            <HardwareCard className="max-w-md w-full p-8 relative overflow-hidden flex flex-col gap-6 z-10">
                <Spotlight color="var(--glow-dev)" position={{ top: "-20%", left: "-10%" }} size="300px" />

                <div className="relative z-10 text-center mb-4">
                    <h1 className="text-2xl font-bold text-primary mb-2">Agency Protocol Login</h1>
                    <p className="text-sm text-muted">Enter your credentials to access the workspace.</p>
                </div>

                <form className="relative z-10 flex flex-col gap-4">
                    <Input label="Email Address" type="email" placeholder="client@enterprise.com" required />
                    <Input label="Password" type="password" placeholder="••••••••" required />

                    <div className="flex gap-4 mt-2">
                        <Button variant="outline" href="/dashboard/client" className="w-full">
                            Client View
                        </Button>
                        <Button variant="primary" href="/dashboard/admin" className="w-full">
                            Admin View
                        </Button>
                    </div>
                </form>

                <div className="relative z-10 text-center mt-4">
                    <span className="text-sm text-muted">
                        Need an account?{" "}
                        <Link href="/register" className="text-primary font-medium hover:text-accent-dev transition-colors">
                            Request Access
                        </Link>
                    </span>
                </div>
            </HardwareCard>
        </main>
    );
}
