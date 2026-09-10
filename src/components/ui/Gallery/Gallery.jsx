// Gallery component displays a grid of event photos with lightbox functionality.
import listaDeFotos from "../../data/fotos.js";
import foto1 from "../../../assets/img/fotos/IMG_0027.jpg";
import foto2 from "../../../assets/img/fotos/IMG_0032.jpg";
import foto3 from "../../../assets/img/fotos/IMG_0034.jpg";
import foto4 from "../../../assets/img/fotos/IMG_0117.jpg";
import foto5 from "../../../assets/img/fotos/IMG_1014.jpg";
import foto6 from "../../../assets/img/fotos/IMG_1035.jpg";
import foto7 from "../../../assets/img/fotos/IMG_1396.jpg";
import foto8 from "../../../assets/img/fotos/IMG_1703.jpg";
import foto9 from "../../../assets/img/fotos/IMG_1708.jpg";
import foto10 from "../../../assets/img/fotos/IMG_9390.jpg";
import foto11 from "../../../assets/img/fotos/IMG_9399.jpg";
import foto12 from "../../../assets/img/fotos/IMG_9400.jpg";
import foto13 from "../../../assets/img/fotos/IMG_9406.jpg";
import foto14 from "../../../assets/img/fotos/IMG_9411.jpg";
import foto15 from "../../../assets/img/fotos/IMG_9471.jpg";
import foto16 from "../../../assets/img/fotos/IMG_9488.jpg";
import foto17 from "../../../assets/img/fotos/IMG_9491.jpg";
import foto18 from "../../../assets/img/fotos/IMG_9518.jpg";
import foto19 from "../../../assets/img/fotos/IMG_9736.jpg";
import foto20 from "../../../assets/img/fotos/IMG_9739.jpg";
import foto21 from "../../../assets/img/fotos/IMG_9752.jpg";
import foto22 from "../../../assets/img/fotos/IMG_9753.jpg";
import foto23 from "../../../assets/img/fotos/IMG_9846.jpg";
import foto24 from "../../../assets/img/fotos/IMG_9901.jpg";
import foto25 from "../../../assets/img/fotos/IMG_9906.jpg";
import foto26 from "../../../assets/img/fotos/IMG_9907.jpg";
import foto27 from "../../../assets/img/fotos/01_terminator_02.jpeg";
import foto28 from "../../../assets/img/fotos/02_terminator_02.jpeg";
import foto29 from "../../../assets/img/fotos/03_terminator_02.jpeg";
import foto30 from "../../../assets/img/fotos/04_terminator_02.jpeg";
import foto31 from "../../../assets/img/fotos/05_terminator_02.jpeg";
import foto32 from "../../../assets/img/fotos/06_terminator_02.jpeg";

import Image from "./Image.jsx";
import { useState, useEffect, useRef, useMemo } from 'react';
import { createPortal } from 'react-dom';
import Masonry from 'react-masonry-css';
import './Gallery.scss';

// Main gallery function component
// Gallery component displays a grid of event photos with lightbox functionality
function Gallery() {
  // Array of images shuffled once per mount using Fisher-Yates algorithm
  // let galeria = listaDeFotos(); // Uncomment to use dynamic photo list
  const galeria = useMemo(() => {
    const arr = [foto1, foto2, foto3, foto4, foto5, foto6, foto7, foto8, foto9, foto10, foto11, foto12, foto13, foto14, foto15, foto16, foto17, foto18, foto19, foto20, foto21, foto22, foto23, foto24, foto25, foto26, foto27, foto28, foto29, foto30, foto31, foto32];
    // Fisher-Yates shuffle for random order on each page load
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }, []);

  // State for lightbox open/close
  const [lightboxOpen, setLightboxOpen] = useState(false);
  // State for currently displayed image in lightbox
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // State for slide direction in lightbox animation
  const [slideDirection, setSlideDirection] = useState('next');
  // State for animation status
  const [isAnimating, setIsAnimating] = useState(false);
  // State to check if device is mobile
  const [isMobile, setIsMobile] = useState(false);

  // Refs for touch events (used for swipe navigation)
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Masonry breakpoints for responsive grid layout
  const breakpointColumnsObj = {
    default: 5,
    1100: 4,
    900: 3,
    700: 2,
    500: 1
  };

  // Effect to check if device is mobile on mount and resize
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);

    // Lock the body scroll when lightbox is open
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);

    // Restore body scroll when lightbox is closed
    document.body.style.overflow = 'auto';
  };

  const goToPrevious = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setSlideDirection('prev');
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? galeria.length - 1 : prevIndex - 1
      );
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }, 100);
  };

  const goToNext = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setSlideDirection('next');
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === galeria.length - 1 ? 0 : prevIndex + 1
      );
      setTimeout(() => {
        setIsAnimating(false);
      }, 300);
    }, 100);
  };

  // Handle touch events for swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!isAnimating) {
      const threshold = 50; // Minimum distance for swipe
      const diff = touchStartX.current - touchEndX.current;

      if (diff > threshold) {
        // Swipe left, go to next
        goToNext();
      } else if (diff < -threshold) {
        // Swipe right, go to previous
        goToPrevious();
      }
    }

    // Reset values
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Handle click events for the lightbox
  const handleLightboxClick = (e) => {
    // Close lightbox if clicking directly on the overlay (background)
    if (e.target.classList.contains('lightbox-overlay')) {
      closeLightbox();
    }
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightboxOpen) return;

      if (e.key === 'ArrowLeft') {
        goToPrevious();
      } else if (e.key === 'ArrowRight') {
        goToNext();
      } else if (e.key === 'Escape') {
        closeLightbox();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, isAnimating]);

  return (
    <>
      <div className="gallery-container">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {galeria.map((foto, index) => (
            <div className="masonry-item" key={index}>
              <Image
                src={foto}
                alt={`Image ${index + 1}`}
                onClick={() => openLightbox(index)}
              />
            </div>
          ))}
        </Masonry>
      </div>

      {lightboxOpen && createPortal(
        <div className="lightbox-overlay" onClick={handleLightboxClick}>
          <div
            className="lightbox-container"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
            <button
              className="lightbox-nav lightbox-prev"
              onClick={goToPrevious}
              disabled={isAnimating}
              aria-label="Previous image"
            >‹</button>
            <div className={`lightbox-content ${isAnimating ? `slide-${slideDirection}` : ''}`}>
              <img
                src={galeria[currentImageIndex]}
                alt={`Image ${currentImageIndex + 1}`}
                className={isAnimating ? `fade-${slideDirection}` : ''}
              />
              {isMobile && (
                <div className="lightbox-indicator">
                  <span>{currentImageIndex + 1}/{galeria.length}</span>
                </div>
              )}
            </div>
            <button
              className="lightbox-nav lightbox-next"
              onClick={goToNext}
              disabled={isAnimating}
              aria-label="Next image"
            >›</button>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
export default Gallery;