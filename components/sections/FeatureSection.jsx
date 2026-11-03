import Image from "next/image";
import Assets from "@/assets/Assets";
import Glowbtn from "../buttons/Glowbtn";

const TAGS = [
  "Romance", "Thriller", "Mystery", "Fantasy", "Drama", "Crime", "Suspense",
  "Horror", "Historical", "Action", "Sci-Fi", "Comedy", "Mythology", "Adventure",
  "Romance", "Thriller", "Mystery", "Fantasy", "Drama", "Crime", "Suspense",
  "Horror", "Historical", "Action", "Sci-Fi", "Comedy", "Mythology", "Adventure",
];

const MEMORY_BUBBLES = [
  "User's favorite color is midnight blue",
  "Met during the autumn festival last year",
  "Prefers to be called by their nickname",
  "Always orders black coffee, no sugar",
];

const cardShell =
  "relative overflow-hidden rounded-[24px] sm:rounded-[26px] border border-white/20 bg-white/[0.035] px-4 py-8 md:px-4 md:py-6";

function FeatureBlock({
  title = "They remember you:",
  description = "Voice, character profiles, and interactive features that feel authentic and lively.",
  className = "",
}) {
  return (
    <div className={className}>
      <h3 className="text-[24px] sm:text-[16px] font-semibold text-white">
        {title}
      </h3>
      <p className="mt-2.5 sm:mt-1.5 text-[18px] leading-[1.4] tracking-[0.01em] text-white/90 sm:text-[13px] sm:leading-[1.1] sm:mx-auto lg:mx-0 max-w-[85%] sm:max-w-[70%]">
        {description}
      </p>
    </div>
  );
}

