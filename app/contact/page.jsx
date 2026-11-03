"use client";

import { useState } from "react";
import Glowbtn from "@/components/buttons/Glowbtn";
import { Icon } from "@iconify/react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
   
    setSubmitted(true);
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-black pt-36 pb-24 sm:pt-44 sm:pb-32">
      {/* ---------- Ambient background glows ---------- */}
      <div className="pointer-events-none absolute top-0 left-1/2 h-[450px] w-[800px] -translate-x-1/2 bg-gradient-to-b from-[#ff3d8f]/15 via-[#b14bff]/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -left-48 h-[500px] w-[500px] bg-[#b14bff]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-[1200px] px-6 md:px-12 lg:px-16">
        {/* ---------- Page Header ---------- */}
        <div className="text-center">
          <Glowbtn text="Get in Touch" />

          <h1 className="mt-6 font-display text-[36px] font-bold tracking-[0.01em] text-white sm:text-[48px] lg:text-[56px] leading-[1.15]">
            Contact <span className="text-[#ff3d8f]">Us</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[580px] text-[15px] sm:text-[16px] text-white/65 leading-relaxed">
            Have questions, feedback, or business inquiries? Drop us a line and our team will get back to you shortly.
          </p>
        </div>

        {/* ---------- Contact Section Grid ---------- */}
        <div className="mt-14 sm:mt-18 grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Direct channels cards (4 cols) */}
          <div className="flex flex-col gap-5 lg:col-span-5">
            <div className="rounded-[24px] border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-xl transition-all hover:border-white/20">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff3d8f]/15 text-[#ff3d8f]">
                <Icon icon="solar:letter-bold" className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-[18px] sm:text-[20px] font-semibold text-white">
                Email
              </h3>
              <p className="mt-1 text-[14px] text-white/60">
                For general support, feedback, and user inquiries.
              </p>
              <a
                href="mailto:info@techzuno.com"
                className="mt-3 inline-block text-[14px] font-medium text-[#ff3d8f] hover:underline"
              >
                info@techzuno.com
              </a>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-xl transition-all hover:border-white/20">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#b14bff]/15 text-[#b14bff]">
                <Icon icon="solar:map-point-bold" className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-[18px] sm:text-[20px] font-semibold text-white">
                Address
              </h3>
              <p className="mt-1 text-[14px] text-white/70 leading-relaxed">
                Kolkata, West Bengal 700039, India
              </p>
            </div>

            <div className="rounded-[24px] border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-xl transition-all hover:border-white/20">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#ff9f1c]/15 text-[#ff9f1c]">
                <Icon icon="solar:buildings-bold" className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-[18px] sm:text-[20px] font-semibold text-white">
                Company Details
              </h3>
              <div className="mt-2 space-y-1.5 text-[13px] text-white/70">
                <p>
                  <span className="text-white/40">Company:</span>{" "}
                  <span className="text-white font-medium">Techzuno Solution OPC Private Limited</span>
                </p>
                <p>
                  <span className="text-white/40">Owner:</span>{" "}
                  <span className="text-white font-medium">Bishal Kayal</span>
                </p>
                <p>
                  <span className="text-white/40">GST No:</span>{" "}
                  <span className="text-white font-medium">19AAMCT8152B1Z5</span>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form Card (7 cols) */}
          <div className="rounded-[28px] border border-white/10 bg-white/[0.02] p-8 sm:p-12 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] lg:col-span-7">
            {submitted ? (
              <div className="flex h-full min-h-[350px] flex-col items-center justify-center text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ff3d8f]/20 text-[#ff3d8f]">
                  <Icon icon="solar:check-circle-bold" className="h-9 w-9" />
                </div>
                <h3 className="mt-5 font-display text-[24px] font-bold text-white">
                  Message Sent!
                </h3>
                <p className="mt-2 max-w-[360px] text-[15px] text-white/60">
                  Thank you for reaching out. We have received your note and will get back to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-full border border-white/20 px-6 py-2 text-[13px] text-white transition-colors hover:bg-white/10"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-[13px] font-medium text-white/80">
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2 w-full rounded-[14px] border border-white/15 bg-white/[0.04] px-4 py-3.5 text-[15px] text-white placeholder-white/30 backdrop-blur-md transition-colors focus:border-[#ff3d8f] focus:outline-none focus:ring-1 focus:ring-[#ff3d8f]"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-[13px] font-medium text-white/80">
                    Your Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2 w-full rounded-[14px] border border-white/15 bg-white/[0.04] px-4 py-3.5 text-[15px] text-white placeholder-white/30 backdrop-blur-md transition-colors focus:border-[#ff3d8f] focus:outline-none focus:ring-1 focus:ring-[#ff3d8f]"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-[13px] font-medium text-white/80">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    placeholder="How can we help?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="mt-2 w-full rounded-[14px] border border-white/15 bg-white/[0.04] px-4 py-3.5 text-[15px] text-white placeholder-white/30 backdrop-blur-md transition-colors focus:border-[#ff3d8f] focus:outline-none focus:ring-1 focus:ring-[#ff3d8f]"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[13px] font-medium text-white/80">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Tell us what you're thinking..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="mt-2 w-full rounded-[14px] border border-white/15 bg-white/[0.04] px-4 py-3.5 text-[15px] text-white placeholder-white/30 backdrop-blur-md transition-colors focus:border-[#ff3d8f] focus:outline-none focus:ring-1 focus:ring-[#ff3d8f] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-linear-to-r from-[#B54AFF] to-[#FF7D94] px-8 py-3.5 text-[14px] font-semibold tracking-[0.03em] text-black uppercase shadow-[0_8px_30px_rgba(217,70,239,0.35)] transition-all hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(217,70,239,0.5)] cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
