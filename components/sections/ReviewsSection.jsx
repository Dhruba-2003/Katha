"use client";

import { useState } from "react";
import Image from "next/image";
import Assets from "@/assets/Assets";
import SectionBadge from "@/components/ui/SectionBadge";
import Glowbtn from "../buttons/Glowbtn";
import { Icon } from "@iconify/react";

const REVIEWS = [
  {
    name: "Ananya S.",
    date: "14 Feb 2026",
    text: "Felt like I was literally inside a high-budget thriller web series. Kabir actually remembered what I said three episodes ago. The cliffhangers are insane!",
  },
  {
    name: "Vikram M.",
    date: "18 Feb 2026",
    text: "Not your typical boring chatbot. It's like a drama series where you decide who survives the climax. Every reply really changes the story.",
  },
  {
    name: "Pooja R.",
    date: "22 Feb 2026",
    text: "The romance storyline had me hooked from the first message. Kanya's dialogue and voice feel so authentic and playful.",
  },
  {
    name: "Zayn K.",
    date: "28 Feb 2026",
    text: "Never seen storytelling like this. The plot completely branched when I refused to cooperate with the detective. 10/10 drama!",
  },
  {
    name: "Divya N.",
    date: "03 Mar 2026",
    text: "Binge-playing through the mystery show every night. Love how each character has a completely distinct attitude and tone. Truly cinematic.",
  },
];

export default function ReviewsSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const duplicatedReviews = [...REVIEWS, ...REVIEWS, ...REVIEWS, ...REVIEWS];

  return (
    <section
      id="reviews"
      className="relative w-full bg-black pb-28 overflow-hidden"
    >
      <div className="absolute hidden sm:block top-0 left-0 w-full h-full pointer-events-none">
        <Image src={Assets.ReviewsBg} alt="" className="w-full h-full object-cover" />
      </div>
      <div className="absolute sm:hidden top-0 left-0 w-full h-full pointer-events-none">
        <Image src={Assets.ReviewsBgMobile} alt="" className="w-full h-auto object-cover" />
      </div>

      <div className="relative mt-12 sm:mt-10 px-5 text-center md:px-16 lg:px-24 xl:px-40 2xl:px-60">
        <Glowbtn text="Loved by 100k-users worldwide" classname="text-black" />

        <div className="mt-10 sm:mt-14 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 ">
          <div className="flex justify-between sm:justify-center items-center gap-4 sm:gap-10 ">
            <div className="h-[160px] sm:h-[150px] w-auto ">
              <Image
                src={Assets.ReviewMockupLeft}
                alt="Review Mockup Left"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1.5">
                <Icon icon="solar:star-bold" className="h-9 w-9 sm:h-8 sm:w-8 text-[#ff9f1c]" />
                <span className="font-display text-[30px] sm:text-[26px] text-white">
                  4.5
                </span>
              </div>
              <p className="mt-0 text-[14px] sm:text-[13px] text-white/90">
                Appstore rating
              </p>
            </div>
            <div className="h-[160px] sm:h-[150px] w-auto ">
              <Image
                src={Assets.ReviewMockupRight}
                alt="Review Mockup Right"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>

          <div className="flex justify-between sm:justify-center items-center gap-4 sm:gap-12 ">
            <div className="h-[160px] sm:h-[150px] w-auto">
              <Image
                src={Assets.ReviewMockupLeft}
                alt="Review Mockup Left"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1.5">
                <Icon icon="logos:google-play-icon" className="h-8 w-8 sm:h-7 sm:w-7" />
                <span className="font-display text-[30px] sm:text-[26px] text-white">
                  500K+
                </span>
              </div>
              <p className="mt-0 text-[14px] sm:text-[13px] text-white/90">
                Downloads
              </p>
            </div>
            <div className="h-[160px] sm:h-[150px] w-auto">
              <Image
                src={Assets.ReviewMockupRight}
                alt="Review Mockup Right"
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* ---------- continuous auto-scrolling marquee rail for reviews ---------- */}
      <div 
        className="mask-fade-both mt-16 sm:mt-14 w-full overflow-hidden py-4"
      >
        <div 
          className="flex w-max gap-4 sm:gap-6 animate-marquee hover:[animation-play-state:paused]"
        >
          {duplicatedReviews.map((review, i) => (
            <article
              key={i}
              className="w-[320px] sm:w-[340px] shrink-0 rounded-[16px] border border-white/10 bg-linear-to-b from-[#351426]/75 via-[#21151c]/70 to-[#171617]/80 backdrop-blur-xl py-5 px-6 sm:py-6 sm:px-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 ease-out hover:scale-[1.03] hover:border-white/30 cursor-pointer"
            >
              <div className="min-w-0">
                <p className="truncate text-[20px] sm:text-[18px] font-medium text-white">
                  {review.name}
                </p>
                <div className="mt-1 flex items-center gap-4 sm:gap-2">
                  <span className="flex items-center gap-[2px]">
                    {Array.from({ length: 5 }, (_, s) => (
                      <Icon key={s} icon="solar:star-bold" className="h-[12px] w-[12px] sm:h-[10px] sm:w-[10px] text-[#ffc107]" />
                    ))}
                  </span>
                  <span className="text-[11px] sm:text-[9.5px] text-white/40">
                    {review.date}
                  </span>
                </div>
              </div>

              <p className="mt-5 sm:mt-4 text-[17.5px] sm:text-[12.5px] leading-[1.1] sm:leading-[1.3] text-white/70">
                {review.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
