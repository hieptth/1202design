import {
  Banner,
  Contact,
  Products,
  Services,
  SubBanner,
  Testimonials,
  Work,
} from "@/components";

export default function Home() {
  return (
    <div className="relative min-h-screen max-w-screen overflow-x-hidden flex flex-col gap-11 lg:gap-31">
      <Banner />
      <Services />
      <Products />
      <SubBanner />
      <Testimonials />
      <Work />
      <Contact />
    </div>
  );
}
