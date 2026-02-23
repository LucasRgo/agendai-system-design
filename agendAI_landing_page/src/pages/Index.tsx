import HeroSection from "@/components/landing/HeroSection";
import ProblemsSection from "@/components/landing/ProblemsSection";
import HumanTouchSection from "@/components/landing/HumanTouchSection";
import SolutionSection from "@/components/landing/SolutionSection";
import WebsiteSection from "@/components/landing/WebsiteSection";
import TestimonialSection from "@/components/landing/TestimonialSection";
import FAQSection from "@/components/landing/FAQSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import { useState } from "react";
import { ImageCarouselModal } from "@/components/ui/image-carousel-modal";
import FloatingNavCta from "@/components/FloatingNavCta";

const Index = () => {
    const images = [
        { src: "/imagens_site/print_whatsapp.webp", alt: "Conversa WhatsApp com IA agendando automaticamente" },
        { src: "/imagens_site/dashboard.webp", alt: "Dashboard com receita semanal e mensal" },
        { src: "/imagens_site/cartão_fidelidade.webp", alt: "Cartão de fidelidade digital no celular" },
        { src: "/imagens_site/site_personalizado.webp", alt: "Site personalizado da barbearia" },
        { src: "/imagens_site/agendamento_web.webp", alt: "Tela de agendamento via web que o cliente vê" },
        { src: "/imagens_site/agenda.webp", alt: "Painel da agenda para gerenciamento" },
    ];

    const [isCarouselOpen, setIsCarouselOpen] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);

    const openCarouselAt = (index: number) => {
        setSelectedImageIndex(index);
        setIsCarouselOpen(true);
    };

    return (
        <div className="min-h-screen overflow-x-hidden">
            <HeroSection />
            <ProblemsSection />
            <HumanTouchSection />
            <SolutionSection onOpenCarousel={openCarouselAt} offsetStart={0} />
            <WebsiteSection onOpenCarousel={openCarouselAt} offsetStart={4} />
            <TestimonialSection />
            <CTASection />
            <FAQSection />
            <Footer />
            <ImageCarouselModal
                images={images}
                isOpen={isCarouselOpen}
                onClose={() => setIsCarouselOpen(false)}
                initialIndex={selectedImageIndex}
            />
            <FloatingNavCta to="/engineering" label="Ver arquitetura" />
        </div>
    );
};

export default Index;
