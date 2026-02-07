import { Routes, Route } from 'react-router'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<main style={{ padding: 40 }}>
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
