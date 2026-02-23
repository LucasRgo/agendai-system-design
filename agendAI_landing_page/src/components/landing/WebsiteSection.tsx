import { Globe, Share2, Settings, MapPin, Calendar, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";

type WebsiteSectionProps = {
    onOpenCarousel: (index: number) => void;
    offsetStart?: number;
};

const WebsiteSection = ({ onOpenCarousel, offsetStart = 0 }: WebsiteSectionProps) => {

    // Definir todas as imagens na ordem que aparecem no site (esquerda para direita, cima para baixo)
    const allImages = [
        {
            src: "/imagens_site/agendamento_web.webp",
            alt: "Tela de agendamento via web que o cliente vê"
        },
        {
            src: "/imagens_site/agenda.webp",
            alt: "Painel da agenda para gerenciamento"
        }
    ];

    const handleImageClick = (index: number) => {
        onOpenCarousel(index + offsetStart);
    };

    const websiteFeatures = [
        {
            icon: Share2,
            title: "Sua marca na internet",
            description:
                "Tenha seu próprio cantinho digital com cara profissional. Mande o link no WhatsApp e cliente já vê que você é sério no negócio.",
        },
        {
            icon: Smartphone,
            title: "Funciona em qualquer celular",
            description:
                "Não importa se é Android ou iPhone. Cliente acessa fácil pelo celular e agenda rapidinho.",
        },
    ];

    const systemFeatures = [
        {
            icon: Calendar,
            title: "Agenda online automática",
            description: "Cliente agenda sozinho pelo celular, qualquer hora do dia. Você só recebe o cliente.",
        },
        {
            icon: Settings,
            title: "Você configura pelo celular",
            description:
                "Coloca seus serviços, preços e horários direto do seu smartphone. Muda quando quiser, de qualquer lugar.",
        },
    ];

    return (
        <section className="py-8 bg-muted/20">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-gradient-primary/10 rounded-full px-6 py-2 mb-6">
                            <Globe className="w-5 h-5 text-brand-orange" />
                            <span className="font-medium text-brand-orange">SEU ESPAÇO DIGITAL COMPLETO</span>
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                            Site + Sistema de agendamento
                            <span className="bg-gradient-primary bg-clip-text text-transparent">
                                {" "}
                                tudo em um lugar
                            </span>
                        </h2>

                        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                            Sua barbearia ganha presença digital e agenda automática. Cliente marca horário
                            sozinho, você só precisa cortar.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8">
                        {/* Left Card - Website */}
                        <div className="bg-card rounded-3xl p-8 shadow-brand border">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 rounded-full px-4 py-2 mb-4">
                                    <Globe className="w-4 h-4" />
                                    <span className="text-sm font-medium">SEU SITE</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Sua barbearia na internet</h3>
                                <p className="text-muted-foreground">
                                    O cliente chega até você pelo link do seu site
                                </p>
                            </div>

                            {/* Website Preview Space */}
                            <div className="bg-muted/20 rounded-xl mb-6 border overflow-hidden">
                                <img
                                    src={allImages[0].src}
                                    alt={allImages[0].alt}
                                    className="w-full h-auto rounded-lg shadow-sm cursor-pointer transition-transform hover:scale-105"
                                    onClick={() => handleImageClick(0)}
                                />
                            </div>

                            {/* Website Features */}
                            <div className="space-y-4">
                                {websiteFeatures.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                                        <div className="flex-shrink-0 w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                                            <feature.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm mb-1">{feature.title}</h4>
                                            <p className="text-xs text-muted-foreground leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 text-center">
                                <div className="inline-flex items-center space-x-2 bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-xs font-medium">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full me-2"></div>
                                    Cliente encontra você fácil
                                </div>
                            </div>
                        </div>

                        {/* Right Card - System */}
                        <div className="bg-card rounded-3xl p-8 shadow-brand border">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center space-x-2 bg-orange-50 text-orange-700 rounded-full px-4 py-2 mb-4">
                                    <Calendar className="w-4 h-4" />
                                    <span className="text-sm font-medium">SEU SISTEMA</span>
                                </div>
                                <h3 className="text-2xl font-bold mb-4">Sua agenda automática</h3>
                                <p className="text-muted-foreground">
                                    Você controla tudo pelo painel administrativo
                                </p>
                            </div>

                            {/* System Preview Space */}
                            <div className="bg-muted/20 rounded-xl mb-6 border overflow-hidden">
                                <img
                                    src={allImages[1].src}
                                    alt={allImages[1].alt}
                                    className="w-full h-auto rounded-lg shadow-sm cursor-pointer transition-transform hover:scale-105"
                                    onClick={() => handleImageClick(1)}
                                />
                            </div>

                            {/* System Features */}
                            <div className="space-y-4">
                                {systemFeatures.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                                        <div className="flex-shrink-0 w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                                            <feature.icon className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-sm mb-1">{feature.title}</h4>
                                            <p className="text-xs text-muted-foreground leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 text-center">
                                <div className="inline-flex items-center space-x-2 bg-orange-50 text-orange-700 rounded-full px-3 py-1 text-xs font-medium">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full me-2"></div>
                                    Você controla tudo fácil
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="text-center mt-16">
                        <div className="bg-card rounded-2xl p-8 border">
                            <h3 className="text-2xl font-bold mb-4">Quer ver funcionando na prática?</h3>
                            <p className="text-muted-foreground mb-6">
                                Teste grátis por 7 dias. Configure sua barbearia e veja os agendamentos chegando
                                sozinhos.
                            </p>
                            <Button
                                size="lg"
                                className="bg-gradient-primary hover:opacity-90 text-white shadow-brand"
                                onClick={() => window.open("https://agendai.io/billing/subscribe/", "_blank")}>
                                Começar teste grátis
                            </Button>
                            <p className="text-xs text-muted-foreground mt-2">
                                Sem cartão • Cancelamento em 1 clique
                            </p>
                        </div>
                    </div>

                    {/* Carousel handled globally */}
                </div>
            </div>
        </section>
    );
};

export default WebsiteSection;
