export default function PeggyIntro({ onNext }) {
  return (
    <div className="screen peggy">
      <h1>Hvem er Peggy?</h1>
      <img src="/peggy.png" alt="Peggy" className="peggy-img" />
      <p>
        Hej! Jeg er Peggy – og jeg kommer fra idéverdenen!
        <br/> <br/>
        Jeg er her for at hjælpe dig med at tænke som en filosof.
        <br/> <br/>
        Klar til at gå på opdagelse i en verden fuld af skjulte idéer?
      </p>
      <button onClick={onNext} className="knap">
        <img src="src\assets\knap.png" alt="knap-næste" />
      </button>
      <div className="black-bottom-shape"></div>
    </div>
  );
}
