import { Quote, Star, Sparkles } from "lucide-react";

const HumanTouchSection = () => {
    return (
        <section className="py-4 lg:py-5 bg-background">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center mb-6 flex-wrap">
                        <img src="/favicon_io/logo_longa.png" alt="AgendAI - Logo" className="h-12 lg:h-16 mr-4" />
                        <h1 className="text-3xl lg:text-5xl font-bold">é a solução para estes problemas!</h1>
                    </div>
                </div>

                {/* Miguel's Story */}
                <div className="max-w-6xl mx-auto">
                    <div className="bg-gradient-card backdrop-blur-sm rounded-3xl overflow-hidden shadow-card-custom border">
                        <div className="grid lg:grid-cols-2 items-center">
                            {/* Photo */}
                            <div className="order-2 lg:order-1 h-full">
                                <img
                                    src="/imagens_site/Miguel_Santos.webp"
                                    alt="Miguel Santos - Barbeiro que usa AgendAI"
                                    className="w-full h-full object-cover min-h-[400px] lg:min-h-[500px]"
                                />
                            </div>

                            {/* Story */}
                            <div className="order-1 lg:order-2 space-y-6 p-8 lg:p-12 relative">
                                {/* Background decorative elements */}
                                <div className="absolute top-4 right-4 opacity-10">
                                    <Sparkles className="w-8 h-8 text-brand-orange animate-pulse" />
                                </div>

                                {/* Quote Icon */}
                                <div className="flex justify-start mb-4 relative">
                                    <div className="relative">
                                        <Quote className="w-12 h-12 text-brand-orange opacity-40 transform rotate-180" />
                                        <div className="absolute inset-0 w-12 h-12 bg-brand-orange/10 rounded-full blur-xl"></div>
                                    </div>
                                </div>

                                <blockquote className="text-lg lg:text-xl leading-relaxed text-foreground relative">
                                    <p className="italic font-medium mb-6 opacity-85">
                                        <span className="text-brand-orange">"</span>Era um caos! WhatsApp pipocando
                                        o dia todo... 'Que horas tem vaga?', 'Posso remarcar?'. Perdia mais tempo
                                        no celular do que cortando cabelo!
                                    </p>
                                    <p className="italic font-medium mb-6 opacity-85">
                                        Com o{" "}
                                        <span className="bg-gradient-primary bg-clip-text text-transparent font-bold relative">
                                            AgendAI
                                            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-primary opacity-30"></span>
                                        </span>
                                        , tudo mudou! Cliente manda mensagem, recebe resposta na hora e agenda
                                        sozinho. Só olho minha agenda de manhã e já sei como vai ser o dia.
                                    </p>
                                    <p className="italic font-medium mb-6 opacity-85">
                                        Resultado? Atendo{" "}
                                        <span className="text-green-600 dark:text-green-400 font-bold">
                                            muito mais gente{" "}
                                        </span>
                                        sem ficar grudado no celular. Agora não consigo mais trabalhar sem!
                                        <span className="text-brand-orange">"</span>
                                    </p>
                                </blockquote>

                                {/* Author Citation */}
                                <div className="pt-6 border-t border-gradient-to-r from-transparent via-brand-orange/20 to-transparent relative">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex-grow">
                                            <div className="flex items-center space-x-2 mb-1">
                                                <div className="font-bold text-foreground text-lg">
                                                    Miguel Santos
                                                </div>
                                                <span className="text-muted-foreground">•</span>
                                                <span className="text-muted-foreground">Barbeiro há 5 anos</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-sm">
                                                <span className="bg-gradient-primary bg-clip-text text-transparent font-semibold">
                                                    Early adopter do AgendAI
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <div className="bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 px-3 py-1 rounded-full text-xs font-medium">
                                                ✓ Verificado
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Transition to Solution */}
                <div className="text-center mt-16">
                    <div className="bg-gradient-hero rounded-2xl p-6 lg:p-8 max-w-4xl mx-auto border relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-2 left-4 opacity-20">
                            <Sparkles className="w-6 h-6 text-brand-orange animate-bounce" />
                        </div>
                        <div className="absolute bottom-2 right-4 opacity-20">
                            <Star className="w-5 h-5 text-yellow-400 animate-pulse" />
                        </div>

                        <div className="relative z-10">
                            <p className="text-lg lg:text-xl font-medium text-foreground mb-4 flex items-center justify-center flex-wrap gap-2">
                                <span className="text-2xl">🚀</span>
                                <span className="text-brand-orange font-bold bg-brand-orange/10 px-3 py-1 rounded-lg">
                                    Como o Miguel conseguiu isso?
                                </span>
                            </p>
                            <p className="text-muted-foreground text-base lg:text-lg">
                                Com as{" "}
                                <span className="bg-gradient-primary bg-clip-text text-transparent font-bold text-xl">
                                    4 ferramentas
                                </span>{" "}
                                do{" "}
                                <span className="bg-gradient-primary bg-clip-text text-transparent font-bold">
                                    AgendAI
                                </span>{" "}
                                que você vai conhecer agora:
                            </p>

                            {/* Arrow pointing down */}
                            <div className="mt-6 opacity-60">
                                <div className="animate-bounce">
                                    <svg
                                        className="w-6 h-6 mx-auto text-brand-orange"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HumanTouchSection;
