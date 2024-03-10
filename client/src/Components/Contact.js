
import React, { useState } from 'react';
import './contact.css';

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    setFormSubmitted(true);
  };

  return (
    <div className='contact-container'>
      <div className='i'> 
        <h2>Contact Us</h2>
        {formSubmitted ? (
          <p>Thank you for your message! We'll get back to you soon.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='name'>Your Name:</label>
              <input type='text' id='name' name='name' placeholder="Enter your name" required />
            </div>
            <div className='form-group'>
              <label htmlFor='email'>Your Email:</label>
              <input type='email' id='email' name='email' placeholder="Enter your email" required />
            </div>
            <div className='form-group'>
              <label htmlFor='message'>Message:</label>
              <textarea id='message' name='message' rows='4' placeholder="Enter your message" required></textarea>
            </div>
            <button id='b1' type='submit'>Send Message</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Contact;
