
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import AboutMe from './components/home/AboutMe'
import AppList from './components/applications/App'
import Contact from './components/applications/App'

function App() {
  return (
    <>
    < Header />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/apps" element={<AppList />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
    )
}

export default App;

