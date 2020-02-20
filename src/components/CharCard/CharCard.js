import React from "react";
import "./CharCard.css";

const CharCard = ({id, name, clicked, img, imageClick}) => {
  return (
        <img onClick={() => imageClick(id, name, clicked)} className="CharCard" src={img} alt={name} key={id}/>
    );
}

export default CharCard;