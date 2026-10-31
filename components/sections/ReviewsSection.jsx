import Image from "next/image";
import Assets from "@/assets/Assets";
import SectionBadge from "@/components/ui/SectionBadge";
import { PlayStore, Sparkle, Star } from "@/components/icons/Icons";
import Glowbtn from "../buttons/Glowbtn";

const REVIEWS = [
  {
    name: "Fatima",
    date: "02 Jan 2026",
    text: "This app has become a part of my daily routine. The characters are so engaging and the UI is incredibly smooth. Highly recommended!",
  },
  {
    name: "Fatima",
    date: "02 Jan 2026",
    text: "This app has become a part of my daily routine. The characters are so engaging and the UI is incredibly smooth. Highly recommended!",
  },
  {
    name: "Fatima",
    date: "02 Jan 2026",
    text: "This app has become a part of my daily routine. The characters are so engaging and the UI is incredibly smooth. Highly recommended!",
  },
  {
    name: "Fatima",
    date: "02 Jan 2026",
    text: "This app has become a part of my daily routine. The characters are so engaging and the UI is incredibly smooth. Highly recommended!",
  },
  {
    name: "Fatima",
    date: "02 Jan 2026",
    text: "This app has become a part of my daily routine. The characters are so engaging and the UI is incredibly smooth. Highly recommended!",
  },
];

export default function ReviewsSection() {
  return (
    <section
      id="reviews"
      className="relative w-full bg-black pb-28 overflow-hidden"
    >
      <div className="absolute hidden sm:block top-0 left-0 w-full h-full">
        <Image src={Assets.ReviewsBg} alt="" className="" />
      </div>
      <div className="absolute sm:hidden top-0 left-0 w-full h-full">
        <Image src={Assets.ReviewsBgMobile} alt="" className="w-full h-auto" />
      </div>

      <div className="relative mt-12 sm:mt-10 px-5 text-center md:px-16 lg:px-24 xl:px-40 2xl:px-60">
        <Glowbtn text="Loved by 100k-users worldwide" classname="text-black" />

        <div className="mt-10 sm:mt-14 flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20 ">
          <div className="flex w- justify-between sm:justify-center items-center gap-4 sm:gap-10 ">
            <div className="h-[160px] sm:h-[150px] w-auto ">
              <Image
                src={Assets.ReviewMockupLeft}
                alt="Review Mockup Left"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1.5">
                <Star className="h-9 w-9 sm:h-8 sm:w-8 text-[#ff9f1c]" />
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

          <div className="flex w- justify-between sm:justify-center items-center gap-4 sm:gap-12 ">
            <div className="h-[160px] sm:h-[150px] w-auto">
              <Image
                src={Assets.ReviewMockupLeft}
                alt="Review Mockup Left"
                className="h-full w-auto object-contain"
              />
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-center gap-1.5">
                <PlayStore className="h-9 w-9 sm:h-8 sm:w-8 text-[#ff9f1c]" />
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

      {/* ---------- review rail with mobile swipe ---------- */}
      <div className="mask-fade-both mt-16 sm:mt-14 w-full overflow-x-auto sm:overflow-hidden no-scrollbar ">
        <div className="flex w-max gap-4 sm:gap-5 px-6 sm:px-12 snap-x snap-mandatory">
          {REVIEWS.map((review, i) => (
            <article
              key={i}
              className="w-[320px] sm:w-[320px] shrink-0 rounded-[16px] border border-white/10 bg-linear-to-b from-[#351426]/75 via-[#21151c]/70 to-[#171617]/80 backdrop-blur-xl py-5 px-6 sm:py-6 sm:px-8 shadow-[0_10px_30px_rgba(0,0,0,0.5)] translate-x-0 lg:-translate-x-16 snap-center"
            >
              <div className="flex items-center gap-3 sm:gap-2.5">
                <Image
                  src={Assets.ReviewAvatar}
                  alt={review.name}
                  className="h-[40px] w-[40px] sm:h-[36px] sm:w-[36px] rounded-full object-cover"
                />
                <div className="min-w-0">
                  <p className="truncate text-[20px] sm:text-[18px] font-medium text-white">
                    {review.name}
                  </p>
                  <div className="mt-0 flex items-center gap-4 sm:gap-2">
                    <span className="flex items-center gap-[2px]">
                      {Array.from({ length: 5 }, (_, s) => (
                        <Star
                          key={s}
                          className="h-[12px] w-[12px] sm:h-[10px] sm:w-[10px] text-[#ffc107]"
                        />
                      ))}
                    </span>
                    <span className="text-[11px] sm:text-[9.5px] text-white/40">
                      {review.date}
                    </span>
                  </div>
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
