// components/Result.jsx
export default function Result({ score, totalQuestions, onRestart }) {
  return (
    <div className="result">
      <p>Du fik {score} ud af {totalQuestions} point!</p>
      <p>Godt gået – Peggy er stolt af dig!</p>
      <button onClick={onRestart}>Tilbage til moduler</button>
    </div>
  );
}