"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Clock, Ban, XCircle } from "lucide-react";

export function Problem() {
    return (
        <section id="problem" className="relative min-h-screen flex items-center snap-start bg-background overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/10 blur-[120px]" />
            <div className="max-w-7xl mx-auto w-full px-6">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[1.3] font-luxury tracking-normal text-white">
                        You’re not losing leads — <br />
                        <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">you’re losing booked jobs.</span>
                    </h2>
                    <p className="mt-6 text-xl text-muted-foreground font-light">
                        And it’s costing you every single day.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20 md:max-w-7xl mx-auto w-full">
                    {[
                        {
                            icon: Clock,
                            title: "Slow Response Time",
                            description: `Homeowners contact 3–5 companies.
The first to respond wins.
If you’re late, you’re out.`,
                        },
                        {
                            icon: XCircle,
                            title: "Leads Go Cold Fast",
                            description: `Most prospects won’t chase you.
If you’re not consistently in front of them,
they hire someone else.`,
                        },
                        {
                            icon: Ban,
                            title: "Manual Follow-Up Burnout",
                            description: `Chasing leads manually
slows response time
and costs you revenue.`,
                        },
                        {
                            icon: AlertTriangle,
                            title: "Wasted Ad Spend",
                            description: `You’re already paying for attention.
If leads don’t convert,
that money disappears.`,
                        },
                    ].map((problem, index) => (
                        <motion.div
                            key={problem.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-surface/30 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-red-500/40 transition-all duration-300 group hover:shadow-[0_0_30px_-5px_rgba(239,68,68,0.2)] h-full flex flex-col"
                        >
                            <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-red-500/20 to-orange-500/20 text-red-500 group-hover:scale-110 transition-transform duration-300 border border-red-500/20">
                                <problem.icon className="h-7 w-7" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 font-heading">{problem.title}</h3>
                            <p className="text-sm text-muted-foreground whitespace-pre-line leading-relaxed">{problem.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Closing Line Section */}
                <div className="mt-12 md:mt-16 text-center max-w-4xl mx-auto">
                    <p className="text-lg md:text-xl text-white max-w-3xl mx-auto leading-tight font-luxury italic">
                        The opportunity isn’t the problem.<br />
                        <span className="text-white/60">The missing system is.</span>
                    </p>
                </div>
            </div>
        </section>
    );
}
