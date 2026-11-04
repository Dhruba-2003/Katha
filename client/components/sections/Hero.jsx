"use client";

import Image from "next/image";
import Assets from "@/assets/Assets";
import SectionBadge from "@/components/ui/SectionBadge";

export default function Hero() {
  const downloadLink = process.env.NEXT_PUBLIC_DOWNLOAD_LINK || "https://playkatha.com";

  return (
    <section
      id="hero"
      className="relative sm:h-screen min-h-[750px] w-full overflow-hidden bg-black"
    >
      <div className="absolute hidden sm:block inset-0 z-0">
        <Image
          src={Assets.HeroBgImage}
          alt="Characters from iconic shows on Katha"
          fill
          className="object-cover object-center"
        />
      </div>

      <div className="absolute sm:hidden block inset-0 z-0">
        <Image
          src={Assets.HeroBgImageMobile}
          alt="Characters from iconic shows on Katha"
          fill
          className="object-cover w-full h-full scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(255,61,143,0.22),transparent_70%)]" />
      </div>

      {/* ---------- content ---------- */}
      <div className="relative z-10 flex h-full w-full flex-col px-6 md:px-16 lg:px-24 xl:px-64 text-center items-center lg:text-left lg:items-start">
        <div className="flex flex-1 items-center justify-center pt-[110px] pb-[160px] sm:pt-[50px] sm:pb-0">
          <div className="flex flex-col items-center lg:items-start">
            <SectionBadge
              tone="pink"
              className="my-4 text-[13px] sm:text-[14px] whitespace-nowrap "
            >
              Real People. Infinite Stories.
            </SectionBadge>

            <h1 className="font-display leading-[1.15] font-extrabold tracking-[0.01em] text-[40px] sm:text-[44px] md:text-[56px] lg:text-[64px] lg:leading-[1.1] mt-4 sm:mt-4">
              <span className="block text-white lg:whitespace-nowrap">
                AI characters. <br className="sm:hidden" /> Real drama.
              </span>
              <span className="block text-gradient-violet-pink drop-shadow-[0_10px_30px_rgba(217,70,239,0.4)]">
                You&apos;re the lead.
              </span>
            </h1>

            <p className="mt-4 hidden sm:block text-[16px] leading-[1.35] tracking-[0.02em] text-white/90 sm:text-[18px] sm:leading-[1.25] mx-auto lg:mx-0 max-w-[420px] ">
              TV-style drama meets conversation. Pick a show, meet AI characters who remember you, and shape the story with every message.
            </p>
            
            <p className="mt-4 sm:hidden text-[20px] leading-[1.35] tracking-[0.02em] text-white/90 mx-auto max-w-[420px]">
              TV-style drama meets conversation. Pick a show, play your role, and shape what happens next.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto sm:mt-10">
              <a
                href={downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full sm:w-auto items-center justify-center rounded-full bg-white px-9 py-2.5 text-[18px] sm:text-[14px] font-medium text-black shadow-[0_8px_25px_rgba(255,255,255,0.15)] transition-transform hover:scale-[1.03]"
              >
                Download App
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
