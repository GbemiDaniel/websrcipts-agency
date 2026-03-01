import React from 'react';
import { HardwareCard } from './HardwareCard';
import { Input } from './Input';
import { Button } from './Button';

/**
 * Contact/Conversion Section (Server Component)
 * 
 * Serves as the final Call-to-Action for the landing page.
 * Implements a 2-column grid layout inside a massive HardwareCard.
 */
export function ContactSection() {
    return (
        <section className="mt-32 mb-20 px-6 container mx-auto max-w-6xl relative z-10" id="contact">
            <HardwareCard className="p-8 md:p-12 lg:p-16" glowColor="var(--glow-dev)">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">

                    {/* Left Column: The Hook */}
                    <div className="flex flex-col justify-center">
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-foreground mb-6">
                            Ready to scale your digital infrastructure?
                        </h2>
                        <p className="text-base text-muted leading-relaxed max-w-md">
                            Whether you need a full enterprise platform or a high-converting landing page, our engineering team is ready to build it. Reach out below.
                        </p>
                    </div>

                    {/* Right Column: The Form */}
                    <div className="flex flex-col bg-background/30 p-6 md:p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
                        <form className="flex flex-col gap-5">

                            <div className="flex flex-col gap-2">
                                <label htmlFor="name" className="text-sm font-medium text-slate-300">Name</label>
                                <Input id="name" type="text" placeholder="John Doe" required />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-300">Email Address</label>
                                <Input id="email" type="email" placeholder="john@company.com" required />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Tell us about your project..."
                                    className="flex w-full rounded-md border border-border-soft bg-surface px-4 py-3 text-sm text-primary placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent-dev focus:border-transparent transition-colors resize-none"
                                    required
                                />
                            </div>

                            <Button variant="primary" type="button" className="mt-4 w-full h-12 text-base">
                                Send Message
                            </Button>
                        </form>
                    </div>

                </div>
            </HardwareCard>
        </section>
    );
}
