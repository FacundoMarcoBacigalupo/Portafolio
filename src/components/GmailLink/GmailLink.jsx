import React from 'react'
import "./gmailLink.css"


const GmailLink = () => {
    const emailAdress = "marcofacundolucas@gmail.com";
    const subject = "Desarrollo Web";

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${emailAdress}&su=${encodeURIComponent(subject)}`;

    return (
        <a href={gmailLink} className='stylesA' target="_blank" rel="noopener noreferrer">
            Gmail
        </a>
    )
}


export default GmailLink