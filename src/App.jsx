// App.jsx
import { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import PeggyIntro from './components/PeggyIntro';
import ModuleOverview from './components/ModuleOverview';
import ModuleScreen from './components/ModuleScreen';
import { modulesData } from './data/modulesData';

export default function App() {
  const [screen, setScreen] = useState('intro');
  const [currentModuleId, setCurrentModuleId] = useState(null);

  const handleModuleSelect = (moduleId) => {
    setCurrentModuleId(moduleId);
    setScreen('module');
  };

  return (
    <div className="app-container">
      {screen === 'intro' && <IntroScreen onNext={() => setScreen('peggy')} />}
      {screen === 'peggy' && <PeggyIntro onNext={() => setScreen('modules')} />}
      {screen === 'modules' && <ModuleOverview 
        modules={modulesData} 
        onSelectModule={handleModuleSelect} 
      />}
      {screen === 'module' && currentModuleId && 
        <ModuleScreen 
          moduleData={modulesData.find(m => m.id === currentModuleId)} 
          onBack={() => setScreen('modules')} 
        />
      }
    </div>
  );
}