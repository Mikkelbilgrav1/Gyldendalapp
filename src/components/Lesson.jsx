// components/Lesson.jsx
export default function Lesson({ content, onNext }) {
  return (
    <div className="lesson">
      {content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <button onClick={onNext}>Gå til quiz</button>
    </div>
  );
}