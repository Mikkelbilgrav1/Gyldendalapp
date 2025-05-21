import { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import PeggyIntro from './components/PeggyIntro';
import ModuleOverview from './components/ModuleOverview';
import ModuleScreen from './components/ModuleScreen';

export default function App() {
  const [screen, setScreen] = useState('intro');

  return (
    <div className="app-container">
      {screen === 'intro' && <IntroScreen onNext={() => setScreen('peggy')} />}
      {screen === 'peggy' && <PeggyIntro onNext={() => setScreen('modules')} />}
      {screen === 'modules' && <ModuleOverview onSelectModule={() => setScreen('module1')} />}
      {screen === 'module1' && <ModuleScreen onBack={() => setScreen('modules')} />}
    </div>
  );
}
