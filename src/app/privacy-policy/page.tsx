import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Privacy Policy | ScalixyAI",
    description: "Privacy Policy for ScalixyAI. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-background pt-32 pb-24">
            <div className="container px-4 md:px-6 mx-auto max-w-4xl">
                <div className="space-y-8 text-muted-foreground leading-relaxed">

                    <div className="space-y-4">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-8">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-primary font-medium">ScalixyAI</p>
                    </div>

                    <p>
                        ScalixyAI respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, and safeguard information when you visit our website or use our services.
                    </p>
                    <p>
                        By using this website, you agree to the terms outlined below.
                    </p>

                    <section className="space-y-4 pt-6">
                        <h2 className="text-2xl font-semibold text-white">1. Information We Collect</h2>

                        <h3 className="text-lg font-medium text-white pt-2">Personal Information</h3>
                        <p>We may collect personal information including:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Name</li>
                            <li>Email address</li>
                            <li>Phone number</li>
                            <li>Business name</li>
                            <li>Billing information</li>
                            <li>Information submitted through contact or booking forms</li>
                        </ul>

                        <h3 className="text-lg font-medium text-white pt-4">Non-Personal Information</h3>
                        <p>We may collect non-identifiable information such as:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Browser type</li>
                            <li>Device information</li>
                            <li>IP address</li>
                            <li>Pages visited</li>
                            <li>Time spent on site</li>
                            <li>Referral source</li>
                        </ul>
                    </section>

                    <section className="space-y-4 pt-6">
                        <h2 className="text-2xl font-semibold text-white">2. How We Use Information</h2>
                        <p>We may use collected information to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Respond to inquiries</li>
                            <li>Schedule and manage strategy calls</li>
                            <li>Provide AI automation and marketing services</li>
                            <li>Process payments</li>
                            <li>Improve website functionality</li>
                            <li>Send service updates or marketing communications</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                        <p className="font-medium text-white pt-2">We do not sell your personal information.</p>
                    </section>

                    <section className="space-y-4 pt-6">
                        <h2 className="text-2xl font-semibold text-white">3. Cookies & Tracking</h2>
                        <p>We use cookies and similar technologies to:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Improve user experience</li>
                            <li>Analyze website performance</li>
                            <li>Optimize marketing efforts</li>
                        </ul>
                        <p>You may disable cookies in your browser settings; however, some features may not function properly.</p>
                    </section>

                    <section className="space-y-4 pt-6">
                        <h2 className="text-2xl font-semibold text-white">4. Third-Party Services</h2>
                        <p>We may work with trusted third-party service providers (such as hosting platforms, payment processors, CRM systems, analytics providers, and email marketing tools) to operate our business.</p>
                        <p>These providers may process data only as necessary to perform services on our behalf.</p>
                    </section>

                    <section className="space-y-4 pt-6">
                        <h2 className="text-2xl font-semibold text-white">5. Data Sharing</h2>
                        <p>We may disclose personal information:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>To service providers assisting our operations</li>
                            <li>When required by law</li>
                            <li>To protect our legal rights</li>
                            <li>In connection with a business transfer</li>
                        </ul>
                        <p className="font-medium text-white pt-2">We do not sell or trade personal information.</p>
                    </section>

                    <section className="space-y-4 pt-6">
                        <h2 className="text-2xl font-semibold text-white">6. Data Security</h2>
                        <p>We implement reasonable technical and organizational safeguards to protect personal information. However, no system is completely secure.</p>
                    </section>

                    <section className="space-y-4 pt-6">
                        <h2 className="text-2xl font-semibold text-white">7. Your Rights</h2>
                        <p>You may request access to, correction of, or deletion of your personal information.</p>
                    </section>

                    <section className="space-y-4 pt-6">
                        <h2 className="text-2xl font-semibold text-white">8. Children’s Privacy</h2>
                        <p>Our services are not intended for individuals under 18 years of age. We do not knowingly collect information from minors.</p>
                    </section>

                    <section className="space-y-4 pt-6 pb-12">
                        <h2 className="text-2xl font-semibold text-white">9. Updates to This Policy</h2>
                        <p>We may update this Privacy Policy from time to time. Changes will be reflected on this page.</p>
                    </section>

                </div>
            </div>
        </div>
    );
}
