import './Contact.css'
import ContactForm from './ContactForm'

export default function Contact() {

    return (
        <>
            <div className='contact-section'>
                <div className='contact-card contact'>
                    <h1 className='contact-info-title'>Contact Info</h1>
                    <div className='contact-info'>
                        <h4 className='contact-me'>Email:</h4>
                        <h2>sampagecode@gmail.com</h2>
                        <h4 className='contact-me'>Phone:</h4>
                        <h2>(847) 721-0297</h2>
                    </div>
                </div>
                <div className='or'>
                OR
                </div>
                <ContactForm />
            </div>
        </>
    )
}