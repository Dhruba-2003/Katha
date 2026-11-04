"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Assets from "@/assets/Assets";
import Image from "next/image";

export default function Navbar({ className = "" }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const downloadLink = process.env.NEXT_PUBLIC_DOWNLOAD_LINK || "https://playkatha.com";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-4 left-6 right-6 z-50 mx-auto max-w-[1400px] flex items-center justify-between rounded-full border transition-all duration-300 pr-3 pl-5 py-2 sm:py-0 sm:h-[72px] sm:pr-4 sm:pl-10 mx-4 sm:mx-6 md:mx-16 lg:mx-24 xl:mx-48  ${
        scrolled
          ? "border-white/25 bg-black/35 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)]"
          : "border-white/15 bg-white/[0.04] backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
      } ${className}`}
    >
      <div className="flex w-full items-center justify-between">
        <Link href="/" aria-label="Katha home">
          <Image
            src={Assets.Logo}
            alt="Katha"
            className="h-[38px] w-auto sm:h-[48px]"
          />
        </Link>

        {/* desktop links */}
        <div className="hidden items-center gap-12 sm:flex">
          <Link
            href="#blog"
            className="text-[14px] text-white/90 transition-colors hover:text-white sm:text-[15px]"
          >
            Blog
          </Link>
          <Link
            href="#careers"
            className="text-[14px] text-white/90 transition-colors hover:text-white sm:text-[15px]"
          >
            Careers
          </Link>
          <a
            href={downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-linear-to-r from-[#B54AFF] to-[#FF7D94] px-5 py-2 text-[13px] font-semibold tracking-[0.03em] text-black uppercase shadow-[0_8px_30px_rgba(217,70,239,0.4)] transition-transform hover:scale-[1.03]"
          >
            Get The App
          </a>
        </div>

        {/* mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-full sm:hidden"
        >
          <span
            className={`block h-[2px] w-[18px] rounded-full bg-white transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-[2px] w-[18px] rounded-full bg-white transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-[2px] w-[18px] rounded-full bg-white transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* mobile dropdown */}
      {open && (
        <div className="absolute top-[calc(100%+12px)] right-0 left-0 z-50 flex flex-col gap-4 rounded-2xl border border-white/20 bg-black/90 px-6 py-6 backdrop-blur-2xl sm:hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
          <Link
            href="#blog"
            onClick={() => setOpen(false)}
            className="text-[16px] text-white/90 font-medium"
          >
            Blog
          </Link>
          <Link
            href="#careers"
            onClick={() => setOpen(false)}
            className="text-[16px] text-white/90 font-medium"
          >
            Careers
          </Link>
          <a
            href={downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="inline-flex w-full items-center justify-center rounded-full bg-linear-to-r from-[#B54AFF] to-[#FF7D94] px-5 py-3 text-[14px] font-semibold tracking-[0.03em] text-black uppercase shadow-md"
          >
            Get The App
          </a>
        </div>
      )}
    </nav>
  );
}
