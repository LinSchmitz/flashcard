import React, { useState } from 'react';
import { questions } from './App';

export function Flashcards() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const currentQuestion = questions[currentIndex];

  function handleCardClick() {
    setShowAnswer(!showAnswer);
  }

  function handleNext() {
    setShowAnswer(false);
    setCurrentIndex(prev => (prev + 1) % questions.length);
  }

  function handlePrev() {
    setShowAnswer(false);
    setCurrentIndex(prev => (prev - 1 + questions.length) % questions.length);
  }

  return (
    <div>
      <div
        onClick={handleCardClick}
        className={`card ${showAnswer ? 'selected' : ''}`}
      >
        <div className="card-number">
          {currentIndex + 1}/{questions.length}
        </div>
        <p>{showAnswer ? currentQuestion.answer : currentQuestion.question}</p>

        <button
          className="prev-button"
          onClick={e => {
            e.stopPropagation();
            handlePrev();
          }}
          aria-label="Previous question"
        >
          ←
        </button>

        <button
          className="next-button"
          onClick={e => {
            e.stopPropagation();
            handleNext();
          }}
          aria-label="Next question"
        >
          →
        </button>
      </div>
      <NavButtons />
    </div>
  );
}

function NavButtons() {
  return (
    <section className="btns">
      <button className="btn btn-x" aria-label="Delete">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          viewBox="0 0 24 24"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>
      <button className="btn btn-del" aria-label="Remove">
        🗑️
      </button>
      <button className="btn btn-ok" aria-label="Confirm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </button>
    </section>
  );
}
