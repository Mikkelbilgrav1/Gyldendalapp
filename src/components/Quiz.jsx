import { useState } from 'react';

export default function Quiz({ onFinish }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [quizComplete, setQuizComplete] = useState(false);

  // Quiz questions data
  const questions = [
    {
      question: "Hvad mente Platon med idéernes verden?",
      options: [
        "At alt er en illusion",
        "At alt i vores verden er kopier af perfekte idéer",
        "At man ikke kan stole på sine sanser"
      ],
      correctAnswer: 1
    },
    {
      question: "Hvem skrev 'Kritik af den rene fornuft'?",
      options: [
        "Immanuel Kant",
        "Friedrich Nietzsche",
        "Søren Kierkegaard"
      ],
      correctAnswer: 0
    },
    {
      question: "Hvilket begreb forbindes ofte med Albert Camus?",
      options: [
        "Utilitarisme",
        "Absurdisme",
        "Rationalisme"
      ],
      correctAnswer: 1
    },
    {
      question: "Hvad er hovedtanken i eksistentialismen?",
      options: [
        "At mennesket først eksisterer og derefter skaber sin essens",
        "At menneskets essens er bestemt på forhånd",
        "At livet ikke har mening"
      ],
      correctAnswer: 0
    },
    {
      question: "Hvilket princip forbindes med John Stuart Mill?",
      options: [
        "Kategorisk imperativ",
        "Utilitarisme",
        "Guldreglen"
      ],
      correctAnswer: 1
    }
  ];

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
      <div className="quiz-completed p-6 bg-gray-100 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Quiz færdig!</h2>
        <p className="text-lg">Din score: {score} ud af {questions.length}</p>
      </div>
    );
  }

  return (
    <div className="quiz p-6 bg-gray-100 rounded-lg">
      <div className="mb-4">
        <p className="text-sm text-gray-500">Spørgsmål {currentQuestion + 1} af {questions.length}</p>
      </div>
      
      <p className="text-lg font-medium mb-4">{questions[currentQuestion].question}</p>
      
      <div className="flex flex-col gap-2">
        {questions[currentQuestion].options.map((option, index) => (
          <button 
            key={index}
            onClick={() => handleAnswer(index)}
            className="p-3 bg-white hover:bg-blue-100 border border-gray-300 rounded-md text-left"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}