import FloatingNavCta from "@/components/FloatingNavCta";
import {
    engineeringDiagrams,
    engineeringSections,
} from "@/content/engineering";
import { decisionDocComponents } from "@/components/engineering/decision-docs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ImageCarouselModal } from "@/components/ui/image-carousel-modal";
import {
    ChevronLeft,
    ChevronRight,
    Coins,
    Database,
    FileText,
    HardDrive,
    Network,
    ShieldCheck,
    Workflow,
    X,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

const Engineering = () => {
    const [isDiagramCarouselOpen, setIsDiagramCarouselOpen] = useState(false);
    const [selectedDiagramIndex, setSelectedDiagramIndex] = useState(0);
    const [isDocsCarouselOpen, setIsDocsCarouselOpen] = useState(false);
    const [selectedDocIndex, setSelectedDocIndex] = useState(0);

    const baseUrl = import.meta.env.BASE_URL;
    const withBase = useCallback(
        (path: string) => `${baseUrl}${path}`.replace(/([^:]\/)\/+/g, "$1"),
        [baseUrl],
    );

    const diagramImages = useMemo(
        () =>
            engineeringDiagrams.map((diagram) => ({
                src: `${baseUrl}${diagram.imagePath}`.replace(
                    /([^:]\/)\/+/g,
                    "$1",
                ),
                alt: diagram.title,
            })),
        [baseUrl],
    );

    const decisionIcons = {
        architecture: Network,
        infra: HardDrive,
        tenancy: ShieldCheck,
        database: Database,
        payments: Coins,
    } as const;

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!isDocsCarouselOpen) return;

            if (event.key === "Escape") {
                setIsDocsCarouselOpen(false);
            } else if (event.key === "ArrowLeft") {
                event.preventDefault();
                setSelectedDocIndex((previousIndex) =>
                    previousIndex === 0
                        ? engineeringSections.length - 1
                        : previousIndex - 1,
                );
            } else if (event.key === "ArrowRight") {
                event.preventDefault();
                setSelectedDocIndex((previousIndex) =>
                    previousIndex === engineeringSections.length - 1
                        ? 0
                        : previousIndex + 1,
                );
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isDocsCarouselOpen]);

    const goToPreviousDoc = () => {
        setSelectedDocIndex((previousIndex) =>
            previousIndex === 0
                ? engineeringSections.length - 1
                : previousIndex - 1,
        );
    };

    const goToNextDoc = () => {
        setSelectedDocIndex((previousIndex) =>
            previousIndex === engineeringSections.length - 1
                ? 0
                : previousIndex + 1,
        );
    };

    const selectedSection = engineeringSections[selectedDocIndex];
    const SelectedDecisionDoc = decisionDocComponents[selectedSection.id];

    const openDiagramCarouselAt = (index: number) => {
        setSelectedDiagramIndex(index);
        setIsDiagramCarouselOpen(true);
    };

    const openDocsCarouselAt = (index: number) => {
        setSelectedDocIndex(index);
        setIsDocsCarouselOpen(true);
    };

    return (
        <div className="min-h-screen overflow-x-hidden bg-gradient-hero text-foreground">
            <section className="relative border-b border-slate-700/60 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-slate-100">
                <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(to_right,rgba(148,163,184,0.2)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.2)_1px,transparent_1px)] [background-size:28px_28px]" />
                <div className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-brand-orange/20 blur-3xl" />
                <div className="relative container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
                    <Badge className="mb-4 border border-brand-orange/40 bg-brand-orange/15 text-brand-gold hover:bg-brand-orange/25">
                        Hub técnico
                    </Badge>
                    <h1 className="max-w-4xl text-4xl font-bold leading-tight text-white sm:text-5xl">
                        Arquitetura e{" "}
                        <span className="rounded-md bg-brand-orange/20 px-2 py-1 text-brand-gold ring-1 ring-brand-orange/40">
                            System Design
                        </span>{" "}
                        do agendAI
                    </h1>
                    <p className="mt-5 max-w-3xl text-lg text-slate-200">
                        Decisões de engenharia, diagramas de arquitetura e
                        documentação de domínio para entendimento rápido da
                        plataforma.
                    </p>
                    <div className="mt-5 h-1 w-28 rounded-full bg-gradient-to-r from-brand-orange to-brand-gold" />
                    <div className="mt-8 flex flex-wrap gap-3">
                        <Button
                            asChild
                            className="bg-slate-100 text-slate-900 hover:bg-white"
                        >
                            <a href="#diagramas">Ver diagramas</a>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            className="border-brand-orange/50 bg-brand-orange/10 text-brand-gold hover:bg-brand-orange/20"
                        >
                            <a href="#decisoes">Ver decisões</a>
                        </Button>
                    </div>
                </div>
            </section>

            <section
                id="decisoes"
                className="container mx-auto px-4 py-16 sm:px-6 lg:px-8"
            >
                <div className="mb-8 flex items-center gap-3">
                    <Workflow className="h-5 w-5 text-brand-orange" />
                    <h2 className="text-2xl font-semibold">
                        Decisões e documentação
                    </h2>
                </div>
                <div className="mx-auto grid w-full max-w-6xl gap-6 md:grid-cols-2">
                    {engineeringSections.map((section, index) => {
                        const SectionIcon =
                            decisionIcons[
                                section.id as keyof typeof decisionIcons
                            ] ?? FileText;
                        const isFeatured = index === 0;

                        return (
                            <article
                                key={section.id}
                                className={`rounded-2xl border bg-card/70 p-6 shadow-brand backdrop-blur-sm sm:p-8 ${
                                    isFeatured
                                        ? "border-brand-gold/60 bg-gradient-to-br from-brand-orange/10 via-card/80 to-brand-gold/10 ring-1 ring-brand-orange/40 md:col-span-2"
                                        : "border-brand-orange/30"
                                }`}
                            >
                                <div className="mb-5 flex items-start gap-4">
                                    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-gradient-primary shadow-brand">
                                        <SectionIcon className="h-12 w-12 text-white" />
                                    </div>
                                    <div>
                                        {isFeatured && (
                                            <Badge className="mb-2 border-brand-gold/50 bg-brand-orange/15 text-brand-gold hover:bg-brand-orange/20">
                                                Destaque
                                            </Badge>
                                        )}
                                        <h3 className="text-xl font-semibold">
                                            {section.title}
                                        </h3>
                                        <p className="mt-2 text-muted-foreground">
                                            {section.summary}
                                        </p>
                                    </div>
                                </div>
                                <ul className="mt-4 space-y-2 text-sm text-foreground/90">
                                    {section.bullets.map((bullet) => (
                                        <li key={bullet}>• {bullet}</li>
                                    ))}
                                </ul>
                                <div className=" flex justify-end">
                                    <Button
                                        type="button"
                                        className="bg-gradient-primary text-end text-white shadow-brand hover:opacity-95"
                                        onClick={() => openDocsCarouselAt(index)}
                                    >
                                        <FileText className="mr-2 h-4 w-4" />
                                        Ver doc completo
                                    </Button>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </section>

            <section
                id="diagramas"
                className="container mx-auto px-4 pb-20 sm:px-6 lg:px-8"
            >
                <h2 className="mb-8 text-2xl font-semibold">
                    Diagramas técnicos
                </h2>
                <div className="grid gap-6 lg:grid-cols-3">
                    {engineeringDiagrams.map((diagram, index) => {
                        const imageSrc = withBase(diagram.imagePath);

                        return (
                            <article
                                key={diagram.id}
                                className="rounded-2xl border border-border/60 bg-card/60 p-4 backdrop-blur-sm"
                            >
                                <button
                                    type="button"
                                    className="w-full rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange/60"
                                    onClick={() => openDiagramCarouselAt(index)}
                                >
                                    <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-border/50 bg-muted/30">
                                        <img
                                            src={imageSrc}
                                            alt={diagram.title}
                                            className="h-full w-full object-cover object-center transition-transform duration-300 hover:scale-[1.01]"
                                            loading="lazy"
                                        />
                                    </div>
                                </button>
                                <h3 className="mt-4 text-lg font-semibold">
                                    {diagram.title}
                                </h3>
                                <p className="mt-2 text-sm text-muted-foreground">
                                    {diagram.description}
                                </p>
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

            <ImageCarouselModal
                images={diagramImages}
                isOpen={isDiagramCarouselOpen}
                onClose={() => setIsDiagramCarouselOpen(false)}
                initialIndex={selectedDiagramIndex}
            />

            <Dialog
                open={isDocsCarouselOpen}
                onOpenChange={setIsDocsCarouselOpen}
            >
                <DialogContent
                    onPointerDownOutside={() => setIsDocsCarouselOpen(false)}
                    className="h-[92vh] w-[96vw] max-w-[96vw] border-0 bg-transparent p-0 [&>button]:hidden"
                >
                    <DialogTitle className="sr-only">
                        Documento tecnico: {selectedSection.title}
                    </DialogTitle>

                    <div
                        className="relative flex h-full w-full items-center justify-center overflow-y-auto"
                        onPointerDown={(event) => {
                            if (event.target === event.currentTarget) {
                                setIsDocsCarouselOpen(false);
                            }
                        }}
                    >
                        {engineeringSections.length > 1 && (
                            <Button
                                type="button"
                                size="icon"
                                variant="ghost"
                                onClick={goToPreviousDoc}
                                className="absolute left-2 top-1/2 z-20 -translate-y-1/2 bg-black/45 text-white hover:bg-black/65 sm:left-4"
                            >
                                <ChevronLeft className="h-5 w-5" />
                                <span className="sr-only">
                                    Documento anterior
                                </span>
                            </Button>
                        )}

                        <article className="mx-auto flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-brand-orange/30 bg-background/95 shadow-brand">
                            <header className="flex items-start justify-between border-b border-border/60 p-4 sm:px-6 sm:py-5">
                                <div>
                                    <h3 className="text-xl font-semibold text-brand-gold">
                                        {selectedSection.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-muted-foreground">
                                        Documento {selectedDocIndex + 1} de{" "}
                                        {engineeringSections.length}
                                    </p>
                                </div>
                                <Button
                                    type="button"
                                    size="icon"
                                    variant="ghost"
                                    onClick={() => setIsDocsCarouselOpen(false)}
                                    className="bg-black/10 text-foreground hover:bg-black/20"
                                >
                                    <X className="h-5 w-5" />
                                    <span className="sr-only">Fechar</span>
                                </Button>
                            </header>

                            <div className="min-h-0 flex-1 overflow-y-auto p-4 sm:px-6 sm:py-5">
                                <div className="prose prose-sm max-w-none text-foreground sm:prose-base prose-headings:text-foreground prose-p:text-foreground prose-li:text-foreground prose-strong:text-foreground prose-code:text-brand-orange prose-pre:bg-muted prose-pre:text-foreground">
                                    {SelectedDecisionDoc ? (
                                        <SelectedDecisionDoc />
                                    ) : (
                                        <p>
                                            Documento nao disponivel para esta
                                            secao.
                                        </p>
                                    )}
                                </div>
                            </div>

                            <footer className="flex items-center justify-between border-t border-border/60 p-4 sm:px-6 sm:py-4">
                                <span className="text-sm text-muted-foreground">
                                    Use as setas para navegar entre os docs.
                                </span>
                                <div className="flex items-center gap-2">
                                    <Button
                                        type="button"
                                        size="sm"
                                        variant="outline"
                                        onClick={goToPreviousDoc}
                                        disabled={
                                            engineeringSections.length <= 1
                                        }
                                    >
                                        Anterior
                                    </Button>
                                    <Button
                                        type="button"
                                        size="sm"
                                        variant="outline"
                                        onClick={goToNextDoc}
                                        disabled={
                                            engineeringSections.length <= 1
                                        }
                                    >
                                        Próximo
                                    </Button>
                                </div>
                            </footer>
                        </article>

                        {engineeringSections.length > 1 && (
                            <Button
                                type="button"
                                size="icon"
                                variant="ghost"
                                onClick={goToNextDoc}
                                className="absolute right-2 top-1/2 z-20 -translate-y-1/2 bg-black/45 text-white hover:bg-black/65 sm:right-4"
                            >
                                <ChevronRight className="h-5 w-5" />
                                <span className="sr-only">
                                    Próximo documento
                                </span>
                            </Button>
                        )}
                    </div>
                </DialogContent>
            </Dialog>

            <FloatingNavCta to="/" label="Ver produto" direction="back" />
        </div>
    );
};

export default Engineering;
