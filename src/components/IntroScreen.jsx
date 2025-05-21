export default function IntroScreen({ onNext }) {
  return (
    <div className="screen intro">
      <h1>Velkommen til Idéernes Verden!</h1>
      <img src="/peggy.png" alt="Peggy" className="peggy-img" />
      <p>Peggy venter på at tage dig med på en spændende rejse</p>
      <button onClick={onNext} className="arrow">⬇️</button>
    </div>
  );
}