import NavBar from './NavBar';
import './Header.css'



export default function Header() {

    return (
            <header className='header-nav'>
                <div className='header-titles'>
                <h1 className='name-title'>Sam Page</h1>
                <h4 className='job-title'>software developer</h4>
                </div>
                <NavBar />
            </header> 
    )
}