import React from "react";
import { Dialog, DialogContent, DialogOverlay } from "@/components/ui/dialog";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ImageData {
    src: string;
    alt: string;
}

interface ImageCarouselModalProps {
    images: ImageData[];
    isOpen: boolean;
    onClose: () => void;
    initialIndex?: number;
}

export const ImageCarouselModal: React.FC<ImageCarouselModalProps> = ({
    images,
    isOpen,
    onClose,
    initialIndex = 0,
}) => {
    const [api, setApi] = React.useState<any>();

    React.useEffect(() => {
        if (api && isOpen) {
            api.scrollTo(initialIndex);
        }
    }, [api, initialIndex, isOpen]);

    // Adicionar navegação por teclado
    React.useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (!isOpen || !api) return;

            if (event.key === "Escape") {
                onClose();
            } else if (event.key === "ArrowLeft") {
                api.scrollPrev();
            } else if (event.key === "ArrowRight") {
                api.scrollNext();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, api, onClose]);

    // Fechar ao clicar fora da imagem ou dos botões de navegação
    const handleContentClick = (event: React.MouseEvent) => {
        if (!isOpen) return;
        const target = event.target as HTMLElement;
        const clickedOnImage = target.closest("img");
        const clickedOnNav = target.closest('[data-carousel-nav="true"]');
        if (!clickedOnImage && !clickedOnNav) {
            onClose();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogOverlay className="bg-black/90" onClick={onClose} />
            <DialogContent
                className="max-w-[95vw] max-h-[95vh] w-full h-full border-0 bg-transparent p-0 focus:outline-none"
                onPointerDownOutside={onClose}
                onClick={handleContentClick}>
                {/* Close Button */}

                {/* Carousel */}
                <div className="flex items-center justify-center w-full h-full group">
                    <Carousel
                        setApi={setApi}
                        className="w-full max-w-[92vw] relative"
                        opts={{
                            align: "center",
                            loop: true,
                        }}>
                        <CarouselContent>
                            {images.map((image, index) => (
                                <CarouselItem key={index} className="flex items-center justify-center">
                                    <div className="flex items-center justify-center w-full">
                                        <img
                                            src={image.src}
                                            alt={image.alt}
                                            className="w-auto h-auto max-w-[92vw] max-h-[85vh] object-contain rounded-lg shadow-2xl"
                                        />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Navigation Buttons - só aparecem quando há mais de 1 imagem */}
                        {images.length > 1 && (
                            <>
                                <CarouselPrevious
                                    data-carousel-nav="true"
                                    className="left-2 h-8 w-8 bg-black/20 text-white/60 border-0 hover:bg-black/40 hover:text-white ring-1 ring-white/30 transition-all duration-200 opacity-0 group-hover:opacity-100"
                                />
                                <CarouselNext
                                    data-carousel-nav="true"
                                    className="right-2 h-8 w-8 bg-black/20 text-white/60 border-0 hover:bg-black/40 hover:text-white ring-1 ring-white/30 transition-all duration-200 opacity-0 group-hover:opacity-100"
                                />
                            </>
                        )}
                    </Carousel>
                </div>

                {/* Image Counter - só aparece quando há mais de 1 imagem */}
                {images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/40 text-white px-3 py-1 rounded-full text-xs">
                        <ImageCounter api={api} totalImages={images.length} />
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
};

// Componente separado para o contador de imagens
const ImageCounter: React.FC<{ api: any; totalImages: number }> = ({ api, totalImages }) => {
    const [current, setCurrent] = React.useState(0);

    React.useEffect(() => {
        if (!api) return;

        setCurrent(api.selectedScrollSnap());

        const onSelect = () => {
            setCurrent(api.selectedScrollSnap());
        };

        api.on("select", onSelect);
        return () => api.off("select", onSelect);
    }, [api]);

    return (
        <span>
            {current + 1} de {totalImages}
        </span>
    );
};
