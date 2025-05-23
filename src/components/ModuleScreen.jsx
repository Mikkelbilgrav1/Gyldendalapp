// components/ModuleScreen.jsx
import { useState } from 'react';
import Lesson from './Lesson';
import Quiz from './Quiz';
import Result from './Result';
import Intromodul from './intromodul';

export default function ModuleScreen({ moduleData, onBack }) {
  const [step, setStep] = useState('intromodul');
  const [score, setScore] = useState(0);

  return (
    <div className={`screen ${moduleData.color}`}>
      <h1>
        {step === 'intromodul' && (moduleData.intromodul.title || `${moduleData.title} – ${moduleData.subtitle}`)}
        {step === 'lesson' && moduleData.lesson.title}
        {step === 'quiz' && 'Quiztid!'}
        {step === 'result' && 'Dit resultat'}
      </h1>
      
      {step !== 'lesson' && (
      <img src="/peggy.png" alt="peggy" className="peggy-img" />
      )}
      
      {step === 'intromodul' && (
        <Intromodul 
          content={moduleData.intromodul.content} 
          onNext={() => setStep('lesson')} 
        />
      )}

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