import { HardwareCard } from "@/components/ui/HardwareCard";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { Spotlight } from "@/components/ui/Spotlight";
import Link from "next/link";

export default function RegisterPage() {
    return (
        <main className="relative min-h-screen flex flex-col items-center justify-center p-6 text-primary selection:bg-accent-dev selection:text-white">
            <HardwareCard className="max-w-md w-full p-8 relative overflow-hidden flex flex-col gap-6 z-10">
                <Spotlight color="var(--glow-writer)" position={{ top: "-20%", right: "-10%" }} size="300px" />

                <div className="relative z-10 text-center mb-4">
                    <h1 className="text-2xl font-bold text-primary mb-2">Request Access</h1>
                    <p className="text-sm text-muted">Register for a premium Webskit Insights client account.</p>
                </div>

                <form className="relative z-10 flex flex-col gap-4">
                    <Input label="Full Name" type="text" placeholder="John Doe" required />
                    <Input label="Organization" type="text" placeholder="Enterprise Corp" required />
                    <Input label="Email Address" type="email" placeholder="john@enterprise.com" required />
                    <Input label="Password" type="password" placeholder="••••••••" required />

                    <Button variant="primary" className="mt-2 w-full">
                        Submit Registration
                    </Button>
                </form>

                <div className="relative z-10 text-center mt-4">
                    <span className="text-sm text-muted">
                        Already have an account?{" "}
                        <Link href="/login" className="text-primary font-medium hover:text-accent-writer transition-colors">
                            Login here
                        </Link>
                    </span>
                </div>
            </HardwareCard>
        </main>
    );
}
