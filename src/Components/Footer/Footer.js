import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <footer id='contact-info'>
            <div id='footer-title'>
                <h2>Contact Info</h2>
            </div>
            <div>
                <ul id='contact-ul'>
                    <li className='contact-li'>
                        <img src={require("../../Images/Tech/email.png")} alt="A logo of an envelope" className='contact-img' /><a
                            href='mailto:aedanscarn@gmail.com' target="_blank" rel="noopener noreferrer">Aedanscarn@gmail.com</a>
                    </li>
                    <li className='contact-li'>
                        <img src={require("../../Images/Tech/LinkedIn.png")} alt="The linkedin logo" className='contact-img' />
                        <a href='https://www.linkedin.com/in/aedan-warfield-116781194/' target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </li>
                    <li className='contact-li'>
                        <img src={require("../../Images/Tech/GitHub.png")} alt="The github logo" className='contact-img' />
                        <a href='https://github.com/Just-A-Fool' target="_blank" rel="noopener noreferrer">Github</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}