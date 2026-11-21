"use client";

import { useState } from "react";
import { Icon } from "@iconify/react";

const VIOLATION_TYPES = [
  { id: "harassment", label: "Harassment / Hate Speech / Bullying" },
  { id: "explicit", label: "Explicit, Violent, or Illegal Content" },
  { id: "impersonation", label: "Impersonation or Scam Account" },
  { id: "spam", label: "Spam or Misleading Promotions" },
  { id: "ip", label: "Intellectual Property Infringement" },
  { id: "bug", label: "Story / Character Bug or Glitch" },
  { id: "other", label: "Other Safety or Community Concern" },
];

export default function ReportSubmissionForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    violationType: "harassment",
    targetItem: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const violationLabel =
        VIOLATION_TYPES.find((v) => v.id === formData.violationType)?.label ||
        formData.violationType;

      const subject = `[Safety Report - ${violationLabel}] ${
        formData.targetItem ? `Ref: ${formData.targetItem}` : "Community Report"
      }`;

      const payload = {
        name: formData.name,
        email: formData.email,
        subject,
        message: `Katha Safety & Incident Report\n\nViolation Type: ${violationLabel}\nReported Story / Character / Account: ${
          formData.targetItem || "Not specified"
        }\n\nDetails:\n${formData.message}`,
      };

      const response = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(
          data.error || "Failed to submit report. Please email us directly."
        );
      }

      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        violationType: "harassment",
        targetItem: "",
        message: "",
      });
    } catch (err) {
      console.error("Report submit error:", err);
      setError(
        err.message ||
          "Could not send report via server. Please email info@techzuno.com directly."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-8 rounded-[24px] border border-[#ff3d8f]/20 bg-gradient-to-b from-[#ff3d8f]/[0.06] via-white/[0.02] to-transparent p-6 sm:p-8 backdrop-blur-xl transition-all duration-300">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-[#ff3d8f] animate-ping" />
            <span className="text-[12px] font-semibold tracking-wider text-[#ff3d8f] uppercase">
              Online Incident Form
            </span>
          </div>
          <h3 className="mt-1 font-display text-[20px] sm:text-[22px] font-bold text-white">
            Need to report an issue directly to our team?
          </h3>
          <p className="mt-1 text-[13.5px] sm:text-[14px] text-white/60">
            Submit details here or email our Trust &amp; Safety desk at{" "}
            <a
              href="mailto:info@techzuno.com"
              className="text-[#ff3d8f] underline hover:text-[#ff7ab0]"
            >
              info@techzuno.com
            </a>
            .
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#B54AFF] to-[#FF7D94] px-5 py-2.5 text-[13px] font-semibold text-black uppercase tracking-[0.03em] shadow-[0_4px_20px_rgba(255,61,143,0.3)] transition-transform hover:scale-[1.02] cursor-pointer self-start sm:self-auto shrink-0"
        >
          <Icon
            icon={isOpen ? "solar:minus-circle-bold" : "solar:add-circle-bold"}
            className="h-4 w-4"
          />
          <span>{isOpen ? "Close Form" : "Submit a Report Online"}</span>
        </button>
      </div>

      {isOpen && (
        <div className="mt-6 border-t border-white/10 pt-6">
          {submitted ? (
            <div className="rounded-[18px] border border-green-500/30 bg-green-500/10 p-6 text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 text-green-400">
                <Icon icon="solar:check-circle-bold" className="h-7 w-7" />
              </div>
              <h4 className="mt-3 font-display text-[18px] font-bold text-white">
                Report Submitted Successfully
              </h4>
              <p className="mx-auto mt-2 max-w-[500px] text-[14px] text-white/70">
                Thank you for helping keep Katha safe. Our moderation team
                reviews all reports within 24–48 hours. A confirmation email has
                also been sent to your address.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-5 rounded-full border border-white/20 px-5 py-2 text-[13px] text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                Submit another report
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="flex items-start gap-3 rounded-[14px] border border-red-500/30 bg-red-500/10 p-3.5 text-[13.5px] text-red-200">
                  <Icon
                    icon="solar:danger-triangle-bold"
                    className="h-5 w-5 shrink-0 text-red-400 mt-0.5"
                  />
                  <div>
                    <p className="font-semibold text-red-300">Submission Notice</p>
                    <p className="text-red-200/90">{error}</p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="reporter-name"
                    className="block text-[13px] font-medium text-white/80"
                  >
                    Your Name
                  </label>
                  <input
                    id="reporter-name"
                    type="text"
                    required
                    disabled={loading}
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="mt-1.5 w-full rounded-[12px] border border-white/15 bg-white/[0.04] px-3.5 py-2.5 text-[14px] text-white placeholder-white/30 backdrop-blur-md transition-colors focus:border-[#ff3d8f] focus:outline-none focus:ring-1 focus:ring-[#ff3d8f] disabled:opacity-50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="reporter-email"
                    className="block text-[13px] font-medium text-white/80"
                  >
                    Your Email
                  </label>
                  <input
                    id="reporter-email"
                    type="email"
                    required
                    disabled={loading}
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="mt-1.5 w-full rounded-[12px] border border-white/15 bg-white/[0.04] px-3.5 py-2.5 text-[14px] text-white placeholder-white/30 backdrop-blur-md transition-colors focus:border-[#ff3d8f] focus:outline-none focus:ring-1 focus:ring-[#ff3d8f] disabled:opacity-50"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="violation-type"
                    className="block text-[13px] font-medium text-white/80"
                  >
                    Violation Category
                  </label>
                  <select
                    id="violation-type"
                    disabled={loading}
                    value={formData.violationType}
                    onChange={(e) =>
                      setFormData({ ...formData, violationType: e.target.value })
                    }
                    className="mt-1.5 w-full rounded-[12px] border border-white/15 bg-[#14101e] px-3.5 py-2.5 text-[14px] text-white backdrop-blur-md transition-colors focus:border-[#ff3d8f] focus:outline-none focus:ring-1 focus:ring-[#ff3d8f] disabled:opacity-50"
                  >
                    {VIOLATION_TYPES.map((v) => (
                      <option key={v.id} value={v.id} className="bg-[#14101e] text-white">
                        {v.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="target-item"
                    className="block text-[13px] font-medium text-white/80"
                  >
                    Story, Character, or Profile Name
                  </label>
                  <input
                    id="target-item"
                    type="text"
                    disabled={loading}
                    placeholder="e.g. Detective Kabir / Episode 3"
                    value={formData.targetItem}
                    onChange={(e) =>
                      setFormData({ ...formData, targetItem: e.target.value })
                    }
                    className="mt-1.5 w-full rounded-[12px] border border-white/15 bg-white/[0.04] px-3.5 py-2.5 text-[14px] text-white placeholder-white/30 backdrop-blur-md transition-colors focus:border-[#ff3d8f] focus:outline-none focus:ring-1 focus:ring-[#ff3d8f] disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="report-description"
                  className="block text-[13px] font-medium text-white/80"
                >
                  Describe the Issue Clearly
                </label>
                <textarea
                  id="report-description"
                  rows={4}
                  required
                  disabled={loading}
                  placeholder="Provide context on what happened, messages, timestamps, or reasons why this violates guidelines..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="mt-1.5 w-full rounded-[12px] border border-white/15 bg-white/[0.04] px-3.5 py-2.5 text-[14px] text-white placeholder-white/30 backdrop-blur-md transition-colors focus:border-[#ff3d8f] focus:outline-none focus:ring-1 focus:ring-[#ff3d8f] resize-none disabled:opacity-50"
                />
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                <span className="text-[12px] text-white/50">
                  Submissions are strictly confidential and encrypted.
                </span>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-linear-to-r from-[#B54AFF] to-[#FF7D94] px-6 py-2.5 text-[13px] font-semibold tracking-[0.03em] text-black uppercase shadow-md transition-all hover:scale-[1.02] cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Icon
                        icon="line-md:loading-loop"
                        className="h-4 w-4 animate-spin"
                      />
                      <span>Sending Report...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Report</span>
                      <Icon
                        icon="solar:arrow-right-bold"
                        className="h-4 w-4"
                      />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      )}
    </div>
  );
}
