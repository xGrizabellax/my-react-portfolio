import './Contact.css'
import ContactForm from './ContactForm'

export default function Contact() {

    return (
        <>
            <div className='contact-section'>
                <div className='contact-info'>
                    <h1>Contact Info</h1>
                    <div className='contact-info'>
                        <h4>Email:</h4>
                        <h2>sampagecode@gmail.com</h2>
                    </div>
                </div>
                <ContactForm />
            </div>
        </>
    )
}