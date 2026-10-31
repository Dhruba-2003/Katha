import Image from "next/image";
import Assets from "@/assets/Assets";

export default function Logo({ className = "", size = "md", imgClassName = "" }) {
  const sizes = {
    sm: "h-6 w-auto",
    md: "h-9 w-auto",
    lg: "h-12 w-auto",
    xl: "h-16 w-auto",
  };

  return (
    <div className={`inline-flex items-center ${className}`}>
      <Image
        src={Assets.Logo}
        alt="Katha Logo"
        width={160}
        height={50}
        className={`${sizes[size]} ${imgClassName} object-contain`}
      />
    </div>
  );
}
