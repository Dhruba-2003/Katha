import Glowbtn from "@/components/buttons/Glowbtn";
import { Icon } from "@iconify/react";
import Link from "next/link";

export const metadata = {
  title: "About Us — Katha",
  description:
    "Learn more about Katha, Techzuno Solution OPC Private Limited, our company details, and our mission to reinvent interactive drama entertainment.",
};

const STATS = [
  {
    value: "500K+",
    label: "Active Downloads",
    icon: "solar:download-minimalistic-bold",
  },
  { value: "4.5★", label: "App Store Rating", icon: "solar:star-bold" },
  {
    value: "100K+",
    label: "Daily Readers",
    icon: "solar:users-group-rounded-bold",
  },
  {
    value: "24/7",
    label: "Living AI Stories",
    icon: "solar:clapperboard-bold",
  },
];

const COMPANY_DETAILS = [
  { label: "Company", value: "Techzuno Solution OPC Private Limited" },
  { label: "Owner", value: "Bishal Kayal" },
  { label: "Email", value: "info@techzuno.com" },
  { label: "Address", value: "Kolkata, West Bengal 700039, India" },
  { label: "GST No", value: "19AAMCT8152B1Z5" },
  { label: "Brand & Platform", value: "Katha" },
];

const CORE_PILLARS = [
  {
    title: "Cinematic Drama First",
    description:
      "Every show on Katha is designed like a binge-worthy web series — full of cliffhangers, high emotional stakes, and rich subplots where you hold the lead role.",
    icon: "solar:film-strip-bold",
    accent: "#ff3d8f",
  },
  {
    title: "Persistent Character Memory",
    description:
      "Characters remember what you told them three episodes ago. Their feelings toward you evolve based on your trust, betrayal, humor, and choices.",
    icon: "solar:brain-bold",
    accent: "#b14bff",
  },
  {
    title: "Unbounded Agency",
    description:
      "No predefined dialogue wheels. Say whatever you want, how you want. The AI showrunner dynamically steers the plot around your unpredictable reactions.",
    icon: "solar:compass-bold",
    accent: "#ff9f1c",
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* ---------- Ambient background glows ---------- */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[550px] w-[900px] -translate-x-1/2 bg-gradient-to-b from-[#ff3d8f]/20 via-[#b14bff]/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -left-48 h-[550px] w-[550px] bg-[#b14bff]/10 blur-[150px]" />
      <div className="pointer-events-none absolute top-2/3 -right-48 h-[550px] w-[550px] bg-[#ff3d8f]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-[1240px] px-6 md:px-12 lg:px-16">
        {/* ---------- 1. Hero Header ---------- */}
        <div className="text-center">
          <Glowbtn text="About Katha" />

          <h1 className="mt-6 font-display text-[38px] font-bold tracking-[0.01em] text-white sm:text-[52px] lg:text-[62px] leading-[1.12]">
            Where Stories <span className="text-[#ff3d8f]">Come Alive</span>
          </h1>
          <p className="mx-auto mt-5 max-w-[680px] text-[15px] sm:text-[17px] leading-relaxed text-white/70">
            Katha is redefining narrative entertainment. We build immersive,
            interactive drama web series where you play the lead, and living AI
            characters react to your every word.
          </p>
        </div>

        {/* ---------- 2. Stats Grid ---------- */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {STATS.map((stat, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-center rounded-[20px] border border-white/10 bg-white/[0.02] p-5 sm:p-6 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:scale-[1.02]"
            >
              <Icon icon={stat.icon} className="h-6 w-6 text-[#ff3d8f]" />
              <span className="mt-2 font-display text-[26px] sm:text-[32px] font-bold text-white">
                {stat.value}
              </span>
              <span className="text-[12px] sm:text-[13px] text-white/60">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        {/* ---------- 3. Vision & Mission Cards ---------- */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-[28px] border border-white/10 bg-linear-to-b from-[#ff3d8f]/10 via-white/[0.02] to-transparent p-8 sm:p-10 backdrop-blur-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff3d8f]/20 text-[#ff3d8f]">
              <Icon icon="solar:telescope-bold" className="h-6 w-6" />
            </div>
            <h2 className="mt-6 font-display text-[24px] sm:text-[28px] font-bold text-white">
              Our Vision
            </h2>
            <p className="mt-3 text-[15px] sm:text-[16px] leading-relaxed text-white/75">
              To pioneer the future of storytelling where fiction is no longer
              passive. We envision a world where audiences are active
              participants in living, breathing narratives — forming genuine
              emotional attachments to characters who adapt, remember, and
              surprise them.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-linear-to-b from-[#b14bff]/10 via-white/[0.02] to-transparent p-8 sm:p-10 backdrop-blur-xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#b14bff]/20 text-[#b14bff]">
              <Icon icon="solar:rocket-bold" className="h-6 w-6" />
            </div>
            <h2 className="mt-6 font-display text-[24px] sm:text-[28px] font-bold text-white">
              Our Mission
            </h2>
            <p className="mt-3 text-[15px] sm:text-[16px] leading-relaxed text-white/75">
              Empowering top writers, creative artists, and AI engineers to
              craft gripping episodic series with production-grade dialogue,
              nuanced emotions, and seamless conversational agency on mobile
              devices across the globe.
            </p>
          </div>
        </div>

        {/* ---------- 4. Core Pillars ---------- */}
        <div className="mt-14 sm:mt-20">
          <div className="text-center">
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold tracking-wider text-pink-300 uppercase">
              The Katha Standard
            </span>
            <h2 className="mt-3 font-display text-[28px] sm:text-[36px] font-bold text-white">
              Why We Are Different
            </h2>
          </div>

          <div className="mt-8 sm:mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {CORE_PILLARS.map((pillar, i) => (
              <div
                key={i}
                className="rounded-[24px] border border-white/10 bg-white/[0.02] p-7 sm:p-8 backdrop-blur-xl transition-all duration-300 hover:border-white/25 hover:scale-[1.02]"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl text-white"
                  style={{
                    backgroundColor: `${pillar.accent}25`,
                    color: pillar.accent,
                  }}
                >
                  <Icon icon={pillar.icon} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-[20px] font-semibold text-white">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-[14px] sm:text-[15px] leading-relaxed text-white/65">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- 5. Company Details Card ---------- */}
        <div className="mt-16 sm:mt-24 rounded-[28px] border border-white/10 bg-white/[0.02] p-8 sm:p-12 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-6">
            <div>
              <span className="text-[12px] font-semibold uppercase tracking-wider text-[#ff3d8f]">
                Corporate Overview
              </span>
              <h2 className="mt-1 font-display text-[24px] sm:text-[30px] font-bold text-white">
                Company Details
              </h2>
            </div>
            <p className="text-[13px] sm:text-[14px] text-white/50 max-w-[380px]">
              Katha is developed, operated, and maintained by Techzuno Solution OPC Private Limited.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-y-4 gap-x-8 sm:grid-cols-2 lg:grid-cols-2">
            {COMPANY_DETAILS.map((detail, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-b border-white/5 py-3 gap-1"
              >
                <span className="text-[13px] sm:text-[14px] text-white/50 font-medium">
                  {detail.label}
                </span>
                <span className="text-[14px] sm:text-[15px] text-white font-semibold break-all sm:break-normal">
                  {detail.value}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-[18px] bg-white/[0.02] border border-white/10 p-5 sm:p-6">
            <div className="text-center sm:text-left">
              <h4 className="text-[15px] font-semibold text-white">
                Have a business or press inquiry?
              </h4>
              <p className="text-[13px] text-white/60">
                Connect directly with our corporate team.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-[#B54AFF] to-[#FF7D94] px-6 py-2.5 text-[13px] font-semibold text-black uppercase tracking-[0.03em] shadow-md transition-transform hover:scale-[1.03]"
            >
              Get In Touch
              <Icon icon="solar:arrow-right-bold" className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
