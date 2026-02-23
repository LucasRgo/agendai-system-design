import { Button } from "@/components/ui/button";
import { Zap, CheckCircle, Clock, CreditCard, Gift, Shield, X, Headphones, Settings, Timer } from "lucide-react";

const CTASection = () => {
    const benefits = [
        { text: "7 dias grátis para testar tudo", icon: Gift },
        { text: "Sem cartão de crédito necessário", icon: Shield },
        { text: "Cancelamento a qualquer momento", icon: X },
        { text: "Suporte técnico incluso", icon: Headphones },
        { text: "Configuração feita para você", icon: Settings },
        { text: "Ativa em 2 minutos", icon: Timer },
        { text: "Cancela quando quiser", icon: CheckCircle },
    ];

    return (
        <section className="py-8 bg-gradient-hero">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Urgency Header */}
                    <div className="inline-flex items-center space-x-2 bg-destructive/10 rounded-full px-6 py-2 mb-6">
                        <Clock className="w-5 h-5 text-destructive" />
                        <span className="font-medium text-destructive">OFERTA LIMITADA</span>
                    </div>

                    {/* Main Headline */}
                    <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-foreground">
                        Pare de perder clientes
                        <br />
                        <span className="bg-gradient-primary bg-clip-text text-transparent">hoje mesmo</span>
                    </h2>

                    <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                        Junte os 3 pilares que todo barbeiro precisa: <strong>WhatsApp que responde sozinho + Dashboard completo + Site profissional</strong>
                    </p>

                    {/* Offer Box */}
                    <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-6 lg:p-12 shadow-brand border border-brand-orange/20 mb-8">
                        {/* Main Content Grid */}
                        <div className="grid lg:grid-cols-2 gap-1 items-start mb-8">
                            {/* Left - Benefits */}
                            <div className="lg:col-span-1">
                                <h3 className="text-lg font-semibold text-foreground mb-4 ms-8 text-center lg:text-left">
                                    O que você recebe:
                                </h3>
                                <div className="space-y-5">
                                    {benefits.map((benefit, index) => {
                                        const IconComponent = benefit.icon;
                                        return (
                                            <div key={index} className="flex items-start space-x-3">
                                                <IconComponent className="w-4 h-4 text-[hsl(var(--success-soft))] flex-shrink-0 mt-0.5" />
                                                <span className="text-sm text-foreground text-left">{benefit.text}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Right - Free Trial & CTA */}
                            <div className="lg:col-span-1 text-center">
                                {/* Free Trial - Centered and Softer */}
                                <div className="bg-[hsl(var(--success-soft))] text-white rounded-2xl p-6 mb-6 mx-auto max-w-sm mt-5">
                                    <div className="text-center">
                                        <div className="text-5xl lg:text-6xl font-bold mb-2">7</div>
                                        <div className="text-xl font-bold mb-1">DIAS GRÁTIS</div>
                                        <div className="text-md opacity font-bold">Sem cartão • Sem cobrança</div>
                                    </div>
                                </div>

                                {/* CTA Button - Directly below trial */}
                                <Button
                                    size="lg"
                                    className="w-full max-w-sm bg-gradient-primary hover:opacity-90 text-white shadow-brand mb-6 text-lg py-6 font-bold btn-shine btn-neon-glow"
                                    onClick={() => window.open('https://agendai.io/billing/subscribe/', '_blank')}>
                                    <Zap className="w-6 h-6 mr-3 zap-animate" />
                                    TESTE GRÁTIS AGORA
                                </Button>

                                {/* Price - Secondary line */}
                                <div className="mb-4">
                                    <div className="text-xs text-muted-foreground mb-1">Depois apenas:</div>
                                    <div className="text-3xl font-semibold text-foreground">R$ 149/mês</div>
                                    <div className="text-1xl text-muted-foreground line-through">De R$ 300/mês</div>
                                </div>
                            </div>
                        </div>

                        {/* Footer - Social Proof */}
                        <div className="border-t border-border/50 pt-4 text-center">
                            <p className="text-xs text-muted-foreground">
                                <span className="font-bold text-brand-orange">41</span> testadores iniciais •
                                <span className="text-foreground font-medium ml-1">Apenas 50 vagas no total!</span>
                            </p>
                        </div>
                    </div>
                    {/* Trust Indicators */}
                    <div className="grid md:grid-cols-3 gap-6 text-center relative z-100">
                        <div className="bg-card rounded-xl p-4 border border-border/30">
                            <div className="text-2xl font-bold text-green-600 mb-1">99%</div>
                            <div className="text-sm text-muted-foreground">Taxa de satisfação</div>
                        </div>
                        <div className="bg-card rounded-xl p-4 border border-border/30">
                            <div className="text-2xl font-bold text-brand-orange mb-1">41</div>
                            <div className="text-sm text-muted-foreground">Testadores iniciais</div>
                        </div>
                        <div className="bg-card rounded-xl p-4 border border-border/30">
                            <div className="text-2xl font-bold text-brand-gold mb-1">50</div>
                            <div className="text-sm text-muted-foreground">Vagas totais</div>
                        </div>
                    </div>

                    {/* Microcopy */}
                    <div className="mt-8 text-center">
                        <p className="text-sm text-muted-foreground">
                            <strong>Sem cartão de crédito</strong> • <strong>Cancelamento em 1 clique</strong>
                        </p>
                    </div>

                    {/* Final Message */}
                    <div className="mt-8 p-6 bg-gradient-primary/10 rounded-2xl border border-brand-orange/20">
                        <p className="text-foreground">
                            ⚡ <strong>Últimas vagas:</strong> Teste gratuito limitado aos primeiros 50 barbeiros.
                            Já temos <strong>41 vagas preenchidas</strong>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
