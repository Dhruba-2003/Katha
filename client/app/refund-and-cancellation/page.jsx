import Link from "next/link";
import { Icon } from "@iconify/react";
import Glowbtn from "@/components/buttons/Glowbtn";

export const metadata = {
  title: "Refund & Cancellation Policy — Katha",
  description:
    "Read Katha's Refund Policy for one-time memberships, non-refundable purchases, and failed or duplicate payment resolution.",
  openGraph: {
    title: "Refund & Cancellation Policy — Katha",
    description:
      "Clear guidelines on Katha memberships, non-refundable digital purchases, and payment issues.",
    type: "website",
    locale: "en_US",
    siteName: "Katha",
  },
};

const HIGHLIGHTS = [
  {
    title: "One-Time Purchase",
    description:
      "Memberships do not renew automatically—we never charge you again without you choosing to buy.",
    icon: "solar:calendar-mark-bold",
    accent: "#ff3d8f",
  },
  {
    title: "No Refunds",
    description:
      "All membership payments are final and non-refundable with immediate access to the digital service.",
    icon: "solar:shield-check-bold",
    accent: "#b14bff",
  },
  {
    title: "7-Day Payment Support",
    description:
      "Report failed activations or duplicate debits within 7 days for activation or reversal.",
    icon: "solar:clock-circle-bold",
    accent: "#ff9f1c",
  },
];

const POLICY_SECTIONS = [
  {
    title: "No Refunds",
    paragraphs: [
      "Katha memberships give you immediate access to a digital service. By buying a membership you agree that all payments are final and non-refundable, and that no cancellations or refunds are provided.",
    ],
  },
  {
    title: "How memberships work",
    paragraphs: [],
    bullets: [
      "A membership is a one-time purchase for a fixed period. It does not renew automatically and we never charge you again without you choosing to buy.",
      "Access ends on the expiry date. To continue, you must buy a new membership yourself.",
      "We do not refund unused days, unused messages, or purchases made by mistake or after a change of mind.",
      "If you delete your account, any active membership is deleted with it. This cannot be undone and no refund is given.",
      "We cannot refund because you did not use the service, did not like a character or reply, or were unaware of the free message limit.",
    ],
  },
  {
    title: "Failed or duplicate payments",
    paragraphs: [
      "This is not a refund. If money was debited but your membership was not activated, or you were debited twice for the same order because of a technical error, write to info@techzuno.com within 7 days with your registered email, the transaction ID, the date and a screenshot. We will either activate your membership or reverse the extra amount to your original payment method. Timelines depend on the payment gateway and your bank.",
    ],
  },
  {
    title: "Before you buy",
    paragraphs: [],
    bullets: [
      "Check the plan duration and price shown at checkout.",
      "Use your free messages to see whether Katha suits you.",
      "Contact us with any question before paying.",
    ],
  },
  {
    title: "Governing law",
    paragraphs: [
      "This policy is governed by the laws of India. Any dispute is subject to the exclusive jurisdiction of the courts at Kolkata, West Bengal.",
    ],
  },
];

export default function RefundAndCancellationPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* ---------- Ambient background glows ---------- */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[450px] w-[800px] -translate-x-1/2 bg-gradient-to-b from-[#ff3d8f]/15 via-[#b14bff]/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-48 h-[500px] w-[500px] bg-[#ff3d8f]/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/4 -left-48 h-[500px] w-[500px] bg-[#b14bff]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1000px] px-6 md:px-12 lg:px-16">
        {/* ---------- Page Header ---------- */}
        <div className="text-center">
          <Glowbtn text="Legal & Billing" />

          <h1 className="mt-6 font-display text-[36px] font-bold tracking-[0.01em] text-white sm:text-[48px] lg:text-[56px] leading-[1.15]">
            Refund &amp; <span className="text-[#ff3d8f]">Cancellation</span> Policy
          </h1>
          <p className="mx-auto mt-4 max-w-[600px] text-[14px] sm:text-[15px] text-white/60">
            Last updated on 18 November 2026.
          </p>
        </div>

        {/* ---------- Key Highlights Strip ---------- */}
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {HIGHLIGHTS.map((item) => (
            <div
              key={item.title}
              className="rounded-[20px] border border-white/10 bg-white/[0.02] p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20"
            >
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl"
                style={{
                  backgroundColor: `${item.accent}20`,
                  color: item.accent,
                }}
              >
                <Icon icon={item.icon} className="h-5 w-5" />
              </div>
              <h2 className="mt-4 font-display text-[17px] font-semibold text-white">
                {item.title}
              </h2>
              <p className="mt-1.5 text-[13.5px] leading-relaxed text-white/60">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* ---------- Refund & Cancellation Content Card ---------- */}
        <div className="mt-8 sm:mt-10 rounded-[28px] border border-white/10 bg-white/[0.02] p-8 sm:p-14 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <div className="space-y-10 text-white/75 text-[15px] sm:text-[16px] leading-relaxed">
            {POLICY_SECTIONS.map((section, index) => (
              <section
                key={section.title}
                className={`space-y-3 ${index > 0 ? "border-t border-white/10 pt-8" : ""}`}
              >
                <h2 className="font-display text-[22px] sm:text-[24px] font-semibold text-white">
                  {section.title}
                </h2>
                {section.paragraphs.map((paragraph, pIndex) => {
                  if (paragraph.includes("info@techzuno.com")) {
                    const parts = paragraph.split("info@techzuno.com");
                    return (
                      <p key={pIndex}>
                        {parts[0]}
                        <a
                          href="mailto:info@techzuno.com"
                          className="text-[#ff3d8f] font-medium hover:underline"
                        >
                          info@techzuno.com
                        </a>
                        {parts[1]}
                      </p>
                    );
                  }
                  return <p key={pIndex}>{paragraph}</p>;
                })}
                {section.bullets && (
                  <ul className="mt-3 space-y-2.5 pt-1">
                    {section.bullets.map((bullet, bIndex) => (
                      <li key={bIndex} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff3d8f]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}

            {/* Contact */}
            <section className="space-y-3 border-t border-white/10 pt-8">
              <h2 className="font-display text-[22px] sm:text-[24px] font-semibold text-white">
                Contact
              </h2>
              <p>
                Email:{" "}
                <a
                  href="mailto:info@techzuno.com"
                  className="text-[#ff3d8f] font-medium hover:underline"
                >
                  info@techzuno.com
                </a>
              </p>
              <p>
                Techzuno Solution OPC Private Limited, Kolkata, West Bengal
                700039, India. GST No: 19AAMCT8152B1Z5
              </p>
            </section>
          </div>

          {/* ---------- Bottom Support CTA ---------- */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-[18px] bg-white/[0.02] border border-white/10 p-5 sm:p-6">
            <div className="text-center sm:text-left">
              <h3 className="text-[15px] font-semibold text-white">
                Need help with a billing issue?
              </h3>
              <p className="mt-0.5 text-[13px] text-white/60">
                Reach out to our team or review our current membership plans.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/pricing"
                className="inline-flex items-center rounded-full border border-white/20 px-5 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-white/10"
              >
                View Pricing
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#B54AFF] to-[#FF7D94] px-6 py-2.5 text-[13px] font-semibold text-black uppercase tracking-[0.03em] shadow-md transition-transform hover:scale-[1.03]"
              >
                <span>Contact Support</span>
                <Icon icon="solar:arrow-right-bold" className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

