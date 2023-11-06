import React, { useState } from "react";

const StarRating = ({ initialRating, onRatingChange }) => {
  const [rating, setRating] = useState(initialRating);

  const handleStarClick = (newRating) => {
    setRating(newRating);
    if (onRatingChange) {
      onRatingChange(newRating);
    }
  };

  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleStarClick(star)}
        
          style={{
            cursor: "pointer",
            color: star <= rating ? "gold" : "#D3D3D3",
            fontSize: "24px",
            outline:"1px"
          }}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};

export default StarRating;
