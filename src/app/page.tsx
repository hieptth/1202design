import { Products, Services } from "@/components";
import HeroBanner from "@/components/Banner";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen overflow-y-hidden">
      <Navbar />
      <HeroBanner />
      <Services />
      <Products />
    </div>
  );
}
