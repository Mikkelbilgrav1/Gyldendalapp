import { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import PeggyIntro from './components/PeggyIntro';
import ModuleOverview from './components/ModuleOverview';

export default function App() {
  const [screen, setScreen] = useState('intro');

  return (
    <div className="app-container">
      {screen === 'intro' && <IntroScreen onNext={() => setScreen('peggy')} />}
      {screen === 'peggy' && <PeggyIntro onNext={() => setScreen('modules')} />}
      {screen === 'modules' && <ModuleOverview />}
    </div>
  );
}