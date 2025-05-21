export default function ModuleOverview({ onSelectModule }) {
  return (
    <div className="screen modules">
      <h1>Moduler</h1>
      <div className="module-list">
        <div className="module-item module-1">
          <div>
            <strong>Modul 1</strong>
            <p>Hvad er en idé?</p>
          </div>
          <button onClick={onSelectModule}>Gå til modul</button>
        </div>
        <div className="module-item module-2">
          <div>
            <strong>Modul 2</strong>
            <p>Skygger og virkelighed</p>
          </div>
          <button disabled>Gå til modul</button>
        </div>
        <div className="module-item module-3">
          <div>
            <strong>Modul 3</strong>
            <p>Tænk som en filosof</p>
          </div>
          <button disabled>Gå til modul</button>
        </div>
      </div>
    </div>
  );
}
