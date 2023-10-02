// src/components/Flashcard.js
import React, { useState } from "react";

const Flashcard = ({ flashcard }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? "flipped" : ""}`} onClick={handleFlip}>
      <div className="card-content">
        <div className="card-question">
          <h2>Question:</h2>
          <p>{flashcard.question}</p>
        </div>
        <div className="card-answer">
          <h2>Answer:</h2>
          <p>{flashcard.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
