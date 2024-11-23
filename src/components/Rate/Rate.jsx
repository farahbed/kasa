import React from "react";
import starFilled from "./star-active.png";
import starEmpty from "./star-inactive 1.png";

function Rate({ rating }) {
  const renderStars = (rating) => {
    const stars = [];
    const maxStars = 5;

    // Boucle pour créer les étoiles
    for (let i = 1; i <= maxStars; i++) {
    

      const starSrc = i <= rating ? starFilled : starEmpty;

      stars.push(<img key={i} src={starSrc} alt="Star" />);
    }

    return stars;
  };

  return (
    <div className="rate">
      <div className="rating">{renderStars(rating)}</div>
      
    </div>
  );
}

export default Rate;