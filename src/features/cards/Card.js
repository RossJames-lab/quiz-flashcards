import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCardById } from "../cards/cardsSlice"; // Import the cards selector

export default function Card({ id }) {
  // Use useSelector to fetch the card data by id from the Redux store
  const card = useSelector(selectCardById(id));
  const [flipped, setFlipped] = useState(false);

  return (
    <li>
      <button className="card" onClick={(e) => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
