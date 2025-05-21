export default function IntroScreen({ onNext }) {
  return (
    <div className="screen intro">
      <h1>Velkommen til Idéernes Verden!</h1>
      <p>Peggy venter på at tage dig med på en spændende rejse</p>
      <img src="peggy.png" alt="Peggy" className="peggy-img" />
      <button onClick={onNext} className="arrow">⬇️</button>
    </div>
  );
}