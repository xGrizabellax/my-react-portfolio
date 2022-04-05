import React from 'react'
import './Resume.css'
import resume from '../../images/SamuelPageResumePg1.PNG'
import resumeTwo from '../../images/SamuelPageResumePg2.PNG'

export default function Resume() {
    return (
        <div className='resume-section'>
            <h3 className='resume-title'>Resume:</h3>
            <div className='resume-images'>
            <a href="https://drive.google.com/file/d/1FgsdI640XkhURPr4q69pZ-Jicx1PNXeQ/view?usp=sharing">
            <img className='resume-image' src={resume} alt="Image of Sam Page's Resume"/>
            </a>
            <a href="https://drive.google.com/file/d/1FgsdI640XkhURPr4q69pZ-Jicx1PNXeQ/view?usp=sharing">
            <img className='resume-image' src={resumeTwo} alt="Image of Sam Page's Resume"/>
            </a>
            </div>
        </div>
    )
}
