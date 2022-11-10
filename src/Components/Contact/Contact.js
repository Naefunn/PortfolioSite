import {React, useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = useRef();

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_wrgv2pt', 'template_pmlh60l', form.current, '6BbT2RchdOR_NuJUt')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

  return (
    <div className='contact-form'>
        <div className='w-left'>
            <div className='awesome'>
                <span>Get In Touch</span>
                <br/>
                <span>Contact Me</span>
            </div>
        </div>

        <div className='c-right'>
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name'/>
                <input type="email" name='user_email' className='user' placeholder='Email'/>
                <textarea name='message' className='user' placeholder='Message'/>
                <input type='submit' value='Send' className='button'/>
                <span>{done && "Thanks for contacting me!"}</span>
            </form>
        </div>

    </div>
  )
}

export default Contact