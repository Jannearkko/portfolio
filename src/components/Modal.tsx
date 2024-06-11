import React, { useState, useEffect } from 'react';
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

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, type, description, technologies, skills, databases, images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [imageDimensions, setImageDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

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
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-gradient-to-r from-gray-900 to-gray-900 p-8 rounded-lg shadow-lg w-full max-w-4xl max-h-[calc(100vh-30px)] overflow-y-auto">
        <button
          onClick={onClose}
          className="text-black bg-gray-300 hover:bg-gray-500 rounded-full px-3 py-1 float-right"
        >
          <FaTimes size={20} />
        </button>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-gray-400 mb-2 italic">{type}</p>
        <p className="mb-4" style={{ whiteSpace: 'pre-line' }}>{description}</p>

        <div className="border-t border-gray-700 mt-6 pt-6">
          <h3 className="text-xl font-bold mb-2">Stack</h3>
          <p className="text-gray-300 mb-4">{technologies}</p>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-6">
          <h3 className="text-xl font-bold mb-2">Skills Required</h3>
          <p className="text-gray-300 mb-4">{skills}</p>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-6">
          <h3 className="text-xl font-bold mb-2">Databases Used</h3>
          <p className="text-gray-300 mb-4">{databases}</p>
        </div>

        <div className="border-t border-gray-700 mt-6 pt-6">
          <h3 className="text-xl font-bold mb-2">Gallery</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            
            {images.map((image, index) => (
                <img
                key={index}
                src={image}
                alt={title}
                className="rounded-lg cursor-pointer"
                onClick={() => openImageModal(index)}
                />
            ))}
        </div>
      </div>
      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 p-4">
          <div
            className="relative bg-gradient-to-r from-gray-900 to-gray-900 p-8 rounded-lg shadow-lg overflow-hidden flex justify-center items-center"
            style={{
              width: `${Math.min(imageDimensions.width, window.innerWidth - 40)}px`,
              height: `${Math.min(imageDimensions.height, window.innerHeight - 40)}px`
            }}
          >
            <button
              onClick={closeImageModal}
              className="text-black bg-gray-300 hover:bg-gray-500 rounded-full px-3 py-1 absolute top-2 right-2"
            >
              <FaTimes size={20} />
            </button>
            <button
              onClick={previousImage}
              className="text-white px-3 py-1 absolute left-2 top-1/2 transform -translate-y-1/2"
            >
              <FaArrowAltCircleLeft size={40} />
            </button>
            <img
              src={images[selectedImageIndex]}
              alt={`${title} - ${selectedImageIndex + 1}`}
              className="rounded-lg max-w-full max-h-full object-contain p-5"
            />
            <button
              onClick={nextImage}
              className="text-white px-3 py-1 absolute right-2 top-1/2 transform -translate-y-1/2"
            >
              <FaArrowAltCircleRight size={40} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;





