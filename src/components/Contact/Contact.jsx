import React, { Fragment } from 'react'
import gitHub from "../../img/githubFooter.png"
import linkedin from "../../img/linkedinFooter.png"
import gmail from "../../img/gmail.png"
import whatsApp from "../../img/whatsapp.png"
import GmailLink from '../GmailLink/GmailLink'
import "./Contact.css"


const Contact = () => {

    return (
        <Fragment>
            <h2 className='titlePresenting'>Contacto</h2>

            <section id='grillaContact'>
                <div id='contact1'>
                    <img className='imgRRSS' src={whatsApp} alt="WhatsApp" />
                    <a className='stylesA' href='https://wa.me/+5401127398858' target="_blank" rel="noreferrer">WhatsApp</a>
                </div>

                <div id='contact2'>
                    <img className='imgRRSS' src={gitHub} alt="GitHub" />
                    <a className='stylesA' href='https://github.com/FacundoMarcoBacigalupo' target="_blank" rel="noreferrer">GitHub</a>
                </div>

                <div id='contact3'>
                    <img className='imgRRSS' src={linkedin} alt="LinkeInd" />
                    <a className='stylesA' href='https://www.linkedin.com/in/facundolucasmarco/' target="_blank" rel="noreferrer">LinkeInd</a>
                </div>

                <div id='contact4'>
                    <img className='imgRRSS' src={gmail} alt="Gmail" />
                    <GmailLink />
                </div>
            </section>
        </Fragment>
    )
}


export default Contact