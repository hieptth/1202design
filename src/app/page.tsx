import HeroBanner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import { Services } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <HeroBanner />
      <Services />
    </div>
  );
}
