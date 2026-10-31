import { Sparkle } from "@/components/icons/Icons";
import { Icon } from "@iconify/react";

export default function SectionBadge({
  children,
  className = "",
  tone = "pink",
}) {
  const tones = {
    pink: "border-[#ff3d8f]/70 bg-black/50 backdrop-blur-xl text-white shadow-[0_4px_25px_rgba(255,61,143,0.25)]",
    neutral: "border-white/15 bg-white/[0.06] text-white backdrop-blur-xl",
  };

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 font-display  font-semibold tracking-[-0.01em] ${tones[tone]} ${className} bg-linear-to-r from-[#502648] to-[#0E1020]`}
    >
      <Icon icon="ant-design:gemini-filled"  className={`h-4 w-4 shrink-0 text-[#FF649C]`} />
      <span className="text-[#FF649C] text-[16px]">{children}</span>
      <Icon icon="ant-design:gemini-filled"  className={`h-4 w-4 shrink-0 text-[#FF649C]`} />
    </span>
  );
}
