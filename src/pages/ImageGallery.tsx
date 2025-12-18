import { useState, useEffect, TouchEvent } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  image: string;
  title: string;
  description: string;
}

interface ImageGalleryProps {
  items: GalleryItem[];
}

const ImageGallery = ({ items }: ImageGalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchDelta, setTouchDelta] = useState(0);

  const minSwipeDistance = 50;

  const openModal = (index: number) => {
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedIndex(null);
    document.body.style.overflow = "auto";
  };

  const goToNext = () => {
    if (selectedIndex === null) return;
    const nextIndex = (selectedIndex + 1) % items.length;
    setSelectedIndex(nextIndex);
  };

  const goToPrevious = () => {
    if (selectedIndex === null) return;
    const prevIndex = (selectedIndex - 1 + items.length) % items.length;
    setSelectedIndex(prevIndex);
  };

  const onTouchStart = (e: TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setTouchDelta(0);
  };

  const onTouchMove = (e: TouchEvent) => {
    if (touchStart === null) return;
    const currentTouch = e.targetTouches[0].clientX;
    setTouchDelta(currentTouch - touchStart);
  };

  const onTouchEnd = () => {
    if (touchStart === null || Math.abs(touchDelta) < minSwipeDistance) {
      setTouchDelta(0); // Reset if not a valid swipe
      return;
    }

    if (touchDelta < 0) goToNext();
    else goToPrevious();

    setTouchStart(null);
    setTouchDelta(0);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [selectedIndex, goToNext, goToPrevious, closeModal]);

  const selectedImage = selectedIndex !== null ? items[selectedIndex] : null;

  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item, index) => (
          <div
            key={item.title} // Use a unique string like title for the key
            className="relative rounded-lg overflow-hidden cursor-pointer group"
            onClick={() => openModal(index)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 flex items-end p-3">
              <p className="text-white text-sm font-semibold">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={closeModal}
        >
          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrevious();
            }}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white z-20"
            aria-label="Image précédente"
          >
            <ChevronLeft size={28} />
          </button>

          <div
            className="bg-card rounded-lg max-w-3xl w-full relative animate-in fade-in-0 zoom-in-95"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 md:-top-4 md:-right-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground z-20"
              aria-label="Fermer"
            >
              <X size={24} />
            </button>
            <div
              className="flex flex-col md:flex-row overflow-hidden rounded-lg"
              style={{ transform: `translateX(${touchDelta}px)`, transition: touchStart === null ? 'transform 0.3s ease-out' : 'none' }}
            >
              <div className="w-full md:w-1/2 relative">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-64 md:h-auto object-cover md:rounded-l-lg pointer-events-none"
                />
              </div>
              <div className="p-6 flex flex-col justify-center md:w-1/2">
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-muted-foreground">
                  {selectedImage.description}
                </p>
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white z-20"
            aria-label="Image suivante"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;