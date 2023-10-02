import Navbar from "@/components/Navbar";
import Hero from "@/Pages/Hero";
import Features from "@/Pages/Features";
import Pricing from "@/Pages/Pricing";
import Contact from "@/Pages/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="w-full md:h-screen bg-[url('/hero_bg.png')] bg-cover bg-center">
        <Navbar />
        <Hero />
      </main>
      <Features />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
