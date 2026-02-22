"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
    {
        value: "20-30",
        label: "Qualified Appointments / Month",
        color: "text-primary",
    },
    {
        value: "↑",
        label: "Conversion Boost",
        color: "text-accent",
    },
    {
        value: "↓",
        label: "Cost Per Appointment",
        color: "text-secondary",
    },
    {
        value: "20+",
        label: "Hours Saved Per Week",
        color: "text-white",
    },
];

export function Results() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="results" className="relative py-12 md:py-16 flex items-center snap-start border-y border-white/5 bg-background overflow-hidden">
            <div className="absolute inset-0 bg-blue-500/5 -z-10" />
            <div className="max-w-7xl mx-auto w-full px-6">
                <div ref={ref} className="grid grid-cols-2 gap-8 md:grid-cols-4">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={metric.label}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
                            className="text-center"
                        >
                            <div
                                className={`text-4xl font-black md:text-5xl mb-2 ${metric.color} glow-text`}
                            >
                                {metric.value}
                            </div>
                            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-2">
                                {metric.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
                <div className="mt-12 text-center text-lg text-muted-foreground">
                    Predictable bookings. Lower marketing waste. More time to run your business.
                </div>
            </div>
        </section>
    );
}
