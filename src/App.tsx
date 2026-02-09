import { Routes, Route } from 'react-router'
import './App.css'
import { useTranslation } from './locales/useTranslation';
import LanguageSwitcher from './locales/LanguageSwitcher';

function App() {
  const t = useTranslation();

  return (
    <Routes>
      <Route path="/" element={<main style={{ padding: 40 }}>
        <LanguageSwitcher />
        <h1>{t.home.heading}</h1>
        <h1>🚧 Coming Soon</h1>
        <p>Diese Website ist gerade im Aufbau.</p>
      </main>}/>
      <Route path="/vegan" element={<main style={{ padding: 40 }}>
      <h1>Veganismus</h1>
      <p>Das ethische Prinzip, dass Menschen ohne die Ausbeutung anderer Tiere leben sollen.</p>
    </main>}/>
    </Routes>
    
  )
}

export default App
