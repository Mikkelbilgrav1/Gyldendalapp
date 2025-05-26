

// components/Lesson.jsx
export default function Lesson({ content, onNext }) {
  return (
    <div className="lesson">
      {content.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      <button onClick={onNext} className="knap">
        <img src='/knap.png' alt="knap-næste" />
      </button>
      <div className="black-bottom-shape"></div>
    </div>
  );
}