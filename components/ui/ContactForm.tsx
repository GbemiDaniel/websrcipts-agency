"use client";

import React, { useState } from "react";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate network request
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 2000);
    };

    if (isSuccess) {
        return (
            <div className="relative z-10 flex flex-col items-center justify-center text-center p-8 border border-accent-dev/50 rounded-lg bg-accent-dev/5 gap-4 min-h-[300px]">
                <CheckCircle2 className="w-12 h-12 text-accent-dev" />
                <h3 className="text-xl font-bold text-primary">Transmission Received</h3>
                <p className="text-sm text-muted">
                    Our systems team will be in touch shortly.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-4">
            <Input required label="Name" placeholder="Name" />
            <Input required label="Work Email" placeholder="Work Email" type="email" />
            <textarea
                required
                className="flex min-h-[120px] w-full rounded-md border border-border-soft bg-surface px-4 py-3 text-sm text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent-dev focus:border-transparent transition-colors resize-y"
                placeholder="How can we help?"
            />
            <Button
                variant="primary"
                className="mt-4 w-full md:w-auto self-start"
                disabled={isSubmitting}
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="animate-spin mr-2 h-4 w-4" />
                        Sending...
                    </>
                ) : (
                    "Send Transmission"
                )}
            </Button>
        </form>
    );
}
