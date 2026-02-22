"use client";

import { motion } from "framer-motion";

const steps = [
    {
        number: "01",
        title: "Book a 20-Minute Strategy Call",
        content: [
            "Schedule a focused 20-minute session where we review your service area, core offers, current pipeline, and revenue targets.",
            "We come prepared to evaluate opportunity — not to run a generic discovery call."
        ]
    },
    {
        number: "02",
        title: "Fit & Revenue Feasibility",
        content: [
            "During the call, we assess real market demand and determine whether a predictable flow of qualified consultations (e.g., 15–30 per month) is realistic for your business.",
            "If there’s a clear path to measurable booked revenue, we outline how we would approach it and what results you can expect."
        ]
    },
    {
        number: "03",
        title: "Clear Decision, Immediate Direction",
        content: [
            "No chasing. No drawn-out follow-ups. Just clarity.",
            "If we’re aligned, you’ll leave the call with a defined scope, timeline, and next steps to move forward. If not, you’ll still gain a candid assessment of your growth potential."
        ]
    }
];

export function PartnershipProcess() {
    return (
        <section id="process" className="relative py-12 md:py-16 flex items-center snap-start bg-background overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -z-10 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500/5 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full px-6">
                {/* Header */}
                <div className="mx-auto max-w-4xl text-center mb-16 md:mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-sm font-bold tracking-wider text-primary uppercase mb-4 block">
                            HOW WE WORK TOGETHER
                        </span>
                        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[1.3] font-luxury tracking-normal text-white">
                            Our <span className="text-accent">Partnership</span> Process
                        </h2>
                    </motion.div>
                </div>

                {/* Timeline Layout */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Line Desktop */}
                    <div className="hidden md:block absolute left-[56px] top-4 bottom-4 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent z-0" />

                    {/* Vertical Line Mobile */}
                    <div className="md:hidden absolute left-[31px] top-4 bottom-4 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent z-0" />

                    <div className="space-y-12 md:space-y-20 relative z-10">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.number}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                className="flex flex-col md:flex-row gap-6 md:gap-16 items-start"
                            >
                                {/* Left Side: Badge */}
                                <div className="flex-shrink-0 flex items-center justify-center">
                                    <div className="w-16 h-16 md:w-[112px] md:h-[112px] rounded-full bg-background border border-primary/30 shadow-[0_0_30px_rgba(239,68,68,0.15)] flex items-center justify-center relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors duration-500" />
                                        <span className="text-2xl md:text-4xl font-bold bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500">
                                            {step.number}
                                        </span>
                                    </div>
                                </div>

                                {/* Right Side: Content Card */}
                                <div className="flex-grow w-full">
                                    <div className="bg-surface/30 border border-white/5 hover:border-white/10 transition-colors duration-300 rounded-[20px] p-8 md:p-10 shadow-sm relative overflow-hidden group">
                                        {/* Subtle inner glow overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                        <h3 className="text-2xl md:text-3xl font-luxury text-white mb-6 leading-[1.3] relative z-10">
                                            {step.title}
                                        </h3>

                                        <div className="space-y-4 relative z-10">
                                            {step.content.map((paragraph, pIdx) => (
                                                <p key={pIdx} className="text-lg text-muted-foreground leading-relaxed">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
