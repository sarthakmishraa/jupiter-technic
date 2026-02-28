import { useScrollSpy } from "./hooks";
import { SECTION_IDS } from "./constants";
import { Navbar, Footer } from "./components/layout";
import {
  HeroSection,
  OfferingsSection,
  AboutSection,
  ProductsSection,
  WhyUsSection,
  ContactSection,
} from "./components/sections";

function navigateTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function App() {
  const activeSection = useScrollSpy(SECTION_IDS);

  return (
    <div
      className="min-h-screen bg-slate-950 text-white"
      style={{
        fontFamily: "'DM Sans', system-ui, -apple-system, sans-serif",
      }}
    >
      <link
        href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap"
        rel="stylesheet"
      />

      <Navbar active={activeSection} onNavigate={navigateTo} />
      <HeroSection onNavigate={navigateTo} />
      <OfferingsSection onNavigate={navigateTo} />
      <AboutSection />
      <ProductsSection onNavigate={navigateTo} />
      <WhyUsSection />
      <ContactSection />
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
