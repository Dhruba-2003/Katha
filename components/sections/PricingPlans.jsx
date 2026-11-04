"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

export default function PricingPlans() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const downloadLink =
    process.env.NEXT_PUBLIC_DOWNLOAD_LINK || "https://playkatha.com";

  return (
    <section id="plans" className="relative w-full bg-black py-16 sm:py-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] bg-gradient-to-b from-[#ff3d8f]/15 via-[#b14bff]/10 to-transparent blur-[140px]" />
      <div className="pointer-events-none absolute bottom-10 left-1/4 h-[400px] w-[400px] bg-[#b14bff]/10 blur-[150px]" />
      <div className="pointer-events-none absolute bottom-10 right-1/4 h-[400px] w-[400px] bg-[#ff3d8f]/10 blur-[150px]" />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 md:px-12 lg:px-16">
        {/* ---------- Billing Toggle ---------- */}
        <div className="flex justify-center mb-12 sm:mb-16">
          <div className="inline-flex items-center rounded-full bg-[#141419] p-1.5 border border-white/15 shadow-[0_8px_30px_rgba(0,0,0,0.6)]">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`cursor-pointer rounded-full px-6 py-2.5 text-[14px] font-semibold transition-all duration-300 ${
                billingCycle === "monthly"
                  ? "bg-linear-to-r from-[#D946EF] to-[#FF7D94] text-white shadow-[0_4px_20px_rgba(217,70,239,0.45)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("yearly")}
              className={`cursor-pointer inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-[14px] font-semibold transition-all duration-300 ${
                billingCycle === "yearly"
                  ? "bg-linear-to-r from-[#D946EF] to-[#FF7D94] text-white shadow-[0_4px_20px_rgba(217,70,239,0.45)]"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <span>Yearly</span>
              <span className="rounded-full bg-[#9333EA]/35 border border-[#C084FC]/40 px-2 py-0.5 text-[10px] font-bold tracking-wide text-[#E879F9]">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* ---------- Subscription Cards Container ---------- */}
        <div className="rounded-[32px] sm:rounded-[40px] border border-white/10 bg-[#0d0d12]/80 p-5 sm:p-8 md:p-10 backdrop-blur-2xl shadow-[0_25px_80px_rgba(0,0,0,0.85)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {/* ==================== CARD 1: FREE ==================== */}
            <div className="rounded-[24px] border border-white/10 bg-[#121118]/90 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:border-white/20 hover:scale-[1.01]">
              <div>
                {/* Sprout Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF3D8F]/10 border border-[#FF3D8F]/25 text-[#FF3D8F]">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 22V12" />
                    <path d="M12 12C12 7.02944 16.0294 3 21 3C21 7.97056 16.9706 12 12 12Z" />
                    <path d="M12 14C12 10.134 8.86599 7 5 7C5 10.866 8.13401 14 12 14Z" />
                  </svg>
                </div>

                {/* Plan Info */}
                <h3 className="font-display text-[24px] font-bold text-white mt-5">
                  Free
                </h3>
                <p className="text-[13px] text-white/50 mt-1">
                  Get a taste of Katha.
                </p>

                {/* Price */}
                <div className="mt-6 flex items-baseline">
                  <span className="font-display text-[38px] sm:text-[44px] font-extrabold text-white leading-none tracking-tight">
                    ₹0
                  </span>
                  <span className="text-[14px] font-normal text-white/45 ml-1.5">
                    /month
                  </span>
                </div>

                {/* Features List */}
                <ul className="mt-8 flex flex-col gap-3.5">
                  <li className="flex items-center gap-3 text-[13.5px] text-white/80">
                    <svg
                      className="w-4 h-4 text-[#FF3D8F] shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Limited AI chat messages</span>
                  </li>
                  <li className="flex items-center gap-3 text-[13.5px] text-white/80">
                    <svg
                      className="w-4 h-4 text-[#FF3D8F] shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Access to select characters</span>
                  </li>
                  <li className="flex items-center gap-3 text-[13.5px] text-white/80">
                    <svg
                      className="w-4 h-4 text-[#FF3D8F] shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Basic story experience</span>
                  </li>
                  <li className="flex items-center gap-3 text-[13.5px] text-white/35">
                    <svg
                      className="w-4 h-4 text-white/30 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span>No image generation</span>
                  </li>
                  <li className="flex items-center gap-3 text-[13.5px] text-white/35">
                    <svg
                      className="w-4 h-4 text-white/30 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span>No early access</span>
                  </li>
                </ul>
              </div>

              {/* Button */}
              <div className="mt-8 pt-4">
                <a
                  href={downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-full border border-white/20 bg-transparent py-3 text-center text-[14px] font-semibold text-white transition-all hover:bg-white/5 hover:border-white/40"
                >
                  Start Free
                </a>
              </div>
            </div>

            {/* ==================== CARD 2: PREMIUM (HIGHLIGHTED) ==================== */}
            <div className="rounded-[24px] border-2 border-[#FF3D8F] bg-linear-to-b from-[#26132b]/90 via-[#16121f]/95 to-[#121118] p-7 sm:p-8 flex flex-col justify-between relative shadow-[0_0_45px_rgba(255,61,143,0.35)] transition-all duration-300 hover:shadow-[0_0_60px_rgba(255,61,143,0.5)] hover:scale-[1.02] z-10">
              <div>
                {/* Crown Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF3D8F]/15 border border-[#FF3D8F]/35 text-[#FF3D8F]">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 19H20" />
                    <path d="M5 16L3 7L8.5 11L12 4L15.5 11L21 7L19 16H5Z" />
                  </svg>
                </div>

                {/* Plan Info */}
                <h3 className="font-display text-[24px] font-bold text-white mt-5">
                  Premium
                </h3>
                <p className="text-[13px] text-white/50 mt-1">
                  More freedom, deeper stories.
                </p>

                {/* Price */}
                <div className="mt-6 flex items-baseline">
                  <span className="font-display text-[38px] sm:text-[44px] font-extrabold text-white leading-none tracking-tight">
                    {billingCycle === "monthly" ? "₹299" : "₹239"}
                  </span>
                  <span className="text-[14px] font-normal text-white/45 ml-1.5">
                    /month
                  </span>
                </div>

                {/* Features List */}
                <ul className="mt-8 flex flex-col gap-3.5">
                  <li className="flex items-center gap-3 text-[13.5px] text-white/90">
                    <svg
                      className="w-4 h-4 text-[#FF3D8F] shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Unlimited AI chat messages</span>
                  </li>
                  <li className="flex items-center gap-3 text-[13.5px] text-white/90">
                    <svg
                      className="w-4 h-4 text-[#FF3D8F] shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Access to all characters</span>
                  </li>
                  <li className="flex items-center gap-3 text-[13.5px] text-white/90">
                    <svg
                      className="w-4 h-4 text-[#FF3D8F] shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Generate character images</span>
                  </li>
                  <li className="flex items-center gap-3 text-[13.5px] text-white/90">
                    <svg
                      className="w-4 h-4 text-[#FF3D8F] shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Faster response time</span>
                  </li>
                  <li className="flex items-center gap-3 text-[13.5px] text-white/90">
                    <svg
                      className="w-4 h-4 text-[#FF3D8F] shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Ad-free experience</span>
                  </li>
                </ul>
              </div>

              {/* Button */}
              <div className="mt-8 pt-4">
                <a
                  href={downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-full bg-linear-to-r from-[#B54AFF] to-[#FF7D94] py-3 text-center text-[14px] font-semibold text-white shadow-[0_8px_25px_rgba(217,70,239,0.45)] transition-transform hover:scale-[1.02]"
                >
                  Get Premium
                </a>
              </div>
            </div>

            {/* ==================== CARD 3: ULTIMATE ==================== */}
            <div className="rounded-[24px] border border-white/10 bg-[#121118]/90 p-7 sm:p-8 flex flex-col justify-between relative transition-all duration-300 hover:border-white/20 hover:scale-[1.01]">
              {/* Most Popular Badge */}
              <div className="absolute -top-3.5 right-6 inline-flex items-center gap-1.5 rounded-full bg-[#FF3B7A] px-3.5 py-1 text-[11px] font-bold text-white shadow-[0_4px_18px_rgba(255,59,122,0.5)]">
                <Icon icon="solar:star-bold" className="h-3 w-3" />
                <span>Most Popular</span>
              </div>

              <div>
                {/* Diamond Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF3D8F]/10 border border-[#FF3D8F]/25 text-[#FF3D8F]">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 3H18L22 9L12 21L2 9L6 3Z" />
                    <path d="M2 9H22" />
                    <path d="M12 21L7.5 9" />
                    <path d="M12 21L16.5 9" />
                    <path d="M12 3L7.5 9" />
                    <path d="M12 3L16.5 9" />
                  </svg>
                </div>

                {/* Plan Info */}
                <h3 className="font-display text-[24px] font-bold text-white mt-5">
                  Ultimate
                </h3>
                <p className="text-[13px] text-white/50 mt-1">
                  The most immersive Katha experience.
                </p>

                {/* Price */}
                <div className="mt-6 flex items-baseline">
                  <span className="font-display text-[38px] sm:text-[44px] font-extrabold text-white leading-none tracking-tight">
                    {billingCycle === "monthly" ? "₹499" : "₹399"}
                  </span>
                  <span className="text-[14px] font-normal text-white/45 ml-1.5">
                    /month
                  </span>
                </div>

                {/* Features List */}
                <ul className="mt-8 flex flex-col gap-3.5">
                  <li className="flex items-center gap-3 text-[13.5px] text-white/90">
                    <svg
                      className="w-4 h-4 text-[#FF3D8F] shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Everything in Premium</span>
                  </li>
                  <li className="flex items-center gap-3 text-[13.5px] text-white/90">
                    <svg
                      className="w-4 h-4 text-[#FF3D8F] shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Early access to new features</span>
                  </li>
                  <li className="flex items-center gap-3 text-[13.5px] text-white/90">
                    <svg
                      className="w-4 h-4 text-[#FF3D8F] shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Exclusive & limited characters</span>
                  </li>
                  <li className="flex items-center gap-3 text-[13.5px] text-white/90">
                    <svg
                      className="w-4 h-4 text-[#FF3D8F] shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center gap-3 text-[13.5px] text-white/90">
                    <svg
                      className="w-4 h-4 text-[#FF3D8F] shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Special badges & rewards</span>
                  </li>
                </ul>
              </div>

              {/* Button */}
              <div className="mt-8 pt-4">
                <a
                  href={downloadLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full rounded-full border border-white/20 bg-transparent py-3 text-center text-[14px] font-semibold text-white transition-all hover:bg-white/5 hover:border-white/40"
                >
                  Get Ultimate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

