import { Routes, Route } from 'react-router'
import './App.css'
import AboutMe from './AboutMe';
import Vegan from './Vegan';
import Projects from './Projects';
import Navbar from './Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/vegan" element={<Vegan />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
    
    
  )
}

export default App
