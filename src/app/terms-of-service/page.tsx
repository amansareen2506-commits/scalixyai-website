import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Terms of Service | ScalixyAI",
    description: "Terms of Service for ScalixyAI. Read our rules and guidelines for using our website and services.",
};

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-24">
            <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                <div className="space-y-8 text-muted-foreground leading-relaxed">

                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8">
                            Terms of Service
                        </h1>
                        <p className="text-xl text-primary font-medium">ScalixyAI</p>
                    </div>

                    <section className="space-y-4 pt-6">
                        <h2 className="text-2xl font-semibold text-white">1. General</h2>
                        <p>This website is owned and operated by ScalixyAI (“we,” “our,” “us”).</p>
                        <p>By accessing or using this website (the “Site”), you agree to be bound by these Terms of Service, our Privacy Policy, and any additional terms that may apply to specific services.</p>
                        <p>If you do not agree to these Terms, you must not use this Site.</p>
                        <p>We reserve the right to modify these Terms at any time. Continued use of the Site after changes are posted constitutes acceptance of those changes.</p>
                    </section>

                    <section className="space-y-4 pt-6">
                        <h2 className="text-2xl font-semibold text-white">2. Services</h2>
                        <p>ScalixyAI provides AI automation systems, marketing solutions, lead generation services, and related consulting.</p>
                        <p>All services may be governed by separate agreements, proposals, or contracts where applicable.</p>
                        <p>Nothing on this Site constitutes a binding offer unless expressly stated.</p>
                    </section>

                    <section className="space-y-4 pt-6">
                        <h2 className="text-2xl font-semibold text-white">3. Intellectual Property</h2>
                        <p>All content on this Site, including text, graphics, branding, design, layout, videos, software, and materials, is the property of ScalixyAI and protected by intellectual property laws.</p>
                        <p>You may not copy, reproduce, republish, distribute, modify, sell, or exploit any content without prior written consent.</p>
                        <p>Content may be viewed for personal, non-commercial use only.</p>
                    </section>

                    <section className="space-y-4 pt-6">
                        <h2 className="text-2xl font-semibold text-white">4. User Conduct</h2>
                        <p>You agree not to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Violate any applicable law or regulation</li>
                            <li>Attempt unauthorized access to our systems</li>
                            <li>Upload malicious code</li>
                            <li>Interfere with website functionality</li>
                            <li>Submit false or misleading information</li>
                            <li>Use the Site in a harmful or unlawful manner</li>
                        </ul>
                        <p className="font-medium text-white pt-2">We reserve the right to suspend or terminate access for violations of these Terms.</p>
                    </section>

                    <section className="space-y-4 pt-6">
                        <h2 className="text-2xl font-semibold text-white">5. Payments and Purchases</h2>
                        <p>If you purchase services:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>You agree to provide accurate billing information.</li>
                            <li>You are responsible for all charges incurred.</li>
                            <li>Payment terms are governed by your service agreement or invoice.</li>
                            <li>Failure to complete payment may result in suspension or termination of services.</li>
                        </ul>
                    </section>

                    <section className="space-y-4 pt-6">
                        <h2 className="text-2xl font-semibold text-white">6. Refund Policy</h2>
                        <p>Refund eligibility, if any, is governed by the specific agreement associated with the purchased service.</p>
                        <p>Unless otherwise stated in writing, fees for digital services, consulting, and implementation work are non-refundable.</p>
                    </section>

                    <section className="space-y-4 pt-6">
                        <h2 className="text-2xl font-semibold text-white">7. No Guarantees</h2>
                        <p>ScalixyAI does not guarantee specific financial results, revenue increases, or business performance outcomes.</p>
                        <p>Results depend on multiple external factors including client execution, market conditions, advertising performance, and other variables outside our control.</p>
                        <p>You acknowledge that no representation of guaranteed results has been made.</p>
                    </section>

                    <section className="space-y-4 pt-6">
                        <h2 className="text-2xl font-semibold text-white">8. Third-Party Platforms</h2>
                        <p>Our services may integrate or rely on third-party platforms, tools, or software.</p>
                        <p>We are not responsible for:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Platform policy changes</li>
                            <li>Account suspensions</li>
                            <li>Service interruptions</li>
                            <li>Technical failures outside our control</li>
                        </ul>
                        <p className="font-medium text-white pt-2">Your use of third-party platforms is subject to their respective terms.</p>
                    </section>

                    <section className="space-y-4 pt-6">
                        <h2 className="text-2xl font-semibold text-white">9. Disclaimer</h2>
                        <p>All information and services provided by ScalixyAI are provided “as is” without warranties of any kind.</p>
                        <p>We disclaim all express and implied warranties, including merchantability and fitness for a particular purpose.</p>
                        <p>We do not warrant uninterrupted or error-free operation of the Site.</p>
                    </section>

                    <section className="space-y-4 pt-6">
                        <h2 className="text-2xl font-semibold text-white">10. Limitation of Liability</h2>
                        <p>To the fullest extent permitted by law, ScalixyAI shall not be liable for indirect, incidental, special, or consequential damages, including loss of profits or business interruption.</p>
                        <p>Our total liability for any claim shall not exceed the amount paid by you to ScalixyAI for the services in question.</p>
                    </section>

                    <section className="space-y-4 pt-6">
                        <h2 className="text-2xl font-semibold text-white">11. Indemnification</h2>
                        <p>You agree to indemnify and hold harmless ScalixyAI from any claims, liabilities, damages, or expenses arising from your use of the Site or violation of these Terms.</p>
                    </section>

                    <section className="space-y-4 pt-6">
                        <h2 className="text-2xl font-semibold text-white">12. Termination</h2>
                        <p>We may suspend or terminate your access to the Site or services at our discretion if you violate these Terms.</p>
                        <p>All outstanding obligations survive termination.</p>
                    </section>

                    <section className="space-y-4 pt-6">
                        <h2 className="text-2xl font-semibold text-white">13. Governing Law</h2>
                        <p>These Terms shall be governed in accordance with applicable laws of the jurisdiction in which ScalixyAI operates.</p>
                    </section>

                    <section className="space-y-4 pt-6 pb-12">
                        <h2 className="text-2xl font-semibold text-white">14. Severability</h2>
                        <p>If any provision of these Terms is found unenforceable, the remaining provisions remain in full force and effect.</p>
                    </section>

                </div>
            </div>
        </div>
    );
}
