import React, { createContext, useContext, useState } from 'react';

const LightboxContext = createContext();

export const LightboxProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesList, setImagesList] = useState([]);

  const openLightbox = (images, index = 0) => {
    setImagesList(images);
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeLightbox = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    if (imagesList.length === 0) return;
    setCurrentIndex((prev) => (prev + 1) % imagesList.length);
  };

  const prevImage = () => {
    if (imagesList.length === 0) return;
    setCurrentIndex((prev) => (prev - 1 + imagesList.length) % imagesList.length);
  };

  return (
    <LightboxContext.Provider
      value={{
        isOpen,
        currentIndex,
        currentImage: imagesList[currentIndex] || null,
        totalImages: imagesList.length,
        openLightbox,
        closeLightbox,
        nextImage,
        prevImage
      }}
    >
      {children}
    </LightboxContext.Provider>
  );
};

export const useLightbox = () => {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error('useLightbox must be used within a LightboxProvider');
  }
  return context;
};
