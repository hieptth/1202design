import { Services, Navbar, Banner, Footer, Products } from "@/components";

export default function Home() {
  return (
    <div className="min-h-screen max-w-screen overflow-x-hidden">
      <Navbar />
      <Banner />
      <Services />
      <Products />
      <Footer />
    </div>
  );
}
