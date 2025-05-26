

export default function IntroScreen({ onNext }) {
  return (
    <div className="screen intro">
      <h1>Velkommen til Idéernes Verden!</h1>
      <img src="/peggy.png" alt="Peggy" className="peggy-img" />
      <p>
      Peggy venter på at tage dig med på en spændende rejse <br/> <br/>
      Tyk på knappen for at fortsætte
      </p>
      <button onClick={onNext} className="knap">
        <img src='/knap.png' alt="knap-næste" />
      </button>
      <div className="black-bottom-shape"></div>
    </div>
  );
}