import { MessageSquareX, CalendarX, TrendingDown, DollarSign } from "lucide-react";

const ProblemsSection = () => {
    const problems = [
        {
            icon: MessageSquareX,
            title: "Demora para responder no WhatsApp",
            description: "Cliente manda mensagem 14h, você só vê 18h. Ele já agendou com outro barbeiro.",
            impact: "Cliente perdido",
        },
        {
            icon: DollarSign,
            title: "Não sabe quanto faturou",
            description: "Final do mês chega e você não faz ideia se teve lucro ou prejuízo. Dinheiro no escuro.",
            impact: "Sem controle",
        },
        {
            icon: CalendarX,
            title: "Cartão de fidelidade físico",
            description: "Cliente perde o cartão, esquece em casa. Você perde a fidelização e ele vai embora.",
            impact: "Fidelidade perdida",
        },
        {
            icon: TrendingDown,
            title: "Não tem site próprio",
            description: "Clientes procuram no Google e acham só o concorrente. Você fica invisível online.",
            impact: "Menos clientes",
        },
    ];

    return (
        <section className="py-8 lg:py-10 bg-gradient-hero">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                        Você já passou por isso <span className="text-destructive">hoje</span>?
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Todo barbeiro conhece essa dor de cabeça. É hora de resolver de vez.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    {problems.map((problem, index) => (
                        <div
                            key={index}
                            className="bg-card/50 rounded-2xl p-6 shadow-brand border border-destructive/20 hover:border-destructive/40 transition-all duration-300 text-center">
                            <div className="w-16 h-16 bg-destructive/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                                <problem.icon className="w-8 h-8 text-destructive" />
                            </div>
                            <div className="text-sm font-bold text-destructive bg-destructive/10 px-3 py-1 rounded-full inline-block mb-3">
                                {problem.impact}
                            </div>
                            <h3 className="text-lg font-bold text-foreground mb-3">
                                {problem.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {problem.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Bottom Message */}
                <div className="text-center">
                    <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-6 lg:p-8 max-w-3xl mx-auto border border-destructive/20">
                        <p className="text-lg lg:text-xl font-medium text-foreground mb-4">
                            💰 <span className="text-destructive">Cada problema desses te custa dinheiro todos os dias</span>
                        </p>
                        <p className="text-muted-foreground">E se existisse uma forma de resolver tudo isso de uma vez?</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProblemsSection;
