import React from "react";
import { Stars, Star } from "./style";

export const Rating = ({ rating, setRating }) => {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      <Star
        key={i}
        isSelected={rating >= i && rating != null}
        onTouchStart={() => setRating(i)}
      >
        ★
      </Star>
    );
  }

  return <Stars>{stars}</Stars>;
};
