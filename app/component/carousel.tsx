import { useState } from "react";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";

interface CarouselProps {
  images: string[];
}

export default function Carousel({ images }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleFullscreen = () => {
    setIsFullscreen((prev) => !prev);
  };

  return (
    <div className="relative bg-gray-800">
      <img
        className="mx-auto w-full sm:w-4/5 h-auto cursor-zoom-in"
        src={`/${images[currentIndex]}`}
        alt={`Image ${currentIndex + 1}`}
        onClick={toggleFullscreen}
      />
      <button
        className="absolute top-1/2 left-0 -translate-y-1/2 p-2 hover:opacity-100 opacity-50"
        onClick={prevImage}
      >
        <CgChevronLeft className="text-4xl md:text-8xl text-white" />
      </button>
      <button
        className="absolute top-1/2 right-0 -translate-y-1/2 p-2 hover:opacity-100 opacity-50"
        onClick={nextImage}
      >
        <CgChevronRight className="text-4xl md:text-8xl text-white" />
      </button>
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 transform flex items-center justify-center gap-2">
        {images.map((_, index) => (
          <button
            type="button"
            onClick={() => goToImage(index)}
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full mb-1 ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {isFullscreen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center">
          <button
            className="absolute top-4 right-4 px-3 py-1 rounded-md bg-gray-900 text-white text-sm hover:bg-gray-700"
            onClick={toggleFullscreen}
          >
            Close
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 hover:opacity-100 opacity-70"
            onClick={prevImage}
          >
            <CgChevronLeft className="text-5xl md:text-7xl text-white" />
          </button>
          <img
            className="max-h-[90vh] max-w-[90vw] object-contain"
            src={`/${images[currentIndex]}`}
            alt={`Image ${currentIndex + 1}`}
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 hover:opacity-100 opacity-70"
            onClick={nextImage}
          >
            <CgChevronRight className="text-5xl md:text-7xl text-white" />
          </button>
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 transform flex items-center justify-center gap-2">
            {images.map((_, index) => (
              <button
                type="button"
                onClick={() => goToImage(index)}
                key={index}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
                  index === currentIndex ? "bg-blue-500" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
