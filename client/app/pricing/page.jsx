import PricingHero from "@/components/sections/PricingHero";
import PricingPlans from "@/components/sections/PricingPlans";

export const metadata = {
  title: "Pricing Plans — Katha",
  description:
    "Choose a plan that fits your story. Unlock more characters, deeper conversations, and a truly personalized AI storytelling experience.",
  keywords: [
    "Katha pricing",
    "Katha subscription plans",
    "AI story subscription",
    "AI character chat pricing",
  ],
  openGraph: {
    title: "Pricing Plans — Katha",
    description:
      "Choose a plan that fits your story. Unlock more characters, deeper conversations, and a truly personalized AI storytelling experience.",
    type: "website",
    locale: "en_US",
    siteName: "Katha",
  },
};

export default function PricingPage() {
  return (
    <main className="w-full overflow-x-hidden bg-black relative">
      <PricingHero />
      <PricingPlans />
    </main>
  );
}

