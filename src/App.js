
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import AboutMe from './components/home/AboutMe'
import AppList from './components/applications/AppList'
import Application from './components/applications/Application'
import Contact from './components/contact/Contact'
import Resume from './components/resume/Resume'
import appData from './data/appData'


function App() {
  return (
    <>
      < Header />
      <Routes>
        <Route path="/my-react-portfolio/" element={<AboutMe />} />
        <Route path='/my-react-portfolio/apps' element={<AppList />}>
          <Route path=":id" element={<Application appData={appData}/>} />
        </Route>
        <Route path="/my-react-portfolio/contact" element={<Contact />} />
        <Route path="/my-react-portfolio/resume" element={<Resume />} />

      </Routes>
      < Footer/>
    </>
  )
}

export default App;

