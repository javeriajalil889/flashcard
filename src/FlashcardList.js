// src/components/FlashcardList.js
import React from "react";
import Flashcard from "./Flashcard";

const FlashcardList = ({ flashcards }) => {
  return (
    <div className="card-container">
      {flashcards.map((flashcard, index) => (
        <Flashcard key={index} flashcard={flashcard} />
      ))}
    </div>

    
  );
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

};

export default FlashcardList;
