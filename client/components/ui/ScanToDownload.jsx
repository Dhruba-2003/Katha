"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Assets from "@/assets/Assets";

export default function ScanToDownload({ className = "" }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Floating Trigger Widget */}
      <aside
        aria-label="Scan QR code to open Katha"
        className={`fixed right-4 bottom-6 z-40 w-[128px] sm:right-10 sm:bottom-10 sm:w-[156px] ${className}`}
      >
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="group block w-full text-center rounded-[16px] border border-white/15 bg-black/80 p-3 sm:p-3.5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-2xl transition-all duration-300 hover:scale-[1.04] hover:border-pink-500/40 hover:shadow-[0_20px_45px_rgba(217,70,239,0.3)] cursor-pointer"
          title="Click to enlarge QR code"
        >
          <p className="mb-2 text-center text-[11px] leading-tight font-semibold tracking-wide text-white transition-colors group-hover:text-pink-300">
            Scan to open
          </p>
          <div className="mx-auto overflow-hidden rounded-lg bg-white p-1 transition-transform group-hover:scale-[1.02]">
            <Image
              src={Assets.QrCode}
              alt="Scan QR code to open Katha"
              width={124}
              height={124}
              className="mx-auto h-[100px] w-[100px] sm:h-[124px] sm:w-[124px] object-contain"
            />
          </div>
        </button>
      </aside>

      {/* Middle-of-Screen Modal Overlay (QR code only) */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="QR Code"
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative overflow-hidden rounded-[24px] bg-white p-2.5 sm:p-3.5 shadow-[0_25px_70px_rgba(0,0,0,0.9)] transition-all animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute top-2.5 right-2.5 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/90 cursor-pointer"
              aria-label="Close modal"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* QR Code Only */}
            <div className="w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] overflow-hidden rounded-xl">
              <Image
                src={Assets.QrCode}
                alt="Katha QR Code"
                width={340}
                height={340}
                className="h-full w-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
