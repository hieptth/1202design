import {
  Banner,
  Footer,
  Navbar,
  Products,
  Services,
  SubBanner,
} from "@/components";

export default function Home() {
  return (
    <div className="relative min-h-screen max-w-screen overflow-x-hidden flex flex-col gap-11 lg:gap-31">
      <Navbar />
      <Banner />
      <Services />
      <Products />
      <SubBanner />
      <Footer />
    </div>
  );
}
