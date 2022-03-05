import './Footer.css'
import { LinkedinFilled, GithubFilled } from '@ant-design/icons'



export default function Footer() {

    return (
            <footer className='footer-area'>
                <a href='https://www.linkedin.com/in/sam-w-page/'>
                <LinkedinFilled />
                </a>
                <a className='github-icon' href='https://github.com/xGrizabellax'>
                <GithubFilled />
                </a>
            </footer> 
    )
}