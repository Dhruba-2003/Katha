import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { Icon } from "@iconify/react";

const LINKS = [
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "#terms" },
  { label: "Support", href: "#support" },
  { label: "Report", href: "#report" },
  { label: "Contact Us", href: "/contact" },
  { label: "About", href: "/about" },
];

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-black border-t border-white/10">
      <div className="flex flex-col gap-10 px-6 py-12 sm:py-16 md:flex-row md:items-start md:justify-between md:px-16 md:py-20 lg:px-24 xl:px-64">
        {/* ---------- brand ---------- */}
        <div>
          <Logo size="lg" imgClassName="h-9 sm:h-12 2xl:h-[52px]" />
          <p className="mt-4 sm:mt-5 text-[11px] text-white/40">
            &copy; Techzuno Solution OPC Private Limited
          </p>
        </div>

        {/* ---------- links + social ---------- */}
        <div className="flex flex-col sm:flex-row flex-wrap items-start gap-8 sm:gap-x-16 sm:gap-y-10 md:gap-x-24">
          <div>
            <p className="text-[14px] sm:text-[15px] font-semibold text-white">
              Links
            </p>
            <ul className="mt-4 sm:mt-6 grid grid-cols-3 gap-x-6 gap-y-3 sm:gap-y-4">
              {LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="whitespace-nowrap text-[13px] sm:text-[13.5px] text-white/55 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[14px] sm:text-[15px] font-semibold text-white">
              Follow us
            </p>
            <div className="mt-4 sm:mt-6 flex items-center gap-3">
              <a
                href="#x"
                aria-label="Follow Katha on X"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-white text-black transition-transform hover:scale-105"
              >
                <Icon icon="ri:twitter-x-fill" className="h-[16px] w-[16px]" />
              </a>
              <a
                href="#linkedin"
                aria-label="Follow Katha on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0a66c2] text-white transition-transform hover:scale-105"
              >
                <Icon icon="ri:linkedin-fill" className="h-[16px] w-[16px]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
