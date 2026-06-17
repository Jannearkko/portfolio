import React, { useState } from 'react';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft, FaTimes } from 'react-icons/fa';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  type: string;
  description: string;
  technologies: string;
  skills: string;
  databases: string;
  images: string[];
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  type,
  description,
  technologies,
  skills,
  databases,
  images,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });

  const openImageModal = (index: number) => {
    setSelectedImageIndex(index);
    const img = new Image();
    img.src = images[index];
    img.onload = () => {
      setImageDimensions({ width: img.width, height: img.height });
    };
  };

  const closeImageModal = () => {
    setSelectedImageIndex(null);
  };

  const previousImage = () => {
    if (selectedImageIndex !== null) {
      const newIndex = (selectedImageIndex - 1 + images.length) % images.length;
      openImageModal(newIndex);
    }
  };

  const nextImage = () => {
    if (selectedImageIndex !== null) {
      const newIndex = (selectedImageIndex + 1) % images.length;
      openImageModal(newIndex);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="max-h-[calc(100vh-2rem)] w-full max-w-4xl overflow-y-auto rounded-xl border border-surface-600 bg-surface-900 p-8 shadow-card">
        <button
          type="button"
          onClick={onClose}
          className="float-right rounded-lg border border-surface-600 p-2 text-gray-400 transition-colors hover:text-white"
          aria-label="Close project details"
        >
          <FaTimes size={18} />
        </button>
        <h2 className="font-heading text-2xl font-bold">{title}</h2>
        <p className="mb-4 mt-1 text-sm uppercase tracking-wide text-accent">{type}</p>
        <p className="leading-relaxed text-gray-300" style={{ whiteSpace: 'pre-line' }}>
          {description}
        </p>

        <div className="mt-6 border-t border-surface-600 pt-6">
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">Stack</h3>
          <p className="text-gray-300">{technologies}</p>
        </div>

        <div className="mt-6 border-t border-surface-600 pt-6">
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
            Skills applied
          </h3>
          <p className="text-gray-300">{skills}</p>
        </div>

        <div className="mt-6 border-t border-surface-600 pt-6">
          <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-gray-500">
            Databases
          </h3>
          <p className="text-gray-300">{databases}</p>
        </div>

        <div className="mt-6 border-t border-surface-600 pt-6">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
            Gallery
          </h3>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {images.map((image, index) => (
              <button
                type="button"
                key={image}
                className="overflow-hidden rounded-lg border border-surface-600"
                onClick={() => openImageModal(index)}
              >
                <img src={image} alt={`${title} screenshot ${index + 1}`} className="w-full cursor-pointer" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedImageIndex !== null && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4">
          <div
            className="relative flex items-center justify-center overflow-hidden rounded-xl border border-surface-600 bg-surface-900 p-4"
            style={{
              width: `${Math.min(imageDimensions.width, window.innerWidth - 40)}px`,
              height: `${Math.min(imageDimensions.height, window.innerHeight - 40)}px`,
            }}
          >
            <button
              type="button"
              onClick={closeImageModal}
              className="absolute right-2 top-2 rounded-lg border border-surface-600 p-2 text-gray-400 hover:text-white"
              aria-label="Close image viewer"
            >
              <FaTimes size={18} />
            </button>
            <button
              type="button"
              onClick={previousImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
              aria-label="Previous image"
            >
              <FaArrowAltCircleLeft size={36} />
            </button>
            <img
              src={images[selectedImageIndex]}
              alt={`${title} - ${selectedImageIndex + 1}`}
              className="max-h-full max-w-full object-contain p-5"
            />
            <button
              type="button"
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white/80 hover:text-white"
              aria-label="Next image"
            >
              <FaArrowAltCircleRight size={36} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
