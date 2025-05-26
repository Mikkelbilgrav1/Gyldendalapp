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
    // Add current screen to history before navigating
    setScreenHistory(prev => [...prev, newScreen]);
    setScreen(newScreen);
    if (moduleId) {
      setCurrentModuleId(moduleId);
    }
  };

  const goBack = () => {
    if (screenHistory.length > 1) {
      // Remove current screen and go to previous
      const newHistory = [...screenHistory];
      newHistory.pop(); // Remove current screen
      const previousScreen = newHistory[newHistory.length - 1];
      
      setScreenHistory(newHistory);
      setScreen(previousScreen);
      
      // If going back from module screen, clear currentModuleId
      if (screen === 'module') {
        setCurrentModuleId(null);
      }
    }
  };

  const handleModuleSelect = (moduleId) => {
    setCurrentModuleId(moduleId);
    navigateToScreen('module');
  };

  // Show back button for all screens except the intro screen
  const showBackButton = screenHistory.length > 1;

  return (
    <div className="app-container">
      {/* Back button - positioned absolutely to appear on all screens */}
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