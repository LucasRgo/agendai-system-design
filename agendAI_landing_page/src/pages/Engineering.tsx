import FloatingNavCta from "@/components/FloatingNavCta";
import { engineeringDiagrams, engineeringSections } from "@/content/engineering";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Workflow } from "lucide-react";

const Engineering = () => {
  const baseUrl = import.meta.env.BASE_URL;
  const withBase = (path: string) => `${baseUrl}${path}`.replace(/([^:]\/)\/+/g, "$1");

  return (
    <div className="min-h-screen overflow-x-hidden bg-gradient-hero text-foreground">
      <section className="border-b border-border/50">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <Badge className="mb-4 bg-brand-orange text-white hover:bg-brand-orange/90">Hub técnico</Badge>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight sm:text-5xl">
            Arquitetura e System Design do agendAI
          </h1>
          <p className="mt-5 max-w-3xl text-lg text-muted-foreground">
            Decisões de engenharia, diagramas de arquitetura e documentação de domínio para
            entendimento rápido da plataforma.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild className="bg-gradient-primary text-white hover:opacity-90">
              <a href="#diagramas">Ver diagramas</a>
            </Button>
            <Button asChild variant="outline" className="border-brand-orange/40">
              <a href="#decisoes">Ver decisões</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="decisoes" className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center gap-3">
          <Workflow className="h-5 w-5 text-brand-orange" />
          <h2 className="text-2xl font-semibold">Decisões e documentação</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {engineeringSections.map((section) => (
            <article
              key={section.id}
              className="rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold">{section.title}</h3>
              <p className="mt-3 text-muted-foreground">{section.summary}</p>
              <ul className="mt-4 space-y-2 text-sm text-foreground/90">
                {section.bullets.map((bullet) => (
                  <li key={bullet}>• {bullet}</li>
                ))}
              </ul>
              <Button asChild variant="ghost" className="mt-4 px-0 text-brand-orange hover:text-brand-gold">
                <a href={withBase(section.detailsPath)} target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-4 w-4" />
                  Ver doc completo
                </a>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section id="diagramas" className="container mx-auto px-4 pb-20 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-2xl font-semibold">Diagramas técnicos</h2>
        <div className="grid gap-6 lg:grid-cols-3">
          {engineeringDiagrams.map((diagram) => {
            const imageSrc = withBase(diagram.imagePath);

            return (
              <article
                key={diagram.id}
                className="rounded-2xl border border-border/60 bg-card/60 p-4 backdrop-blur-sm"
              >
                <img
                  src={imageSrc}
                  alt={diagram.title}
                  className="h-52 w-full rounded-xl border border-border/50 object-cover object-top"
                  loading="lazy"
                />
                <h3 className="mt-4 text-lg font-semibold">{diagram.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{diagram.description}</p>
                <a
                  className="mt-3 inline-flex text-sm font-medium text-brand-orange hover:text-brand-gold"
                  href={imageSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Abrir diagrama em tamanho real
                </a>
              </article>
            );
          })}
        </div>
      </section>

      <FloatingNavCta to="/" label="Ver produto" direction="back" />
    </div>
  );
};

export default Engineering;
