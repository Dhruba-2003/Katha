import Image from "next/image";
import Assets from "@/assets/Assets";
import SectionBadge from "@/components/ui/SectionBadge";
import StoreBadges from "@/components/ui/StoreBadges";
import { Sparkle } from "../icons/Icons";
import Glowbtn from "../buttons/Glowbtn";

export default function ShowsSection() {
  return (
    <section
      id="shows"
      className="relative w-full overflow-hidden bg-black pt-6 sm:pt-0"
    >
      <div className="absolute hidden sm:block top-10 left-0 h-full w-full pointer-events-none">
        <Image
          src={Assets.ExperienceBg}
          alt=""
          className="h-full w-full object-cover lg:object-contain"
        />
      </div>
      <div className="absolute sm:hidden top-12 left-0 h-full w-full pointer-events-none">
        <Image
          src={Assets.DownloadBgMobile}
          alt=""
          className="h-full w-full object-cover lg:object-contain"
        />
      </div>

      {/* ---------- content ---------- */}
      <div className="relative z-10 mx-auto mt-4 sm:mt-10 flex w-full flex-col items-center gap-8 px-5 py-12 md:px-16 lg:mt-14 lg:flex-row lg:items-center lg:gap-0 lg:px-24 lg:py-0 xl:px-64">
        {/* ---------- copy ---------- */}
        <div className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left">
          <Glowbtn text="The Experience" />

          <h2 className="mt-5 font-display text-[36px] leading-[1.15] font-semibold tracking-[0.01em] sm:mt-8 sm:text-[40px] lg:text-[50px] flex flex-col">
            <span className="block text-white lg:whitespace-nowrap">
              Shows powered by
            </span>
            <span className="block text-[#E12E65] lg:whitespace-nowrap">
              AI. Driven by you.
            </span>
          </h2>

          <p className="mt-5 sm:mt-3 max-w-[80%] text-[18px] leading-[1.2] text-white/65 sm:max-w-[420px] sm:text-[14px] lg:max-w-[100%]">
            Each show puts you in a role, surrounds you with AI characters
            <span className="hidden sm:block">
              , and lets the story unfold through conversation.
            </span>
          </p>

          <StoreBadges className="mt-10 sm:mt-7 justify-center lg:justify-start" />
        </div>

        {/* ---------- app mockup ---------- */}
        <div className="relative h-full w-full shrink-0 sm:h-[420px] lg:h-[630px] lg:w-auto flex items-center justify-center">
          <Image
            src={Assets.ExperienceRightMockup}
            alt="Katha app showing characters you can chat with"
            className="h-full w-full object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
