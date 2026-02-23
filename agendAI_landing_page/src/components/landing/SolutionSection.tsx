import { Bot, Calendar, Shield, Zap, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type SolutionSectionProps = {
    onOpenCarousel: (index: number) => void;
    offsetStart?: number;
};

const SolutionSection = ({ onOpenCarousel, offsetStart = 0 }: SolutionSectionProps) => {
    // Definir todas as imagens na ordem que aparecem no site (esquerda para direita, cima para baixo)
    const allImages = [
        {
            src: "/imagens_site/print_whatsapp.webp",
            alt: "Conversa WhatsApp com IA agendando automaticamente",
        },
        {
            src: "/imagens_site/dashboard.webp",
            alt: "Dashboard com receita semanal e mensal",
        },
        {
            src: "/imagens_site/cartão_fidelidade.webp",
            alt: "Cartão de fidelidade digital no celular",
        },
        {
            src: "/imagens_site/site_personalizado.webp",
            alt: "Site personalizado da barbearia",
        },
    ];

    const handleImageClick = (index: number) => {
        onOpenCarousel(index + offsetStart);
    };

    const features = [
        {
            icon: Bot,
            title: "Assistente IA 24/7 no WhatsApp",
            description:
                "Responde clientes instantaneamente, marca horários, reagenda e dispara lembretes automáticos. Trabalha 24h por dia, mesmo quando você está dormindo.",
            benefit: "Cliente sempre tem resposta rápida",
            visualNote: "[ESPAÇO PARA PRINT: Conversa WhatsApp com IA agendando]",
        },
        {
            icon: Calendar,
            title: "Dashboard Inteligente",
            description:
                "Descubra na hora quanto você faturou na semana e no mês, quantos clientes novos conquistou. Tudo simples e fácil de entender, sem planilhas complicadas.",
            benefit: "Você sabe exatamente quanto está ganhando",
            visualNote: "[ESPAÇO PARA PRINT: Dashboard com receita semanal/mensal]",
        },
        {
            icon: Shield,
            title: "Cartão de Fidelidade Digital",
            description:
                "O clássico cartão de carimbo, só que automático! Você define os pontos e a recompensa. A cada corte, sistema carimba sozinho até completar e liberar o brinde.",
            benefit: "Cliente sempre volta e indica amigos",
            visualNote: "[ESPAÇO PARA PRINT: Cartão fidelidade no celular]",
        },
        {
            icon: Zap,
            title: "Site com a cara da sua barbearia",
            description:
                "Site profissional que vende por você 24h! Mostra seus serviços, preços e localização no Google Maps. Cliente encontra, gosta e agenda na mesma hora!",

            benefit: "Você aparece no Google e pega mais clientes",
            visualNote: "[ESPAÇO PARA PRINT: Site personalizado da barbearia]",
        },
    ];

    return (
        <section className="py-10 bg-background">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-gradient-primary/10 rounded-full px-6 py-2 mb-6">
                        <Zap className="w-5 h-5 text-brand-orange" />
                        <span className="font-medium text-brand-orange">DIFERENCIAIS DO AGENDAI</span>
                    </div>

                    <h2 className="text-4xl lg:text-5xl font-bold mb-6">
                        4 ferramentas que vão
                        <span className="bg-gradient-primary bg-clip-text text-transparent">
                            {" "}
                            transformar sua barbearia
                        </span>
                    </h2>

                    <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                        Não é só agendamento. É um sistema completo que trabalha para você ganhar mais dinheiro.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {features.map((feature, index) => (
                        <div key={index} className="group">
                            <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 shadow-card-custom border h-full transition-all duration-300 group-hover:shadow-brand">
                                {/* Feature Header */}
                                <div className="flex items-start space-x-4 mb-6">
                                    <div className="flex-shrink-0 w-14 h-14 bg-gradient-primary rounded-xl flex items-center justify-center shadow-brand">
                                        <feature.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Visual Space Placeholder */}
                                <div className="bg-muted/20 rounded-xl mb-4 border overflow-hidden">
                                    <img
                                        src={allImages[index].src}
                                        alt={allImages[index].alt}
                                        className="w-full h-auto rounded-lg shadow-sm cursor-pointer transition-transform hover:scale-105"
                                        onClick={() => handleImageClick(index)}
                                    />
                                </div>

                                {/* Benefit */}
                                <div className="bg-gradient-hero rounded-xl p-4 border">
                                    <div className="flex items-start space-x-3">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <p className="font-medium text-foreground">{feature.benefit}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Simple CTA */}
                <div className="text-center">
                    <div className="bg-gradient-hero rounded-3xl p-8 border">
                        <h3 className="text-2xl font-bold mb-4">Pronto para transformar sua barbearia?</h3>
                        <p className="text-muted-foreground mb-6">
                            Configure uma vez e deixe o sistema trabalhar para você 24 horas por dia.
                        </p>
                        <Button
                            size="lg"
                            className="bg-gradient-primary hover:opacity-90 text-white shadow-brand"
                            onClick={() => window.open("https://agendai.io/billing/subscribe/", "_blank")}>
                            <Zap className="w-5 h-5 mr-2" />
                            Quero testar agora
                        </Button>
                    </div>
                </div>

                {/* Carousel handled globally */}
            </div>
        </section>
    );
};

export default SolutionSection;
