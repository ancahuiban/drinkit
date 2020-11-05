import React, { useState } from "react";
import { Stars, Star } from "./style";

export const Rating = ({ disabled }) => {
  const [rating, setRating] = useState(null);
  const rate = (rating) => setRating(rating);

  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      <Star
        className={rating >= i && rating != null ? ` is-selected` : ``}
        onTouchStart={() => rate(i)}
      >
        ★
      </Star>
    );
  }

  return <Stars>{stars}</Stars>;
};
