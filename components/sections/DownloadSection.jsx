import Image from "next/image";
import Logo from "@/components/ui/Logo";
import StoreBadges from "@/components/ui/StoreBadges";
import Link from "next/link";
import Assets from "@/assets/Assets";

export default function DownloadSection() {
  return (
    <section id="download" className="relative w-full overflow-hidden bg-black">
      {/* ---------- panel with baked rounded corners ---------- */}
      <div className="relative flex min-h-[520px] w-full items-center overflow-hidden rounded-t-[28px] xl:aspect-[1920/574] xl:min-h-0 xl:rounded-none">
        <div className="absolute hidden sm:block  top-0 left-0 w-full h-full">
          <Image
            src={Assets.DownloadBg}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute sm:hidden  top-0 left-0 w-full h-full">
          <Image
            src={Assets.DownloadBgMobile}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        

        {/* ---------- right artwork (desktop) ---------- */}
        <Image
          src={Assets.DownloadRight}
          alt=""
          width={1069}
          height={607}
          className="pointer-events-none absolute bottom-0 right-0 hidden w-[53%] max-w-[1069px] xl:block  border-red-500"
        />

        {/* ---------- copy + call to action ---------- */}
        <div className="relative z-10 w-full px-6 py-12 sm:py-14 md:px-16 lg:px-24 xl:px-64 xl:py-0">
          <div className="max-w-[560px] mx-auto xl:mx-0">
            <div className="flex justify-center xl:justify-start items-center">
              <Link href="#hero" aria-label="Katha home">
                <Image
                  src={Assets.Logo}
                  alt="Katha"
                  className="h-[80px] w-auto sm:h-[80px]"
                />
              </Link>
            </div>

            <h2 className="mt-8 sm:mt-10 font-display text-[40px] leading-[1.06] font-extrabold tracking-[-0.01em] text-white uppercase italic sm:text-[38px] xl:mt-12 xl:text-[48px] 2xl:mt-16 2xl:text-[60px] text-center xl:text-left">
              <span className="block text-katha-pink">Download</span>
              <span className="block">the app now!</span>
            </h2>

            <StoreBadges className="mt-8 sm:mt-10 xl:mt-12 2xl:mt-14 justify-center xl:justify-start" />
          </div>

          {/* ---------- right artwork (mobile / tablet) ---------- */}
          <div className="mt-8 sm:mt-12 w-full flex justify-center xl:hidden">
            <Image
              src={Assets.DownloadRight}
              alt=""
              className="w-full h-full "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
