import { NavLink } from 'react-router-dom';
import './Header.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUser, faLaptop, faPhone, faFileText } from '@fortawesome/free-solid-svg-icons';

export default function NavBar() {
    return (
        <nav className='nav-bar'>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/apps">My Apps</NavLink>
        <NavLink to="/contact">Contact Me</NavLink>
        <NavLink to="/resume">Resume</NavLink>
        </nav>
    )
}