// import { useState } from 'react';

export default function ContactForm() {
    // const [ formValues, setFormValues ] = useState({
    // })
    return (
        <form className='contact-form contact'>
            <label className='form-label'>LEAVE A MESSAGE:</label>
            <input 
                className='name-input inputs'
                type='text'
                placeholder='name'
                name='name'
                required
            />
            <input 
                className='email-input inputs'
                type='email'
                placeholder='email'
                name='email'
                required
            />
            <textarea 
                className='message-input inputs'
                placeholder='message'
                name='message'
                required
            />
            <button className='form-button' type='submit'>Submit</button>
        </form>
    )
}