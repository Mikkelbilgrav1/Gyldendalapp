export default function Lesson({ onNext }) {
  return (
    <div className="lesson">
      <p>I Platons filosofi findes der en verden bag vores verden. Det er idéernes verden!</p>
      <p>I idéernes verden findes alt det perfekte. En stol dér er ikke bare en stol – det er den perfekte idé om en stol.</p>
      <p>Det vi ser i vores verden er bare kopier – skygger – af det, der findes i idéernes verden.</p>
      <button onClick={onNext}>Gå til quiz</button>
    </div>
  );
}