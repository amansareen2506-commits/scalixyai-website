"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface BookingFormProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export function BookingForm({ open, onOpenChange }: BookingFormProps) {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real app, this would submit to an API
        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
    };

    return (
        <AnimatePresence>
            {open && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => onOpenChange(false)}
                        className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
                    />
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border border-white/10 bg-surface p-6 shadow-lg duration-200 sm:rounded-lg"
                    >
                        <div className="flex items-center justify-between">
                            <h2 className="text-lg font-semibold text-white">
                                Book Your Free Strategy Call
                            </h2>
                            <button
                                onClick={() => onOpenChange(false)}
                                className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                            >
                                <X className="h-4 w-4 text-white" />
                                <span className="sr-only">Close</span>
                            </button>
                        </div>

                        {submitted ? (
                            <div className="flex flex-col items-center justify-center py-10 text-center">
                                <div className="mb-4 rounded-full bg-green-500/20 p-3">
                                    <CheckCircle2 className="h-8 w-8 text-green-500" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Request Received!
                                </h3>
                                <p className="text-muted-foreground">
                                    We'll be in touch shortly to schedule your call.
                                </p>
                                <Button
                                    onClick={() => onOpenChange(false)}
                                    className="mt-6"
                                >
                                    Close
                                </Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid gap-2">
                                    <label htmlFor="name" className="text-sm font-medium text-white">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        required
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <label htmlFor="email" className="text-sm font-medium text-white">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        required
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white"
                                        placeholder="john@business.com"
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <label htmlFor="service" className="text-sm font-medium text-white">
                                        Service Type
                                    </label>
                                    <select
                                        id="service"
                                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-white"
                                    >
                                        <option>General Inquiry</option>
                                        <option>Lead Generation</option>
                                        <option>Automation Setup</option>
                                        <option>CRM Integration</option>
                                    </select>
                                </div>
                                <Button type="submit" className="w-full">
                                    Book Strategy Call
                                </Button>
                            </form>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
