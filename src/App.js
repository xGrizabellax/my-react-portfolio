
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import AboutMe from './components/home/AboutMe'
import AppList from './components/applications/AppList'
import Application from './components/applications/Application'
import Contact from './components/applications/Application'

function App() {
  return (
    <>
    < Header />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path="/apps" element={<AppList />} />
        <Route path='/apps' element={<AppList />}>
            <Route path=":id" element={<Application />} /> 
          </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
    )
}

export default App;

