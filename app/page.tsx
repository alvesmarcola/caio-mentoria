import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AuthoritySection } from "./components/AuthoritySection";
import { TargetAudienceSection } from "./components/TargetAudienceSection";
import { MethodSection } from "./components/MethodSection";
import { FaqSection } from "./components/FaqSection";
import { ApplicationSection } from "./components/ApplicationSection";
import { Footer } from "./components/Footer";
import { FloatingWhatsapp } from "./components/FloatingWhatsapp";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFC] text-[#0F172A] relative selection:bg-cyan-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar />

      <main className="flex-1">
        {/* 1. Hero Section (Topo) */}
        <HeroSection />

        {/* 2. Autoridade / Quem é o Caio (Seção 2) */}
        <AuthoritySection />

        {/* 3. Para Quem É Esta Mentoria? (Seção 3) */}
        <TargetAudienceSection />

        {/* 4. O Que Você Vai Aprender / O Método (Seção 4) */}
        <MethodSection />

        {/* 5. FAQ / Perguntas Frequentes (Seção 5) */}
        <FaqSection />

        {/* 6. Formulário de Aplicação / Checkout (Seção 6 - Foco em Conversão) */}
        <ApplicationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Direct Support WhatsApp */}
      <FloatingWhatsapp />
    </div>
  );
}
