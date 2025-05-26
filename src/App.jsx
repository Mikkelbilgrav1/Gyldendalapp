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
  const [screenHistory, setScreenHistory] = useState(['intro']); // Track navigation history

  const navigateToScreen = (newScreen, moduleId = null) => {
    //Tilføj nuværende skærm til historie før navigation
    setScreenHistory(prev => [...prev, newScreen]);
    setScreen(newScreen);
    if (moduleId) {
      setCurrentModuleId(moduleId);
    }
  };

  const goBack = () => {
    if (screenHistory.length > 1) {
      //Fjern nuværende skærm og gå til forrige skærm
      const newHistory = [...screenHistory];
      newHistory.pop(); //Fjern nuværende skærm
      const previousScreen = newHistory[newHistory.length - 1];
      
      setScreenHistory(newHistory);
      setScreen(previousScreen);
      
      //Hvis gå tilbage fra Module skærm, så clear CurrentModuleId
      if (screen === 'module') {
        setCurrentModuleId(null);
      }
    }
  };

  const handleModuleSelect = (moduleId) => {
    setCurrentModuleId(moduleId);
    navigateToScreen('module');
  };

  //Hvis tilbage knap på alle skærme undtaget intro skærmen
  const showBackButton = screenHistory.length > 1;

  return (
    <div className="app-container">
      {/* Tilbage knappen - positionen, styleing til alle skærme */}
      {showBackButton && (
        <button 
          onClick={goBack} 
          className="back-button"
          style={{
            position: 'fixed',
            top: '3%',
            left: '5%',
            zIndex: 1000,
            background: 'rgb(255, 255, 255)',
            color: 'black',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            fontFamily: 'DynaPuff',
          }}
        >
          ←
        </button>
      )}


      {screen === 'intro' && <IntroScreen onNext={() => navigateToScreen('peggy')} />}
      {screen === 'peggy' && <PeggyIntro onNext={() => navigateToScreen('modules')} />}
      {screen === 'modules' && <ModuleOverview 
        modules={modulesData} 
        onSelectModule={handleModuleSelect} 
      />}
      {screen === 'module' && currentModuleId && 
        <ModuleScreen 
          moduleData={modulesData.find(m => m.id === currentModuleId)} 
          onBack={() => navigateToScreen('modules')} 
        />
      }
    </div>
  );
}