import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Gallery from "@/components/Gallery";
import DownloadSection from "@/components/DownloadSection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Hero />
      <div className="section-divider" />
      <Features />
      <div className="section-divider" />
      <Gallery />
      <div className="section-divider" />
      <DownloadSection />
      <div className="section-divider" />
      <FAQ />
      <Footer />
    </main>
  );
};

export default Index;
