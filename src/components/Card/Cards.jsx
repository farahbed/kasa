import React from 'react'
import './Cards.scss'



function Cards({ title, cover}) { {/* props title et cover */}
 
  return (
<div className="card"> 
   
        <img className="card-img"
        src={cover} 
        alt="{title}"/> 
        
            <h2 className="card-title">{title}</h2>
  
        
</div>


  )
}

export default Cards
