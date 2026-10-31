// "use client";

import Image from "next/image";
import Assets from "@/assets/Assets";
import Glowbtn from "../buttons/Glowbtn";

const STORIES = [
  { src: Assets.Story1, name: "Rishabh" },
  { src: Assets.Story2, name: "Rishabh" },
  { src: Assets.Story3, name: "Rishabh" },
  { src: Assets.Story4, name: "Rishabh" },
  { src: Assets.Story5, name: "Rishabh" },
  { src: Assets.Story6, name: "Rishabh" },
  { src: Assets.Story1, name: "Rishabh" },
  { src: Assets.Story2, name: "Rishabh" },
].filter((story) => story.src);

export default function PopularStories() {
  // Duplicate stories to create a seamless infinite marquee loop
  const duplicatedStories = [...STORIES, ...STORIES, ...STORIES];

  return (
    <section
      id="stories"
      className="relative w-full bg-black pt-12 pb-20 sm:pt-16 sm:pb-28 overflow-hidden"
    >
      {/* ---------- heading ---------- */}
      <div className="px-6 text-center md:px-16 lg:px-24 xl:px-64">
        <div className="flex justify-center mb-4 sm:hidden">
          <Glowbtn text="The Experience" />
        </div>

        <h2 className="mt-5 font-display text-[32px] sm:text-[40px] lg:text-[50px] leading-[1.15] font-semibold tracking-[0.01em] flex flex-col">
          <span className="text-white">
            Popular <span className="text-[#ff3d8f]">Stories</span>
          </span>
        </h2>
        <p className="mt-4 max-w-[90%] mx-auto text-[15px] sm:text-[14px] leading-[1.4] text-white/65 sm:max-w-[420px]">
          How 11 characters from iconic shows react when you chat with them
        </p>
      </div>

      {/* ---------- continuous auto-scrolling marquee rail ---------- */}
      <div className="mask-fade-both mt-10 sm:mt-14 w-full overflow-hidden">
        <div className="flex w-max gap-4 sm:gap-6 animate-marquee">
          {duplicatedStories.map((story, i) => (
            <article
              key={i}
              className="group h-[280px] w-[210px] sm:h-[320px] sm:w-[250px] shrink-0"
            >
              <div className="relative h-full w-full overflow-hidden rounded-[20px] sm:rounded-[14px] border border-white/20 bg-black shadow-[0_15px_40px_rgba(0,0,0,0.8)]">
                <Image
                  src={story.src}
                  alt={`${story.name} — popular story`}
                  fill
                  className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />

                {/* bottom gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black via-black/70 to-transparent" />

                <p className="absolute bottom-5 left-6 font-display text-[19px] sm:text-[22px] font-bold text-white tracking-wide">
                  {story.name}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
