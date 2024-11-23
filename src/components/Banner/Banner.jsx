import React from 'react';
import './Banner.scss';


function Banner({ image, text }) {
  return (
    <div className="banner">
      <img
        className="banner-img"
        src={image}
        alt={text || 'Banner'}
      />
      {text && <div className="banner-text">{text}</div>} {/* Affiche le texte si il y en a un */}
    </div>
  );
}

export default Banner;
