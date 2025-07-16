import './App.css'
import HomePage from './components/home'
import Projects from './components/projects'
import Education from './components/education'
// import Misc from './Components/misc'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education" element={<Education />} />
        {/* <Route path="/misc" element={<Misc />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App