import React, { useRef } from 'react';
import './contact.css';
import facebookicon from '../../assets/facebookicon.jpg';
import instagramicon from '../../assets/instagramicon.jpg';
import twittericon from '../../assets/twittericon.jpg';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    console.log("Sending email..."); // Debugging line

    emailjs.sendForm('service_z0uiifk', 'template_5vghfm2', form.current, '2yrFSpXNrteMuRH9_')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Email sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send email, please try again.');
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">Please fill out the form below to discuss the work and for more details</span>
        <form className='contactForm' ref={form} onSubmit={sendEmail}>
          <input type="text" className="name" placeholder='Your Name' name='from_name' required></input>
          <input type="email" className="email" placeholder='Your Email' name='your_email' required></input>
          <textarea className="msg" name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type='submit' className="submitBtn">Submit</button>
          <div className="link">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebookicon} alt="facebook" className="link-icon" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagramicon} alt="instagram" className="link-icon" />
            </a>
            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twittericon} alt="twitter" className="link-icon" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
