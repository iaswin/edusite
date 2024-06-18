import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className='container'>
      <div className='contactus'>
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Please fill out the form below or reach out.</p>
        <div className='contact-form'>
          <div className='form-group'>
            <label htmlFor='name'>Name:</label>
            <input type='text' id='name' />
          </div>
          <div className='form-group'>
            <label htmlFor='email'>Email:</label>
            <input type='email' id='email' />
          </div>
          <div className='form-group'>
            <label htmlFor='message'>Message:</label>
            <textarea id='message'></textarea>
          </div>
          <button type='submit' className='submitbtn'>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