export default function FeatureSection() {
  return (
    <section
      id="feature"
      className="relative w-full overflow-hidden bg-black pb-16 sm:pb-28"
    >
      {/* ---------- heading ---------- */}
      <div className="relative px-5 text-center md:px-16 lg:px-24 xl:px-40 2xl:px-60">
        <Glowbtn text="The Experience" />

        <h2 className="mt-5 font-display text-[36px] leading-[1.15] font-semibold tracking-[0.01em] sm:mt-8 sm:text-[40px] lg:text-[50px] flex flex-col">
          <span className="lg:block">
            Every feature is designed to
            <br className="hidden sm:block" /> make you forget you&apos;re{" "}
            <span className="text-katha-pink">
              chatting
              <br className="hidden sm:block" /> with AI
            </span>
          </span>
        </h2>
      </div>
      <div className="h-full w-full relative mt-6 sm:mt-8">
        <div className="absolute hidden sm:block top-0 left-0 w-full h-auto z-0 pointer-events-none">
          <Image
            src={Assets.FeatureBg}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <div className="absolute sm:hidden top-0 left-0 w-full h-full z-0 pointer-events-none">
          <Image
            src={Assets.ExperienceBgMobile}
            alt=""
            className="object-cover w-full h-auto"
          />
        </div>
        {/* ---------- feature panel ---------- */}
        <div className="relative pt-14 sm:pt-14 px-4 sm:px-6 md:px-16 lg:px-24 xl:px-40 2xl:px-60 z-10">
          <div className="relative p-0 sm:p-5">
            {/* 5-col grid: row1 = 3+2, row2 = 2+3 (mirrored on desktop, vertical stack on mobile) */}
            <div className="relative flex flex-col gap-6 lg:grid lg:grid-cols-5">
              {/* ---------- card 1 : memory (wide, top-left) ---------- */}
              <div className={`${cardShell} lg:col-span-3`}>
                <div className="absolute inset-0 pointer-events-none z-0">
                  <Image
                    src={Assets.CardGlowBg}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                {/* Desktop 3-column layout (untouched) */}
                <div className="relative z-10 hidden lg:flex items-start gap-3">
                  {/* phone screenshot */}
                  <div className=" h-full flex flex-col w-full ">
                    <div className=" h-full flex w-full gap-6">
                      <div className="flex flex-col gap-6 min-w-1/2 sm:min-w-[40%]">
                        <div className="w-full shrink-0 overflow-hidden rounded-[12px] border border-white/10 ">
                          <Image
                            src={Assets.Feature1}
                            alt="Memory keeps the conversation going"
                            className="block h-auto w-full"
                          />
                        </div>
                      </div>

                      {/* lock + description */}
                      <div className="flex-1 ">
                        <Image
                          src={Assets.Feature2}
                          alt=""
                          className="block h-13 w-auto"
                        />
                        <p className="mt-3.5 text-[14px] leading-[1.4] tracking-[0.02em] text-white/90 sm:text-[13px] sm:leading-[1.02] mx-auto lg:mx-0">
                          Structured memory ensures your conversations build
                          background, connections, and continuity as you
                          converse.
                        </p>
                      </div>
                    </div>
                    <div className="mt-3.5">
                      <FeatureBlock
                        title="Characters remember you:"
                        description="Your name, choices, and secrets are remembered across every episode and conversation."
                        className="mt-4 sm:mt-3.5"
                      />
                    </div>
                  </div>

                  {/* memory bubbles */}
                  <div className="w-[34%] shrink-0 space-y-2">
                    {MEMORY_BUBBLES.map((bubble, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-white/[0.08] bg-white/[0.09] px-3 py-2 text-[10.5px] leading-[1.5] text-white/55"
                      >
                        {bubble}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile stacked layout matching reference */}
                <div className="relative z-10 flex flex-col gap-4 lg:hidden">
                  <div className="flex items-start gap-3.5">
                    <div className="w-[45%] shrink-0 overflow-hidden  shadow-lg">
                      <Image
                        src={Assets.Feature1}
                        alt="Memory keeps the conversation going"
                        width={460}
                        height={300}
                        className="block h-auto w-full"
                      />
                    </div>
                    <div className="flex-1 ">
                      <Image
                        src={Assets.Feature2}
                        alt=""
                        className="block h-18 w-auto"
                      />
                      <p className="mt-1 text-[14px] leading-[1.1] tracking-[0.02em] text-white/90 sm:text-[13px] sm:leading-[1.02] mx-auto lg:mx-0">
                        Structured memory ensures your conversations build
                        background <span className="hidden sm:block">, connections, and continuity as you converse.</span>
                      </p>
                    </div>
                  </div>

                  <div className="space-y-2 mt-2 w-full max-w-[65%] mx-auto ">
                    {MEMORY_BUBBLES.map((bubble, i) => (
                      <div
                        key={i}
                        className="rounded-xl border border-white/[0.08] bg-white/[0.06] px-3.5 py-1.5 sm:py-2.5 text-[12px] leading-[1.4] text-white/65"
                      >
                        {bubble}
                      </div>
                    ))}
                  </div>

                  <FeatureBlock
                    title="Characters remember you:"
                    description="Your name, choices, and secrets are remembered across every episode."
                    className="mt-8"
                  />
                </div>
              </div>

              {/* ---------- card 2 : characters (narrow, top-right) ---------- */}
              <div className={`${cardShell} px-6! lg:col-span-2`}>
                <div className="absolute inset-0 pointer-events-none z-0">
                  <Image
                    src={Assets.CardGlowBg}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative z-10">
                  <FeatureBlock
                    title="Unique personalities & voices:"
                    description="Every character has their own tone, speech style, and secrets that react to how you speak."
                  />

                  <div className="relative mt-12 sm:mt-4 overflow-hidden rounded-[12px] flex items-center justify-center p-0 sm:p-3">
                    <Image
                      src={Assets.Feature3}
                      alt="Character roster Katha remembers"
                      className="block h-full sm:h-[130px] sm:w-auto"
                    />
                  </div>
                </div>
              </div>

              {/* ---------- card 3 : tech buddy (narrow, bottom-left) ---------- */}
              <div className={`${cardShell} lg:col-span-2`}>
                <div className="absolute inset-0 pointer-events-none z-0">
                  <Image
                    src={Assets.CardGlowBg}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="relative z-10">
                  <div className="relative overflow-hidden rounded-[12px]">
                    <Image
                      src={Assets.Feature4}
                      alt="Sara — Tech Buddy companion"
                      className="block h-auto w-full"
                    />
                  </div>

                  <FeatureBlock
                    title="You're in the lead role:"
                    description="Your messages move the plot forward. No two stories play out the same way."
                    className="mt-12 sm:mt-3.5"
                  />
                </div>
              </div>

              {/* ---------- card 4 : genres (wide, bottom-right) ---------- */}
              <div className={`${cardShell} lg:col-span-3 flex flex-col justify-between`}>
                <div className="absolute inset-0 pointer-events-none z-0">
                  <Image
                    src={Assets.CardGlowBg}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="relative z-10 flex flex-wrap gap-2 sm:gap-2 justify-start lg:grid lg:grid-cols-7">
                  {TAGS.map((tag, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.08] px-2 py-1.5 sm:px-2.5 sm:py-1.5 text-[12.5px] sm:text-[12px] xl:text-[13px] font-medium text-white/90 shadow-sm transition-all hover:border-white/30 hover:bg-white/20 text-center select-none"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <FeatureBlock
                  title="Infinite shows & genres:"
                  description="From passionate romance to gripping thrillers and mysteries, with new shows added regularly."
                  className="relative z-10 mt-8 sm:mt-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
