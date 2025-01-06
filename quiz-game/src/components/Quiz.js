// src/components/Quiz.js
import React, { useState } from "react";
import Question from "./Question";
import questions from "../data";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const handleAnswer = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];

    if (selectedOption === currentQuestion.answer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;

    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setIsQuizFinished(true);
    }
  };

  return (
    <div>
      {isQuizFinished ? (
        <div>
          <h2>Parabéns! Você terminou o quiz!</h2>
          <p>
            Sua pontuação: {score} de {questions.length}
          </p>
        </div>
      ) : (
        <Question
          question={questions[currentQuestionIndex].question}
          options={questions[currentQuestionIndex].options}
          handleAnswer={handleAnswer}
        />
      )}
    </div>
  );
};

export default Quiz;
