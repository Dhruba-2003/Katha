import { Archivo, Playfair_Display } from "next/font/google";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
});

export const metadata = {
  title: "Katha — AI Characters & Interactive Drama Stories",
  description:
    "Step into gripping web series where you play the lead. Chat with AI characters who remember you and shape the story with every message.",
  keywords: [
    "AI characters chat app",
    "interactive story app",
    "chat with AI characters",
    "AI roleplay stories",
    "AI drama app",
  ],
  openGraph: {
    title: "Katha — AI Characters & Interactive Drama Stories",
    description:
      "Step into gripping web series where you play the lead. Chat with AI characters who remember you and shape the story with every message.",
    type: "website",
    locale: "en_US",
    siteName: "Katha",
  },
  twitter: {
    card: "summary_large_image",
    title: "Katha — AI Characters & Interactive Drama Stories",
    description:
      "Step into gripping web series where you play the lead. Chat with AI characters who remember you and shape the story with every message.",
  },
};

export const viewport = {
  themeColor: "#000000",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-transparent font-sans text-white">
        <div className="relative w-full overflow-x-hidden">
          {/* ---------- navbar (overlays hero) ---------- */}
          <div className="absolute top-4 left-0 z-20 w-full px-4 sm:top-[42px] sm:px-6 md:px-16 lg:px-24 xl:px-64">
            <Navbar />
          </div>

          {children}

          <Footer />
        </div>
      </body>
    </html>
  );
}
