import Glowbtn from "@/components/buttons/Glowbtn";

export const metadata = {
  title: "Privacy Policy — Katha",
  description: "Learn about how Katha collects, uses, and protects your personal data and conversations.",
};

export default function PrivacyPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* ---------- Ambient background glows ---------- */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[450px] w-[800px] -translate-x-1/2 bg-gradient-to-b from-[#ff3d8f]/15 via-[#b14bff]/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-48 h-[500px] w-[500px] bg-[#ff3d8f]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1000px] px-6 md:px-12 lg:px-16">
        {/* ---------- Page Header ---------- */}
        <div className="text-center">
          <Glowbtn text="Legal & Privacy" />

          <h1 className="mt-6 font-display text-[36px] font-bold tracking-[0.01em] text-white sm:text-[48px] lg:text-[56px] leading-[1.15]">
            Privacy <span className="text-[#ff3d8f]">Policy</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[580px] text-[14px] sm:text-[15px] text-white/60">
            Last updated: March 2026. We are committed to transparency and safeguarding your privacy across all Katha services.
          </p>
        </div>

        {/* ---------- Privacy Content Card ---------- */}
        <div className="mt-14 sm:mt-18 rounded-[28px] border border-white/10 bg-white/[0.02] p-8 sm:p-14 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <div className="space-y-10 text-white/75 text-[15px] sm:text-[16px] leading-relaxed">
            {/* Section 1 */}
            <section className="space-y-3">
              <h2 className="font-display text-[22px] sm:text-[24px] font-semibold text-white">
                1. Overview
              </h2>
              <p>
                This Privacy Policy explains how Techzuno Solution OPC Private Limited (&ldquo;Katha&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects, uses, stores, and protects information when you use the Katha mobile application, websites, and associated services.
              </p>
            </section>

            {/* Section 2 */}
            <section className="space-y-3 border-t border-white/10 pt-8">
              <h2 className="font-display text-[22px] sm:text-[24px] font-semibold text-white">
                2. Information We Collect
              </h2>
              <p>
                We may collect personal details you provide directly (such as name, email address, or account profile), device information, and interaction data within the app to deliver personalized drama story experiences.
              </p>
            </section>

            {/* Section 3 */}
            <section className="space-y-3 border-t border-white/10 pt-8">
              <h2 className="font-display text-[22px] sm:text-[24px] font-semibold text-white">
                3. Character Conversations & Memory
              </h2>
              <p>
                Conversations with AI characters in Katha are processed to generate storyline progression and dynamic responses. We prioritize security and do not sell your personal chat data to third parties for advertising purposes.
              </p>
            </section>

            {/* Section 4 */}
            <section className="space-y-3 border-t border-white/10 pt-8">
              <h2 className="font-display text-[22px] sm:text-[24px] font-semibold text-white">
                4. Data Security
              </h2>
              <p>
                We implement industry-standard encryption, strict access controls, and regular audits to protect your data against unauthorized access, alteration, or disclosure.
              </p>
            </section>

            {/* Section 5 */}
            <section className="space-y-3 border-t border-white/10 pt-8">
              <h2 className="font-display text-[22px] sm:text-[24px] font-semibold text-white">
                5. Your Rights & Choices
              </h2>
              <p>
                You may request access to, correction of, or deletion of your personal account data at any time by contacting our support team.
              </p>
            </section>

            {/* Section 6 */}
            <section className="space-y-3 border-t border-white/10 pt-8">
              <h2 className="font-display text-[22px] sm:text-[24px] font-semibold text-white">
                6. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please reach out to us at{" "}
                <span className="text-[#ff3d8f] font-medium">info@techzuno.com</span>.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}

