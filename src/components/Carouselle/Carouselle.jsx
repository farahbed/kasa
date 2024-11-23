import React, { useState, useEffect } from 'react';
import './Carouselle.scss';
import leftArrow from './left-arrow.png';
import rightArrow from './right-arrow.png';

function Carouselle({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); {/* Index de l'image actuellement affichée */}
  const [slideDirection, setSlideDirection] = useState(""); {/* Classe CSS pour le glissement */}
  const [singleImage, setSingleImage] = useState(false); {/* Indique si le logement a une seule image */}

  
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
    
    if (images.length === 1) { {/* Si le logement a une seule image, on affiche une seule image */}
      setSingleImage(true); 
    } else {
      setSingleImage(false);
    }
  }, [images]);

  const handleClickLeft = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setSlideDirection("slide-left"); {/* Appliquer la classe pour le glissement vers la gauche */}
    setTimeout(() => setSlideDirection(""), 200); 
  };

  const handleClickRight = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setSlideDirection("slide-right"); {/* Appliquer la classe pour le glissement vers la droite */}
    setTimeout(() => setSlideDirection(""), 200); 
  };

  return (
    <div className="carouselle">
      <img
        src={images[currentImageIndex]}
        alt={`Image ${currentImageIndex + 1}`}
        className={`carouselle-image ${slideDirection}`}
      />
      {!singleImage && (
        <>
          <div className="arrow left-arrow" onClick={handleClickLeft}>
            <img src={leftArrow} alt="Left arrow" />
          </div>
          <div className="arrow right-arrow" onClick={handleClickRight}>
            <img src={rightArrow} alt="Right arrow" />
          </div>
        </>
      )}
      {!singleImage && ( 
        <div className="image-number">   {/* Afficher le numérique de l'image actuellement affichée */}
          {currentImageIndex + 1} / {images.length}
        </div>
      )}
    </div>
  );
}

export default Carouselle;