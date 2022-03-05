import { NavLink } from 'react-router-dom';
import './Header.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faLaptop, faPhone, faFileText } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
    return (
        <nav className='nav-bar'>
        <NavLink className="ind-nav-link" to="/">Home</NavLink>
        <NavLink className="ind-nav-link" to="/apps">My Apps</NavLink>
        <NavLink className="ind-nav-link" to="/contact">Contact Me</NavLink>
        <NavLink className="ind-nav-link" to="/resume">Resume</NavLink>
        </nav>
    )
}