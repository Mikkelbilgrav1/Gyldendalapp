export default function Result({ score, onRestart }) {
  return (
    <div className="result">
      <p>Du fik {score} point!</p>
      <p>Godt gået – Peggy er stolt af dig!</p>
      <button onClick={onRestart}>Tilbage til moduler</button>
    </div>
  );
}
