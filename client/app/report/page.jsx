import Link from "next/link";
import { Icon } from "@iconify/react";
import ReportSubmissionForm from "@/components/sections/ReportSubmissionForm";

export const metadata = {
  title: "Report an Issue or Safety Concern — Katha",
  description:
    "Help us keep Katha safe for everyone. Report inappropriate content, abusive behavior, character issues, bugs, or safety concerns.",
  openGraph: {
    title: "Report an Issue or Safety Concern — Katha",
    description:
      "Guidelines and direct reporting channels to keep Katha a safe, welcoming, and vibrant storytelling community.",
    type: "website",
    locale: "en_US",
    siteName: "Katha",
  },
};

const REPORTABLE_ITEMS = [
  "Harassment, hate speech, or bullying",
  "Explicit, illegal, or violent content",
  "Impersonation, scams, or fraudulent accounts",
  "Spam or misleading promotions",
  "Intellectual property infringement",
  "Bugs or technical issues with a story or character",
];

export default function ReportPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* ---------- Ambient background glows ---------- */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[500px] w-[900px] -translate-x-1/2 bg-gradient-to-b from-[#ff3d8f]/18 via-[#b14bff]/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-48 h-[500px] w-[500px] bg-[#ff3d8f]/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-1/4 -left-48 h-[500px] w-[500px] bg-[#b14bff]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-[960px] px-6 md:px-12 lg:px-16">
        {/* ---------- Page Header ---------- */}
        <div className="text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ff3d8f]/30 bg-[#ff3d8f]/10 px-3.5 py-1 text-[11px] sm:text-[12px] font-semibold tracking-wider text-[#ff3d8f] uppercase shadow-[0_0_20px_rgba(255,61,143,0.2)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff3d8f] animate-pulse" />
            <span>SAFETY &amp; SUPPORT</span>
          </div>

          {/* Heading */}
          <h1 className="mt-5 font-display text-[38px] font-bold tracking-[0.01em] text-white sm:text-[50px] lg:text-[58px] leading-[1.12]">
            Katha <span className="text-[#ff3d8f]">Report</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-[16px] sm:text-[18px] font-medium text-white/90">
            Help us keep Katha safe for everyone.
          </p>

          {/* Intro Paragraph */}
          <p className="mt-3 max-w-[760px] text-[14.5px] sm:text-[15.5px] leading-relaxed text-white/65">
            If you come across content, behavior, or a character that violates
            our community guidelines, please report it. Our team reviews every
            report and takes appropriate action to keep Katha a safe and
            welcoming space.
          </p>

          {/* Back to Home Link */}
          <div className="mt-5">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-[13.5px] font-medium text-[#ff3d8f] transition-all hover:text-[#ff7ab0]"
            >
              <span className="transition-transform duration-200 group-hover:-translate-x-1">
                &larr;
              </span>
              <span>Back to Home</span>
            </Link>
          </div>
        </div>

        {/* ---------- Content Cards (1 to 5) ---------- */}
        <div className="mt-10 sm:mt-12 space-y-6">
          {/* Card 1: What You Can Report */}
          <section className="rounded-[22px] border border-white/10 bg-white/[0.02] p-6 sm:p-9 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.03]">
            <h2 className="font-display text-[20px] sm:text-[23px] font-bold text-white tracking-tight">
              1. What You Can Report
            </h2>
            <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-white/70">
              You can report any content or behavior on Katha that you believe
              is inappropriate or harmful, including:
            </p>
            <ul className="mt-4 space-y-2.5">
              {REPORTABLE_ITEMS.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[14px] sm:text-[15px] text-white/75"
                >
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ff3d8f] shadow-[0_0_8px_#ff3d8f]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Card 2: How to Report */}
          <section className="rounded-[22px] border border-white/10 bg-white/[0.02] p-6 sm:p-9 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.03]">
            <h2 className="font-display text-[20px] sm:text-[23px] font-bold text-white tracking-tight">
              2. How to Report
            </h2>
            <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-white/70">
              To submit a report, open the story, character, or profile you want
              to report and use the report option. Describe the issue clearly
              and submit it. Our support team reviews reports within 24–48
              hours.
            </p>
          </section>

          {/* Card 3: What Happens After a Report */}
          <section className="rounded-[22px] border border-white/10 bg-white/[0.02] p-6 sm:p-9 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.03]">
            <h2 className="font-display text-[20px] sm:text-[23px] font-bold text-white tracking-tight">
              3. What Happens After a Report
            </h2>
            <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-white/70">
              Once a report is submitted, our moderation team reviews it and may
              take action such as issuing a warning, removing content, or
              suspending an account. You may be notified of the outcome where
              appropriate.
            </p>
          </section>

          {/* Card 4: False Reports */}
          <section className="rounded-[22px] border border-white/10 bg-white/[0.02] p-6 sm:p-9 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.03]">
            <h2 className="font-display text-[20px] sm:text-[23px] font-bold text-white tracking-tight">
              4. False Reports
            </h2>
            <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-white/70">
              Submitting knowingly false or abusive reports may result in action
              being taken against your own account, including suspension or
              termination.
            </p>
          </section>

          {/* Card 5: Contact Us */}
          <section className="rounded-[22px] border border-white/10 bg-white/[0.02] p-6 sm:p-9 backdrop-blur-xl shadow-[0_15px_40px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-white/20 hover:bg-white/[0.03]">
            <h2 className="font-display text-[20px] sm:text-[23px] font-bold text-white tracking-tight">
              5. Contact Us
            </h2>
            <p className="mt-3 text-[14.5px] sm:text-[15.5px] leading-relaxed text-white/70">
              For urgent safety concerns or questions about a report, please
              reach out to us at{" "}
              <a
                href="mailto:info@techzuno.com"
                className="font-medium text-[#ff3d8f] underline hover:text-[#ff7ab0] transition-colors"
              >
                info@techzuno.com
              </a>
              .
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a
                href="mailto:info@techzuno.com?subject=Urgent%20Safety%20Concern%20-%20Katha"
                className="inline-flex items-center gap-2 rounded-full border border-[#ff3d8f]/30 bg-[#ff3d8f]/10 px-4 py-2 text-[13px] font-semibold text-[#ff3d8f] transition-all hover:bg-[#ff3d8f]/20"
              >
                <Icon icon="solar:letter-bold" className="h-4 w-4" />
                <span>Email Trust &amp; Safety Desk</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[13px] font-semibold text-white/80 transition-colors hover:bg-white/10"
              >
                <Icon icon="solar:chat-line-bold" className="h-4 w-4" />
                <span>General Contact</span>
              </Link>
            </div>
          </section>
        </div>

        {/* ---------- Interactive Report Form ---------- */}
        <ReportSubmissionForm />
      </div>
    </main>
  );
}
