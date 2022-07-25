import React, { useState } from "react";

function ListingCard({handleDeleteFunction, description, image, location, id}) {

  const [isFavorite, setIsFavorite] = useState(false)

  const switchFavorite = () => {
    setIsFavorite(!isFavorite)
  }
  
  const handleDeleteClick = () => {
    console.log('hi')
    console.log(id)
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE",
    })
    .then((r) => r.json())
    .then(() => handleDeleteFunction(id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isFavorite ? (
          <button onClick={switchFavorite} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={switchFavorite} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
