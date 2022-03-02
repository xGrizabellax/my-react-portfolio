
import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './components/home/Home'
import ProductList from './components/products/ProductList'
import Cart from './components/cart/Cart'

function App() {
  return (
    <>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/apps">My Apps</NavLink>
        <NavLink to="/contact">Contact Me</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apps" element={<AppList />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
    )
}

export default App;

export default App;
