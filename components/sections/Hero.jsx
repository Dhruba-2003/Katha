"use client";

import Image from "next/image";
import Assets from "@/assets/Assets";
import SectionBadge from "@/components/ui/SectionBadge";

export default function Hero() {
  const downloadLink = process.env.NEXT_PUBLIC_DOWNLOAD_LINK || "https://heykatha.com";

  return (
    <section
      id="hero"
      className="relative sm:h-screen min-h-[750px] w-full overflow-hidden bg-black"
    >
      <div className="absolute hidden sm:block inset-0 z-0">
        <Image
          src={Assets.HeroBgImage}
          alt="Characters from iconic shows on Katha"
          
          className="h-full"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(181,74,255,0.18),transparent_65%)]" /> */}
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
      <div className="relative z-10 flex h-full w-full flex-col px-6 md:px-16 lg:px-24 xl:px-64 text-center items-center lg:text-center lg:items-center">
        <div className="flex flex-1 flex-col items-center justify-center pt-[110px] pb-[160px] sm:pt-[10px] sm:pb-0 w-full max-w-[1000px] mx-auto">
          
          <SectionBadge
            tone="pink"
            className="my-4 text-[13px] sm:text-[14px] whitespace-nowrap shadow-[0_4px_25px_rgba(255,61,143,0.35)]"
          >
            Experience stories just by chatting
          </SectionBadge>

            <h1 className="font-display text-[40px] leading-[1.12] font-extrabold tracking-[0.01em] sm:text-[44px] md:text-[56px] lg:text-[64px] lg:leading-[1.15]">
              <span className="block text-white lg:whitespace-nowrap">
                AI characters. <br className="block sm:hidden" /> Real drama.
              </span>
              <span className="block text-gradient-violet-pink drop-shadow-[0_10px_30px_rgba(217,70,239,0.4)]">
                You&apos;re{" "}
                <span className="text-[#ff3d8f] sm:text-inherit">
                  the lead.
                </span>
              </span>
            </h1>

            <p className="mt-4 text-[15px] leading-[1.45] tracking-[0.02em] text-white/85 sm:text-[18px] sm:leading-[1.25] mx-auto lg:mx-0 max-w-[300px] sm:max-w-none">
              Pick a show, meet the characters, and shape what happens next.
              <br className="hidden sm:inline" /> One message at a time.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 w-full sm:w-auto sm:mt-12">
              <a
                href={downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full max-w-[320px] sm:w-auto items-center justify-center rounded-full bg-linear-to-r from-[#B54AFF] to-[#FF7D94] px-10 py-3 text-[15px] font-bold tracking-[0.05em] text-black uppercase shadow-[0_10px_35px_rgba(255,61,143,0.5)] transition-transform hover:scale-[1.03]"
              >
                JOIN US
              </a>
              <a
                href={downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full max-w-[320px] sm:w-auto items-center justify-center rounded-full bg-white/10 text-white font-bold border border-white/25 px-9 py-3 text-[15px] tracking-[0.05em] shadow-[0_10px_35px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-transform hover:scale-[1.03]"
              >
                Download App
              </a>
            </div>
          </div>
        </div>
    </section>
  );
}
