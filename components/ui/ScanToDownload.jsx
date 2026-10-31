"use client";

import Image from "next/image";
import Assets from "@/assets/Assets";

export default function ScanToDownload({ className = "" }) {
  const downloadLink = process.env.NEXT_PUBLIC_DOWNLOAD_LINK || "https://heykatha.com";

  return (
    <aside
      aria-label="Scan to download"
      className={`fixed right-4 bottom-6 z-50 w-[128px] rounded-[16px] border border-white/15 bg-black/75 p-3 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl sm:right-10 sm:bottom-10 sm:w-[156px] sm:p-3.5 transition-transform hover:scale-[1.03] ${className}`}
    >
      <a
        href={downloadLink}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center"
      >
        <p className="mb-2 text-center text-[11px] leading-tight font-semibold tracking-wide text-white">
          Scan to download
        </p>
        <div className="mx-auto overflow-hidden rounded-lg bg-white p-1">
          <Image
            src={Assets.QrCode}
            alt="Scan to download the Katha app"
            width={124}
            height={124}
            className="mx-auto h-[100px] w-[100px] sm:h-[124px] sm:w-[124px]"
          />
        </div>
      </a>
    </aside>
  );
}
