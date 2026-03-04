import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

interface ImageGalleryProps {
    images: string[];
}

export function ImageGallery({ images }: ImageGalleryProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    if (!images || images.length === 0) return null;

    return (
        <div className="space-y-4 my-8">
            {/* Main Image Grid */}
            <div className={`grid gap-3 ${images.length === 1 ? 'grid-cols-1' : 'grid-cols-2 md:grid-cols-3'}`}>
                {images.map((url, index) => (
                    <Dialog key={index}>
                        <DialogTrigger asChild>
                            <div
                                className="relative aspect-video group cursor-pointer overflow-hidden rounded-lg border border-border bg-muted"
                                onClick={() => setSelectedIndex(index)}
                            >
                                <img
                                    src={url}
                                    alt={`Imagem ${index + 1}`}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <Maximize2 className="text-white h-8 w-8" />
                                </div>
                            </div>
                        </DialogTrigger>
                        <DialogContent className="max-w-5xl p-0 bg-transparent border-none">
                            <div className="relative w-full h-[80vh] flex items-center justify-center">
                                <img
                                    src={images[selectedIndex]}
                                    alt="Ampliada"
                                    className="max-w-full max-h-full object-contain"
                                />

                                {images.length > 1 && (
                                    <>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
                                            }}
                                        >
                                            <ChevronLeft className="h-8 w-8" />
                                        </Button>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
                                            }}
                                        >
                                            <ChevronRight className="h-8 w-8" />
                                        </Button>
                                    </>
                                )}
                            </div>
                        </DialogContent>
                    </Dialog>
                ))}
            </div>
        </div>
    );
}
