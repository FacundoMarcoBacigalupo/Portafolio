import React, { Fragment } from 'react'
import gitHub from "../../img/githubFooter.png"
import linkedin from "../../img/linkedinFooter.png"
import gmail from "../../img/gmail.png"
import NiceTitle from '../NiceTitle/NiceTitle.jsx'
import "./Contact.css"


const Contact = () => {
    return (
        <Fragment>
            <NiceTitle Title={"Contacto"}/>

            <section id='grillaContact'>
                <div id='contact1'>
                    <img className='imgRRSS' src={gitHub} alt="GitHub" />
                    <a className='stylesA' href='https://github.com/FacundoMarcoBacigalupo'>GitHub</a>
                </div>

                <div id='contact2'>
                    <img className='imgRRSS' src={linkedin} alt="LinkeInd" />
                    <a className='stylesA' href='https://www.linkedin.com/in/facundolucasmarco/'>LinkeInd</a>
                </div>

                <div id='contact3'>
                    <img className='imgRRSS' src={gmail} alt="Gmail" />
                    <a className='stylesA' href='https://mail.google.com/mail/u/1/#sent'>Gmail</a>
                </div>
            </section>
        </Fragment>
    )
}


export default Contact