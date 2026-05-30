import { Hero } from "@/components/home/Hero";
import { BrandStatement } from "@/components/home/BrandStatement";
import { Marquee } from "@/components/home/Marquee";
import { SelectedWorks } from "@/components/home/SelectedWorks";
import { ServicesPreview } from "@/components/home/ServicesPreview";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <BrandStatement />
      <Marquee />
      <SelectedWorks />
      <ServicesPreview />
    </div>
  );
}
