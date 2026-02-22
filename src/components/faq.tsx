"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "What happens on the strategy call?",
        answer:
            "It’s a focused 20-minute conversation where we assess your market, current pipeline, and growth potential. You’ll leave with clarity on whether there’s a real opportunity to increase booked revenue — even if we don’t move forward.",
    },
    {
        question: "Is this right for my business?",
        answer:
            "We work best with service-based businesses that rely on consultations or appointments to generate revenue. If your goal is predictable, structured growth rather than short-term experiments, you’re likely a strong fit.",
    },
    {
        question: "How soon could we see results?",
        answer:
            "Timelines vary by market, but most partners begin seeing measurable traction within the first 30–60 days as campaigns and systems optimize. Our focus is sustainable, compounding growth.",
    },
    {
        question: "What if I’ve tried agencies before?",
        answer:
            "Many of our partners have. The difference is we focus on building a complete acquisition and conversion system — not just generating traffic or leads.",
    },
    {
        question: "Is there any obligation after the call?",
        answer:
            "No. The strategy call is designed to determine alignment. If it makes sense to move forward, we outline next steps. If not, you leave with clarity and direction.",
    },
    {
        question: "What happens if we’re not a fit?",
        answer:
            "We’ll be transparent. We only move forward when there’s a clear path to measurable growth.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="relative py-12 md:py-16 flex items-center snap-start bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto w-full px-6">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-[32px] md:text-[40px] lg:text-[48px] leading-[1.3] font-luxury tracking-normal text-white">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="mx-auto max-w-3xl space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-white/10 rounded-xl bg-surface/30 overflow-hidden"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="flex w-full items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-lg font-medium text-white">
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <Minus className="h-5 w-5 text-primary shrink-0" />
                                ) : (
                                    <Plus className="h-5 w-5 text-primary shrink-0" />
                                )}
                            </button>
                            <motion.div
                                initial={false}
                                animate={{ height: openIndex === index ? "auto" : 0 }}
                                className="overflow-hidden"
                            >
                                <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                                    {faq.answer}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
