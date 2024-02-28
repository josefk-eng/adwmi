import React from 'react'
import './forms.scss'

function ContactForm() {
    return (
        <form action="" className='contact-form'>
            <label htmlFor="name">Full Name</label>
            <input type="text" name='fullName' placeholder='Your full names' />

            <label htmlFor="email">Email</label>
            <input type="email" name='email' placeholder='Your email address' />

            <label htmlFor="message">Message</label>
            <textarea name="message" id="message" cols="30" rows="5"></textarea>

            <input type="submit" value="Send Message" />
        </form>
    )
}

export default ContactForm
