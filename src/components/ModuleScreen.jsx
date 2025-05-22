// components/ModuleScreen.jsx
import { useState } from 'react';
import Lesson from './Lesson';
import Quiz from './Quiz';
import Result from './Result';

export default function ModuleScreen({ moduleData, onBack }) {
  const [step, setStep] = useState('lesson');
  const [score, setScore] = useState(0);

  return (
    <div className={`screen ${moduleData.color}`}>
      <h1>{moduleData.title} – {moduleData.subtitle}</h1>
      
      {step === 'lesson' && (
        <Lesson 
          content={moduleData.lesson.content} 
          onNext={() => setStep('quiz')} 
        />
      )}
      
      {step === 'quiz' && (
        <Quiz 
          questions={moduleData.quiz.questions}
          onFinish={(points) => { 
            setScore(points); 
            setStep('result'); 
          }} 
        />
      )}
      
      {step === 'result' && (
        <Result 
          score={score} 
          totalQuestions={moduleData.quiz.questions.length}
          onRestart={onBack} 
        />
      )}
    </div>
  );
}