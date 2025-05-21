// components/ModuleOverview.jsx
export default function ModuleOverview({ modules, onSelectModule }) {
  return (
    <div className="screen modules">
      <h1>Moduler</h1>
      <div className="module-list">
        {modules.map((module) => (
          <div key={module.id} className={`module-item ${module.color}`}>
            <div>
              <strong>{module.title}</strong>
              <p>{module.subtitle}</p>
            </div>
            <button 
              onClick={() => module.enabled && onSelectModule(module.id)} 
              disabled={!module.enabled}
            >
              Gå til modul
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}