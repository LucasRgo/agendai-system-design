import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { MessageCircle, Calendar, Users, Zap } from "lucide-react";
import { useState } from "react";

const HeroSection = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const whatsappUrl = "https://wa.me/5563992060528?text=Ol%C3%A1%20vim%20pelo%20site%20do%20agendai";

    return (
        <section className="relative min-h-screen bg-gradient-hero flex items-center pt-28">
            {/* Fixed Header */}
            <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/60 bg-gradient-hero/80 backdrop-blur">
                <div className="container mx-auto px-4 h-20 flex items-center justify-start">
                    <a href="/" className="flex items-center space-x-3" aria-label="AgendAI - Página inicial">
                        <img src="/favicon_io/logo_longa.png" alt="AgendAI logo" className="h-10 w-auto" />
                    </a>
                </div>
            </header>
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-25"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ff6600' fill-opacity='0.4'%3E%3Ccircle cx='20' cy='20' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-5 max-w-7xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Main Message */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight">
                                Nunca mais perca um cliente por 
                                <span className="bg-gradient-primary bg-clip-text text-transparent">
                                    {" "}
                                    não responder rápido
                                </span>
                            </h1>
                            <p className="text-lg lg:text-xl text-muted-foreground max-w-2xl">
                                O primeiro sistema que junta <strong>IA no WhatsApp + Dashboard completo + Site personalizado</strong> para sua barbearia crescer no automático.
                            </p>
                        </div>

                        {/* Social Proof Numbers */}
                        <div className="flex space-x-4">
                            <div className="text-center">
                                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                                    +30%
                                </div>
                                <div className="text-sm text-muted-foreground">Mais clientes</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                                    -80%
                                </div>
                                <div className="text-sm text-muted-foreground">Menos faltas</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                                    24h
                                </div>
                                <div className="text-sm text-muted-foreground">Atendimento</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                                    15s
                                </div>
                                <div className="text-sm text-muted-foreground">Para Responder</div>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <Button
                                size="lg"
                                className="bg-gradient-primary hover:opacity-90 text-white shadow-brand text-base sm:text-lg py-4 sm:py-6 px-4 sm:px-8 w-full sm:w-auto"
                                onClick={() => window.open(whatsappUrl, "_blank")}>
                                <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                                <span className="hidden sm:inline">Teste grátis por 7 dias — sem cartão</span>
                                <span className="sm:hidden">Teste grátis 7 dias</span>
                            </Button>
                            <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                                <DialogTrigger asChild>
                                    <Button variant="outline" size="lg" className="border-2 w-full sm:w-auto py-4 sm:py-6">
                                        Ver Demo
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-md sm:max-w-lg p-0 bg-black border-none h-[90vh]">
                                    <div className="w-full h-full flex items-center justify-center">
                                        <iframe
                                            className="w-full h-full"
                                            src="https://www.youtube.com/embed/cIUXZlHVqK0?autoplay=1&controls=0&showinfo=0&modestbranding=1&rel=0&iv_load_policy=3&fs=1&cc_load_policy=0&disablekb=1"
                                            title="Demonstração AgendAI"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                                            allowFullScreen
                                            style={{
                                                border: 'none',
                                                aspectRatio: '9/16',
                                                maxHeight: '100%',
                                                maxWidth: '100%',
                                            }}
                                        />
                                    </div>
                                </DialogContent>
                            </Dialog>
                        </div>

                        {/* Trust Indicators */}
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                            <span className="flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                Sem cartão necessário
                            </span>
                            <span className="flex items-center">
                                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                                Cancelamento em 1 clique
                            </span>
                        </div>
                    </div>

                    {/* Right Column - Visual/Demo */}
                    <div className="relative mt-8 lg:mt-0 mb-4 w-full max-w-full overflow-hidden">
                        <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-4 sm:p-6 lg:p-8 border border-brand-orange/20 w-full max-w-full">
                            {/* Mock Chat Interface */}
                            <div className="space-y-4">
                                <div className="flex items-center space-x-3 mb-6">
                                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                        <MessageCircle className="w-5 h-5 text-white mx-auto" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-foreground">Barbearia CorteSeco</div>
                                        <div className="text-sm text-green-500">● Online - AgendAI</div>
                                    </div>
                                </div>

                                {/* Chat Messages */}
                                <div className="space-y-3 w-full">
                                    <div className="flex justify-end">
                                        <div className="bg-brand-orange text-white rounded-2xl rounded-br-md px-3 py-2 max-w-[75%] text-sm">
                                            Oi, queria marcar um horário para corte
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="bg-muted rounded-2xl rounded-bl-md px-3 py-2 max-w-[75%] text-sm">
                                            Oi! 👋 Claro! Que dia e horário você prefere?
                                        </div>
                                    </div>

                                    <div className="flex justify-end">
                                        <div className="bg-brand-orange text-white rounded-2xl rounded-br-md px-3 py-2 max-w-[75%] text-sm">
                                            Amanhã pela manhã, se tiver
                                        </div>
                                    </div>

                                    <div className="flex">
                                        <div className="bg-muted rounded-2xl rounded-bl-md px-3 py-2 max-w-[75%] text-sm">
                                            Perfeito! Tenho 9h e 10h30 disponíveis. Qual prefere?
                                        </div>
                                    </div>

                                    <div className="flex justify-center">
                                        <div className="bg-gradient-primary text-white rounded-xl px-3 py-2 text-xs sm:text-sm font-medium max-w-[90%] text-center">
                                            ✅ Agendamento confirmado para 9h
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 p-4 bg-gradient-hero rounded-xl border">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-3">
                                            <Calendar className="w-5 h-5 text-brand-orange" />
                                            <div>
                                                <div className="font-medium">João Silva</div>
                                                <div className="text-sm text-muted-foreground">
                                                    Corte masculino • 9:00
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-green-600 font-medium">Confirmado</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute top-2 right-2 lg:top-1 lg:right-1 bg-gradient-primary text-white rounded-full p-2 lg:p-3 shadow-brand">
                            <Users className="w-4 h-4 lg:w-6 lg:h-6" />
                        </div>
                        <div className="absolute bottom-2 left-2 lg:bottom-1 lg:left-1 bg-brand-gold text-white rounded-full p-2 lg:p-3 shadow-brand">
                            <Zap className="w-4 h-4 lg:w-6 lg:h-6" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
