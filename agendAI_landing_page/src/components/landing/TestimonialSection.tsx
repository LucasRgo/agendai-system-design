import { Star, Quote } from "lucide-react";

const TestimonialSection = () => {
    const testimonials = [
        {
            name: "Carlos Mendes",
            role: "Barbeiro há 8 anos",
            location: "São Paulo, SP",
            content:
                "Antes eu recebia umas 30 mensagens por dia no WhatsApp e vivia esquecendo de responder. Com o AgendAI, minha assistente virtual cuida de tudo. Agora atendo 20% mais clientes por semana!",
            rating: 5,
            highlight: "+20% clientes por semana",
        },
        {
            name: "Roberto Silva",
            role: "Dono de barbearia",
            location: "Rio de Janeiro, RJ",
            content:
                "O melhor investimento que fiz! Antes tinha muita falta de cliente. Agora o sistema confirma automaticamente e as faltas caíram 80%. É impressionante!",
            rating: 5,
            highlight: "80% menos faltas",
        },
        {
            name: "João Ferreira",
            role: "Barbeiro profissional",
            location: "Belo Horizonte, MG",
            content:
                "Não precisei mais contratar recepcionista. A IA atende melhor que muito humano! Cliente adora a rapidez nas respostas. Vale cada centavo.",
            rating: 5,
            highlight: "Economia de R$ 2.000/mês",
        },
    ];

    return (
        <section className="py-8 bg-muted/20">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center space-x-2 bg-gradient-primary/10 rounded-full px-6 py-2 mb-6">
                        <Star className="w-5 h-5 text-brand-gold" />
                        <span className="font-medium text-brand-orange">DEPOIMENTOS REAIS</span>
                    </div>

                    <h2 className="text-4xl font-bold mb-4">
                        Barbeiros que saíram
                        <span className="bg-gradient-primary bg-clip-text text-transparent"> da correria </span>
                        e aumentaram o lucro
                    </h2>

                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Olha só como outros barbeiros resolveram os mesmos problemas que você tem hoje
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="group">
                            <div className="bg-card rounded-2xl p-6 shadow-card-custom border h-full transition-all duration-300 group-hover:shadow-brand group-hover:-translate-y-2">
                                {/* Quote Icon */}
                                <div className="flex items-center justify-between mb-4">
                                    <Quote className="w-8 h-8 text-brand-orange opacity-20" />
                                    <div className="flex space-x-1">
                                        {[...Array(testimonial.rating)].map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />
                                        ))}
                                    </div>
                                </div>

                                {/* Testimonial Content */}
                                <p className="text-foreground leading-relaxed mb-6 italic">
                                    "{testimonial.content}"
                                </p>

                                {/* Highlight */}
                                <div className="bg-gradient-hero rounded-xl p-3 mb-4 border">
                                    <div className="text-center">
                                        <div className="font-bold text-brand-orange">{testimonial.highlight}</div>
                                    </div>
                                </div>

                                {/* Author Info */}
                                <div className="flex items-center space-x-3">
                                    <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold">
                                        {testimonial.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                                        <div className="text-xs text-muted-foreground">{testimonial.location}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
