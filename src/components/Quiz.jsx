// components/Quiz.jsx
import { useState } from 'react';

export default function Quiz({ questions, onFinish }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  const handleAnswer = (selectedIndex) => {
    const correct = selectedIndex === questions[currentQuestion].correctAnswer;
    
    if (correct) {
      setScore(score + 1);
    }

    // Move to next question or finish quiz
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setQuizComplete(true);
      onFinish(score + (correct ? 1 : 0));
    }
  };

  if (quizComplete) {
    return (
      <div className="quiz-completed">
        <h2>Quiz færdig!</h2>
        <p>Din score: {score} ud af {questions.length}</p>
      </div>
    );
  }

  return (
    <div className="quiz">
      <div className="question-counter">
        <p>Spørgsmål {currentQuestion + 1} af {questions.length}</p>
      </div>
      
      <p className="question-text">{questions[currentQuestion].question}</p>
      
      <div className="options-container">
        {questions[currentQuestion].options.map((option, index) => (
          <button 
            key={index}
            onClick={() => handleAnswer(index)}
            className="option-button"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}