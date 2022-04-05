import React from 'react'
import './About.css'
import Marquee from 'react-fast-marquee'
import weddingSam from '../../images/wedding-sam.PNG'
import marioSam from '../../images/mario-sam.jpg'
import drumSam from '../../images/drums-sam.jpg'
import gradSam from '../../images/graduation-sam.jpg'
import broSam from '../../images/bro-w-sam.jpg'


export default function AboutMe() {
    return (
        <>
            <div className='sam-images'>
                <Marquee speed={70} pauseOnClick={true} gradientColor={[1, 38, 80]} gradientWidth={50}>
                    <img id='sam' className='grad-sam' src={gradSam} alt="I'm at the beach!" />
                    <img id='sam' className='bro-sam' src={broSam} alt='With my BRO!' />
                    <img id='sam' className='wedding-sam' src={weddingSam} alt='Me in a suit!' />
                    <img id='sam' className='mario-sam' src={marioSam} alt='Me in a mario suit!' />
                    <img id='sam' className='drums-sam' src={drumSam} alt='Skins baby!' />
                </Marquee>
            </div>

            <div className='about-me-div'>
                <h1 className='about-me-title'>About Me</h1>
                <div className='about-me-scroll'>
                    Hi, my name is Sam! I was born & raised in the northern suburbs of Chicago.
                    Growing up I had many hobbies. Always having a love for music, and a lot of energy,
                    the
                    drums quickly became my favorite instrument. I'm also an avid hockey player and
                    have been practicing
                    since I was five years old.
                    I attended New Trier Highschool and went on to three different colleges: Northeastern Illinois
                    University, Oakton Community College, and then DePaul University.
                    Never quite sure of what I wanted to do, I
                    ultimately
                    took a job in the service industry where I continued to serve & bartend for almost nine years.
                    Eventually, I discovered software development, and looked into the world of coding. I
                    was
                    intruiged began to search for more information on the subject. That is when I came across coding bootcamps. Since then I have loved every minute while learning how to code, and have never been more eager to gain more knowledge!
                    
                </div>
            </div>
        </>
    )
}
