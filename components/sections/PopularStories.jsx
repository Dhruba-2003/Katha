"use client";

import { useState } from "react";
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
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
      <div 
        onMouseEnter={() => setHoveredIndex("rail")}
        onMouseLeave={() => setHoveredIndex(null)}
        className="mask-fade-both mt-10 sm:mt-14 w-full overflow-hidden py-4"
      >
        <div 
          className={`flex w-max gap-4 sm:gap-6 transition-all duration-300 ease-out ${hoveredIndex !== null ? "[animation-play-state:paused]" : "animate-marquee"}`}
        >
          {duplicatedStories.map((story, i) => {
            const isHovered = hoveredIndex === i;
            return (
              <article
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex("rail")}
                className={`group relative h-[320px] sm:h-[380px] shrink-0 transition-all duration-300 ease-out rounded-[20px] sm:rounded-[24px] overflow-hidden border border-white/20 bg-black shadow-[0_15px_40px_rgba(0,0,0,0.8)] cursor-pointer ${
                  isHovered ? "w-[360px] sm:w-[445px] z-20 scale-[1.02]" : "w-[210px] sm:w-[250px] z-10"
                }`}
              >
                <div className="relative h-full w-full overflow-hidden">
                  <Image
                    src={story.src}
                    alt={`${story.name} — popular story`}
                    fill
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                  />

                  {/* bottom gradient overlay */}
                  <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-500" />

                  <div className="absolute inset-x-6 bottom-6 flex flex-col items-center text-center gap-3">
                    <p className="font-display text-[18px] sm:text-[22px] font-bold text-white tracking-wide truncate transition-all duration-500">
                      {story.name}: Insaaniyat Gaayab?
                    </p>
                    
                    {/* Action buttons only visible on hover */}
                    <div 
                      className={`flex items-center justify-center gap-2.5 transition-all duration-500 ease-out overflow-hidden ${
                        isHovered ? "opacity-100 max-h-[60px] translate-y-0" : "opacity-0 max-h-0 translate-y-3 pointer-events-none"
                      }`}
                    >
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-[11px] font-medium text-white backdrop-blur-md border border-white/20 whitespace-nowrap shadow-lg">
                        <span className="text-[12px]">🎭</span> Talk to : Rishab
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3.5 py-1.5 text-[11px] font-medium text-white backdrop-blur-md border border-white/20 whitespace-nowrap shadow-lg">
                        <span className="text-[12px]">👤</span> You are : Robot
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
