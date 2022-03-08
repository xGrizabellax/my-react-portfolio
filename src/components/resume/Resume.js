import React from 'react'
import './Resume.css'
import resume from '../../images/sam-portfolio-resume.jpg'
import resumeTwo from '../../images/sam-portfolio-resume-2.jpg'

export default function Resume() {
    return (
        <div className='resume-section'>
            <h3 className='resume-title'>My Resume:</h3>
            <div className='resume-images'>
            <a href="https://drive.google.com/file/d/1nslmFxdKvdYQU8XfhRCpf2j2PFsjY3el/view">
            <img className='resume-image' src={resume} alt="Image of Sam Page's Resume"/>
            </a>
            <a href="https://drive.google.com/file/d/1nslmFxdKvdYQU8XfhRCpf2j2PFsjY3el/view">
            <img className='resume-image' src={resumeTwo} alt="Image of Sam Page's Resume"/>
            </a>
            </div>
        </div>
    )
}
