"use client";

import Image from "next/image";
import Assets from "@/assets/Assets";
import SectionBadge from "@/components/ui/SectionBadge";
import { Icon } from "@iconify/react";

export default function PricingHero() {
  const downloadLink =
    process.env.NEXT_PUBLIC_DOWNLOAD_LINK || "https://playkatha.com";

  return (
    <section
      id="hero"
      className="relative sm:h-screen min-h-[750px] w-full overflow-hidden bg-black"
    >
      {/* Desktop background */}
      <div className="absolute hidden sm:block inset-0 z-0">
        <Image
          src={Assets.HeroBgImage}
          alt="Characters from iconic shows on Katha"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Mobile background */}
      <div className="absolute sm:hidden block inset-0 z-0">
        <Image
          src={Assets.HeroBgImageMobile}
          alt="Characters from iconic shows on Katha"
          fill
          priority
          className="object-cover w-full h-full scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,61,143,0.22),transparent_70%)]" />
      </div>

      {/* ---------- Content ---------- */}
      <div className="relative z-10 flex h-full w-full flex-col px-6 md:px-16 lg:px-24 xl:px-64 text-center items-center lg:text-left lg:items-start">
        <div className="flex flex-1 items-center justify-center pt-[110px] pb-[160px] sm:pt-[50px] sm:pb-0">
          <div className="flex flex-col items-center lg:items-start max-w-[560px]">
            <SectionBadge
              tone="pink"
              className="my-4 text-[13px] sm:text-[14px] whitespace-nowrap"
            >
              Simple Pricing, Deeper Stories
            </SectionBadge>

            <h1 className="font-display leading-[1.15] font-extrabold tracking-[0.01em] text-[40px] sm:text-[44px] md:text-[56px] lg:text-[64px] lg:leading-[1.1] mt-4 sm:mt-4">
              <span className="block text-white">Choose a plan that</span>
              <span className="block text-gradient-violet-pink drop-shadow-[0_10px_30px_rgba(217,70,239,0.4)]">
                fits your story.
              </span>
            </h1>

            <p className="mt-4 text-[16px] leading-[1.4] tracking-[0.02em] text-white/90 sm:text-[18px] sm:leading-[1.3] mx-auto lg:mx-0 max-w-[460px]">
              Unlock more characters, deeper conversations, and a truly
              personalized AI storytelling experience.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto sm:mt-10">
              <a
                href="#plans"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#B54AFF] to-[#FF7D94] px-8 py-3 text-[15px] font-semibold tracking-[0.02em] text-white shadow-[0_8px_30px_rgba(217,70,239,0.45)] transition-all hover:scale-[1.03]"
              >
                <span>Start Free</span>
                <span className="text-[17px]">&rarr;</span>
              </a>

              <a
                href="#plans"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-full border border-white/25 bg-white/[0.04] px-7 py-3 text-[15px] font-medium text-white backdrop-blur-md transition-all hover:border-white/50 hover:bg-white/10"
              >
                Compare Plans
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
