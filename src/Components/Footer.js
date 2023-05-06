import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
        </p>
        <h1>If you have any questions please don't hesitate to contact me. <br></br> I would love to hear from you!</h1>
        <br></br><br></br><br></br><br></br>
        <h1><i class="fa-solid fa-envelope"></i> Email Me At:</h1>
        <br></br><br></br>
        <h2>marknagieb@gmail.com</h2>
        <br></br><br></br>
        <br></br><br></br>
        <h1><svg viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" width="30" height="30"><path d="M4.5 6v5m6 0V8.5a2 2 0 10-4 0V11 6M4 4.5h1M1.5.5h12a1 1 0 011 1v12a1 1 0 01-1 1h-12a1 1 0 01-1-1v-12a1 1 0 011-1z" stroke="currentColor"></path></svg>
        &nbsp; Connect With Me!</h1>
        <br></br>
        <h2><a rel='noreferrer' className='footer-subscription' href="https://www.linkedin.com/in/mark-nagieb/" target='_blank'>LinkedIn</a></h2>
        <br></br><br></br><br></br><br></br>
        <h2 className='footer-subscription-text'> Download My Resume!</h2>
        <br></br><br></br>
        <div className='input-areas'>
        <Button buttonStyle='btn--outline' onClick={() => {window.open("/files/Resume.pdf")}}>Download</Button>
        <br></br>
        </div>
      </section>
            <Link to='/' className='social-logo'>
            <i className="fa-solid fa-code fa-fade" style={{color: '#0de739'}}></i>
            </Link>
          </div>
  );
}

export default Footer;
