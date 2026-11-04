"use client";

import Image from "next/image";
import Assets from "@/assets/Assets";
import Glowbtn from "../buttons/Glowbtn";

const STORIES = [
  {
    src: Assets.Story7,
    name: "Corporate Circus",
    genre: "Drama",
    userRole: "New Colleague",
    tagline: "Surviving the 9 to 5, one office drama at a time.",
  },
  {
    src: Assets.Story8,
    name: "Sanya — Your Unexpected College Crush",
    genre: "Romance",
    userRole: "Classmate",
    tagline: "She was just a friend until that rainy afternoon...",
  },
  {
    src: Assets.Story9,
    name: "Bunty Sharma — College Ka Mahaa-Locha",
    genre: "Drama",
    userRole: "Best Friend",
    tagline: "Campus fights, broken rules, and pure chaos.",
  },
  {
    src: Assets.Story10,
    name: "Meri Sabse Badi Fan",
    genre: "Romance",
    userRole: "Rising Star",
    tagline: "She knows all your secrets. But who is she?",
  },
  {
    src: Assets.Story11,
    name: "Adrian Moretti — The Devil's Obsession",
    genre: "Dark Romance",
    userRole: "The Intruder",
    tagline: "A dangerous billionaire with secrets in every shadow.",
  },
  {
    src: Assets.Story12,
    name: "Rudra Singh — The Campus King",
    genre: "Drama",
    userRole: "Campus Rival",
    tagline: "Rule the college or bow down to the king.",
  },
].filter((story) => story.src);

export default function PopularStories() {
  // Duplicate stories to create a seamless infinite marquee loop
  const duplicatedStories = [...STORIES, ...STORIES, ...STORIES, ...STORIES];

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
        <p className="mt-4 max-w-[90%] mx-auto text-[15px] sm:text-[14px] leading-[1.4] text-white/65 sm:max-w-[460px]">
          Step into gripping shows across romance, thrillers, fantasy, and mystery. Every choice moves the plot.
        </p>
      </div>

      {/* ---------- continuous auto-scrolling marquee rail ---------- */}
      <div className="mask-fade-both mt-10 sm:mt-14 w-full overflow-hidden py-4">
        <div className="flex w-max gap-4 sm:gap-6 animate-marquee hover:[animation-play-state:paused]">
          {duplicatedStories.map((story, i) => (
            <article
              key={i}
              className="group relative h-[320px] sm:h-[380px] w-[210px] lg:w-[250px] lg:hover:w-[445px] shrink-0 transition-all duration-300 ease-out rounded-[20px] sm:rounded-[24px] overflow-hidden border border-white/20 bg-black shadow-[0_15px_40px_rgba(0,0,0,0.8)] cursor-pointer"
            >
              <div className="relative h-full w-full overflow-hidden">
                <Image
                  src={story.src}
                  alt={story.name}
                  fill
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />

                {/* bottom gradient overlay */}
                <div className="absolute inset-x-0 bottom-0 h-48 sm:h-56 bg-gradient-to-t from-black via-black/85 to-transparent transition-opacity duration-500" />

                <div className="absolute inset-x-3 sm:inset-x-5 bottom-4 sm:bottom-5 flex flex-col items-center text-center gap-1.5 sm:gap-2">
                  <span className="inline-block rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] sm:text-[11px] font-medium tracking-wider text-pink-300 uppercase backdrop-blur-xs border border-white/10">
                    {story.genre}
                  </span>
                  
                  <p className="font-display text-[16px] sm:text-[19px] lg:text-[21px] font-bold text-white tracking-wide transition-all duration-500 line-clamp-2 px-1">
                    {story.name}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
