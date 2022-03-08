import { NavLink } from 'react-router-dom';
import './Header.css'
import { HomeOutlined, HomeFilled, AppstoreOutlined, AppstoreFilled, MailOutlined, MailFilled } from '@ant-design/icons'

export default function NavBar() {
    return (
        <nav className='nav-bar'>
            <NavLink className="ind-nav-link home-link" to="/my-react-portfolio/">
                <HomeOutlined className='home-outline' />
                < HomeFilled className='home-fill' /> Home
            </NavLink>
            <NavLink className="ind-nav-link apps-link" to="/my-react-portfolio/apps">
                <AppstoreOutlined className='apps-outline' />
                < AppstoreFilled className='apps-fill' /> My Apps
            </NavLink>
            <NavLink className="ind-nav-link contact-link" to="/my-react-portfolio/contact">
                <MailOutlined className='mail-outline' />
                < MailFilled className='mail-fill' /> Contact
            </NavLink>
            <NavLink className="ind-nav-link resume-link" to="/my-react-portfolio/resume">Resume</NavLink>
        </nav>
    )
}