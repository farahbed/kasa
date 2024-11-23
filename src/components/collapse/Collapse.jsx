import React, { useState, useEffect, useRef } from 'react';
import '../../styles/Collapse.scss';
import arrowIcon from './arrow.png'; 

function Collapse({ title, content }) {
  const [Open, setOpen] = useState(false); {/* Indique si la collapse est ouverte ou non */}
  const contentRef = useRef(null); {/* Représente le contenu de la collapse */}

  
  const toggleCollapse = () => {   
    setOpen(!Open); {/* Ouvrir ou fermer la collapse */}
  };

  useEffect(() => {
    if (Open) {
      contentRef.current.style.maxHeight = contentRef.current.scrollHeight + 'px'; {/* hauteur maximale de la collapse */}
    } else {
      contentRef.current.style.maxHeight = '0px'; {/* hauteur minimale de la collapse */}
    }
  }, [Open]);

  return (
    <div className="collapse">
      <div className="collapse-header" onClick={toggleCollapse}>
      <h3>{title}</h3>
        <img
          src={arrowIcon}
          alt="arrow" 
          className={`collapse-arrow ${Open ? "open" : ""}`}
          style={{
            transform: `rotate(${Open ? "180deg" : "0"})`,
            transition: "transform 0.2s ease", 
          }}         
        />
      </div>
      <div
        className={`collapse-content ${Open ? "open" : ""}`} // Afficher ou masquer le contenu de la collapse en fonction de l'ouverture de la collapse 
        ref={contentRef}
      >
        <ul>{content}</ul>
      </div>
    </div>
  );
}


export default Collapse;
