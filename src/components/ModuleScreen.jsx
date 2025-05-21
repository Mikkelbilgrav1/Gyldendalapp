import { useState } from 'react';
import Lesson from './Lesson';
import Quiz from './Quiz';
import Result from './Result';

export default function ModuleScreen({ onBack }) {
  const [step, setStep] = useState('lesson');
  const [score, setScore] = useState(0);

  return (
    <div className="screen module-screen">
      <h1>Modul 1 – Hvad er en idé?</h1>
      {step === 'lesson' && <Lesson onNext={() => setStep('quiz')} />}
      {step === 'quiz' && <Quiz onFinish={(points) => { setScore(points); setStep('result'); }} />}
      {step === 'result' && <Result score={score} onRestart={onBack} />}
    </div>
  );
}
