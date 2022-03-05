
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import AboutMe from './components/home/AboutMe'
import AppList from './components/applications/AppList'
import Application from './components/applications/Application'
import Contact from './components/contact/Contact'
import appData from './data/appData'


function App() {
  return (
    <>
      < Header />
      <Routes>
        <Route path="/" element={<AboutMe />} />
        <Route path='/apps' element={<AppList />}>
          <Route path=":id" element={<Application appData={appData}/>} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
      < Footer />
    </>
  )
}

export default App;

