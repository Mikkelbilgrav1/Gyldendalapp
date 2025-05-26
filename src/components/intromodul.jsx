// components/intromodul.jsx
export default function intromodul({ content, onNext }) {
  return (
    <div className="intromodul">
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