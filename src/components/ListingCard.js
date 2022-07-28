import React, { useState } from "react";

function ListingCard( {location, image, description, id, dataList, setDataList} ) {

  const [isLiked, setIsLiked] = useState(false)

  const handleLikeClick = () => {
    setIsLiked(!isLiked)
  }

  const handleDeleteClick = () => {
    console.log('delete button pressed')
    fetch(`http://localhost:6001/listings/${id}`, {
      method: 'DELETE'
    })
    .then((res) => res.json())
    .then(() => {
      setDataList(dataList.filter((item) => {
        return (item.id === id ? null : item)
      }))
    })
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {isLiked ? (
          <button onClick={handleLikeClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleLikeClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
