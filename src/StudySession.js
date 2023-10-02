import React, { useState } from "react";
import FlashcardList from "./FlashcardList";
import disneyTriviaData from "../data/disneyTriviaData"; // Adjust the path as needed

const StudySession = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const shuffledFlashcards = [...disneyTriviaData].sort(() => Math.random() - 0.5);

  const handleNextCard = () => {
    setCurrentIndex(currentIndex + 1);
  };

  return (
    <div className="study-session">
      {currentIndex < shuffledFlashcards.length ? (
        <FlashcardList flashcards={shuffledFlashcards} />
      ) : (
        <div className="study-session-complete">
          <h2>Congratulations! You've completed the study session.</h2>
        </div>
      )}
      {currentIndex < shuffledFlashcards.length && (
        <button onClick={handleNextCard}>Next Card</button>
      )}
    </div>
  );
};

export default StudySession;
