import Image from "next/image";

/**
 * Phone mockup wrapper. Renders a device frame around a screenshot.
 * The screenshot is provided as children so any image can be reused.
 */
export default function PhoneFrame({
  children,
  className = "",
  glow = "rgba(255,61,143,0.45)",
}) {
  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-10 -z-10 rounded-[60%] blur-3xl"
        style={{ background: `radial-gradient(closest-side, ${glow}, transparent 72%)` }}
      />
      <div className="relative overflow-hidden rounded-[34px] border border-white/15 bg-black p-[6px] shadow-[0_30px_80px_rgba(0,0,0,0.75)]">
        <div className="relative overflow-hidden rounded-[28px] bg-black">
          {/* notch */}
          <div className="absolute left-1/2 top-2 z-20 h-[5px] w-[42px] -translate-x-1/2 rounded-full bg-white/25" />
          {children}
        </div>
      </div>
    </div>
  );
}

export function PhoneScreen({ src, alt = "", priority = false, className = "" }) {
  return (
    <Image
      src={src}
      alt={alt}
      priority={priority}
      className={`block h-auto w-full ${className}`}
    />
  );
}
