import React from 'react'
import './About.css'
import weddingSam from '../../images/wedding-sam.PNG'
import marioSam from '../../images/mario-sam.jpg'
import drumSam from '../../images/drums-sam.jpg'
import gradSam from '../../images/graduation-sam.jpg'
import broSam from '../../images/bro-w-sam.jpg'

export default function AboutMe() {
    return (
        <>
            <div className='sam-images'>
                    <marquee  className='marquee' direction='right'>
                        <img id='sam' className='wedding-sam' src={weddingSam} alt='Me in a suit!' />
                        <img id='sam' className='bro-sam' src={broSam} alt='With my BRO!' />
                        <img id='sam' className='grad-sam' src={gradSam} alt="I'm at the beach!" />
                        <img id='sam' className='drums-sam' src={drumSam} alt='Skins baby!' />
                        <img id='sam' className='mario-sam' src={marioSam} alt='Me in a mario suit!' />
                    </marquee>
            </div>

            <div className='about-me-title'>
                <h1>About Me</h1>
                <div className='about-me-scroll'>
                    Born and raised in the northern suburbs of Chicago.
                    Growing up I had many hobbies. Always having a love for music, and a lot of energy,
                    the
                    drums quickly became my favorite instrument. Along with drums, I'm also an avid hockey player and
                    have been practicing
                    since I was five years old.
                    I attended New Trier Highschool and went on to three different colleges: Northeastern Illinois
                    University, Oakton Community College, and then DePaul University.
                    Never quite sure of what I wanted to do, I
                    ultimately
                    took a job in the service industry where I continued to serve & bartend for almost nine years.
                    Eventually, my
                    brother,
                    who works as a tech recruiter, proposed coding to me. I
                    was
                    intruiged and asked him for more information. That is when he recommended doing a coding bootcamp.
                    The rest... is
                    history!
                </div>
            </div>
        </>
    )
}
