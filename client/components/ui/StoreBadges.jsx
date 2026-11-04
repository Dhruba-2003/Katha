import { Icon } from "@iconify/react";

export default function StoreBadges({ className = "", tone = "dark", size = "md" }) {
  const shell =
    tone === "light"
      ? "border-white/90 bg-white text-black"
      : "border-white/85 bg-black text-white";

  const lg = size === "lg";

  return (
    <div className={`flex flex-wrap items-center ${lg ? "gap-4" : "gap-3"} ${className}`}>
      {/* Google Play */}
      <a
        href="#download"
        aria-label="Get it on Google Play"
        className={`group flex items-center border transition-colors ${
          lg ? "h-[60px] gap-2 rounded-lg pl-2.5 pr-4" : "h-[46px] gap-1 rounded-md pl-2 pr-3"
        } ${shell} hover:opacity-90`}
      >
        <Icon icon="logos:google-play-icon" className={lg ? "h-[36px] w-[36px] shrink-0" : "h-[28px] w-[28px] shrink-0"} />
        <span className="flex flex-col leading-none">
          <span
            className={`font-light tracking-[0.01em] uppercase opacity-90 ${
              lg ? "text-[10.5px]" : "text-[9px]"
            }`}
          >
            Get it on
          </span>
          <span
            className={`mt-[2px] font-semibold tracking-tight ${
              lg ? "text-[23px]" : "text-[17px]"
            }`}
          >
            Google&nbsp;Play
          </span>
        </span>
      </a>

      {/* App Store */}
      <a
        href="#download"
        aria-label="Download on the App Store"
        className={`group flex items-center border transition-colors ${
          lg ? "h-[60px] gap-2.5 rounded-lg pl-2.5 pr-4" : "h-[46px] gap-2.5 rounded-md pl-2 pr-3"
        } ${shell} hover:opacity-90`}
      >
        <Icon icon="ic:baseline-apple" className={lg ? "h-[40px] w-[40px] shrink-0" : "h-[32px] w-[32px] shrink-0"} />
        <span className="flex flex-col leading-none">
          <span
            className={`font-light tracking-[0.01em] uppercase opacity-90 ${
              lg ? "text-[10.5px]" : "text-[9px]"
            }`}
          >
            Download on the
          </span>
          <span
            className={`mt-[2px] font-semibold tracking-tight ${
              lg ? "text-[23px]" : "text-[17px]"
            }`}
          >
            App&nbsp;Store
          </span>
        </span>
      </a>
    </div>
  );
}
