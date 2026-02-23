import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQSection = () => {
    const whatsappUrl = "https://wa.me/5563992060528?text=Ol%C3%A1%20vim%20pelo%20site%20do%20agendai";
    const faqs = [
        {
            question: "Como funciona o atendimento por IA no WhatsApp?",
            answer: "Nossa IA é treinada para barbearias. Ela entende pedidos sobre horários, serviços e preços, agenda automaticamente e responde em segundos. Funciona 24h por dia, mesmo quando você está dormindo ou ocupado.",
        },
        {
            question: "Preciso trocar meu número do WhatsApp?",
            answer: "Não! Você mantém seu número atual. Nosso sistema se conecta ao seu WhatsApp em poucos minutos e você continua usando o mesmo número que seus clientes já conhecem.",
        },
        {
            question: "Como eu conecto meu WhatsApp?",
            answer: "É só clicar na notificação que aparece no painel e escanear o QR Code com seu WhatsApp. Em menos de 2 minutos você já está pronto para começar a atender com IA.",
        },
        {
            question: "Existe limite de barbeiros ou serviços cadastrados?",
            answer: "Não! Você pode cadastrar quantos profissionais e serviços quiser, cada um com suas cores, preços e durações definidos por você.",
        },
        {
            question: "O sistema envia lembretes para os clientes?",
            answer: "Sim! O AgendAI envia lembretes automáticos pelo WhatsApp, reduzindo faltas e atrasos sem você precisar se preocupar.",
        },
        {
            question: "Meus clientes vão perceber que é um robô?",
            answer: "A IA conversa de forma natural e humanizada. Muitos clientes nem percebem que é uma assistente virtual e elogiam a rapidez. Você ainda pode dar um nome a ela para ficar com a cara da sua barbearia.",
        },
        {
            question: "Posso oferecer cartão fidelidade?",
            answer: "Sim! O AgendAI já vem com programa de fidelidade integrado. Seus clientes acumulam pontos automaticamente a cada atendimento e podem resgatar recompensas sem burocracia.",
        },
        {
            question: "Como funciona o teste gratuito de 7 dias?",
            answer: "Durante 7 dias você tem acesso completo a todas as funcionalidades, sem precisar de cartão de crédito. É só se cadastrar, conectar seu WhatsApp e começar a usar.",
        },
        {
            question: "Posso usar em mais de uma barbearia?",
            answer: "O AgendAI foi planejado para atender uma barbearia por vez, garantindo que cada negócio tenha um sistema exclusivo e otimizado. Se você administra mais de uma unidade, pode contratar uma conta separada para cada barbearia e manter tudo organizado.",
        },        
    ];

    return (
        <section className="py-8 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center space-x-2 bg-gradient-primary/10 rounded-full px-6 py-2 mb-6">
                            <HelpCircle className="w-5 h-5 text-brand-orange" />
                            <span className="font-medium text-brand-orange">DÚVIDAS FREQUENTES</span>
                        </div>

                        <h2 className="text-4xl font-bold mb-4">
                            Ainda tem
                            <span className="bg-gradient-primary bg-clip-text text-transparent"> dúvidas</span>?
                        </h2>

                        <p className="text-xl text-muted-foreground">
                            Respondemos as principais perguntas dos barbeiros sobre o AgendAI
                        </p>
                    </div>

                    {/* FAQ Accordion */}
                    <div className="bg-gradient-card backdrop-blur-sm rounded-2xl p-8 shadow-card-custom border">
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                                    <AccordionTrigger className="text-left font-semibold text-foreground hover:text-brand-orange">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground leading-relaxed">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>

                    {/* Contact Support */}
                    <div className="mt-12 text-center">
                        <div className="bg-gradient-hero rounded-2xl p-8 border">
                            <h3 className="text-2xl font-bold mb-4 text-foreground">
                                Não encontrou sua resposta?
                            </h3>
                            <p className="text-muted-foreground mb-6">
                                Nossa equipe de suporte está aqui para ajudar! Entre em contato via WhatsApp e tire
                                todas suas dúvidas.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                                <a
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.108" />
                                    </svg>
                                    <span>Falar no WhatsApp</span>
                                </a>
                                <span className="text-sm text-muted-foreground">Resposta em até 15 minutos</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
