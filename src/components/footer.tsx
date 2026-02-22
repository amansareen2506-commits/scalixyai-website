import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-background py-12 md:py-16">
            <div className="container px-4 md:px-6">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-tighter">
                            <div className="relative flex h-10 w-10 items-center justify-center -ml-2 mr-2">
                                <Image src="/logo.png" alt="ScalixyAI Logo" width={64} height={64} className="object-contain scale-[3]" />
                            </div>
                            <span>Scalixy<span className="text-primary">AI</span></span>
                        </Link>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            AI marketing & DFY automation for local service businesses — 20–30 appointments/month.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-muted-foreground hover:text-white transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Navigation</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="#problem" className="hover:text-primary transition-colors">Problem</Link></li>
                            <li><Link href="#solution" className="hover:text-primary transition-colors">Solution</Link></li>
                            <li><Link href="#results" className="hover:text-primary transition-colors">Results</Link></li>
                            <li><Link href="#pricing" className="hover:text-primary transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold text-white mb-4">Legal</h3>
                        <ul className="space-y-2 text-sm text-muted-foreground">
                            <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 border-t border-white/5 pt-8 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} ScalixyAI. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
