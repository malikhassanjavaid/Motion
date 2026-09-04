import { Banner } from "@/components/Banner";
import { EverydayStandard } from "@/components/EverydayStandard";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex min-h-svh flex-1 flex-col bg-white font-sans">
      <Banner />
      <Navbar />
      <Hero />
      <EverydayStandard />
    </div>
  );
}
