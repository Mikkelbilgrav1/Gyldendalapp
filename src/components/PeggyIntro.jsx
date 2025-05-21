export default function PeggyIntro({ onNext }) {
  return (
    <div className="screen peggy">
      <h1>Hvem er Peggy?</h1>
      <img src="/peggy.png" alt="Peggy" className="peggy-img" />
      <p>
        Hej! Jeg er Peggy – og jeg kommer fra idéverdenen!
        <br />
        Jeg er her for at hjælpe dig med at tænke som en filosof.
        <br />
        Klar til at gå på opdagelse i en verden fuld af skjulte idéer?
      </p>
      <button onClick={onNext} className="arrow">⬇️</button>
    </div>
  );
}
