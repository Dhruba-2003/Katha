import Hero from "@/components/sections/Hero";
import ShowsSection from "@/components/sections/ShowsSection";
import PopularStories from "@/components/sections/PopularStories";
import FeatureSection from "@/components/sections/FeatureSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import DownloadSection from "@/components/sections/DownloadSection";
import ScanToDownload from "@/components/ui/ScanToDownload";

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-black relative">
      <Hero />
      <ShowsSection />
      <PopularStories />
      <FeatureSection />
      <ReviewsSection />
      <DownloadSection />
      <ScanToDownload />
    </main>
  );
}
