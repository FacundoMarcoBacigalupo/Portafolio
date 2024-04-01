import React, { useState } from 'react'
import GitHub from "../../assets/icons/icons8-github.svg"
import Linkedin from "../../assets/icons/icons8-linkedin.svg"
import "./Contact.css"


const Contact = () => {
    const [fields, setFields] = useState({name:"", email:"", messagge:""})
    const [validations, setValidations] = useState({name:false, email:false, messagge:false});


    const handleInputChange = (e) =>{
        const value = e.target.value;
        const name = e.target.name;
        
        setFields({...fields, [name]:value})
        setValidations({...validations, [name]:value.trim() !== ""});
    }


    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if(fields.email.endsWith("@gmail.com") || fields.email.endsWith("@hotmail.com")){
            //ENVIAR A MI EMAIL CON Email.js
            alert("Submitted form")
        }
        else{
            alert("Fill out the form correctly")
        }
        
        fields.messagge = ""
        setFields({name:"", email:"", messagge:""})
        setValidations({name:false, email:false, messagge:false})
    }


    return (
        <div id='contact'>
            <h2 className='titlePresenting'>Send me a message</h2>
            <p className='description'>Write me to say good morning, ask for my resume, or see if we can do something awesome together? I'm glad to meet you!</p>
            
            <section id='containerContact'>
                <form onSubmit={handleSubmit} className='formStyle'>
                    <section className='nameAddress'>
                        <div>
                            <label>Your Name</label>
                            <input type="text" placeholder='Name' name="name" id="name" value={fields.name} onChange={handleInputChange} required />
                        </div>
                        <div>
                            <label>Email Address</label>
                            <input type="email" placeholder='Email' name="email" id="email" value={fields.email} onChange={handleInputChange} required />
                        </div>
                    </section>
                    
                    <label>Your Message</label>
                    <textarea placeholder="Hello, we need a web developer for a Website for X Company/Pyme." name="message" id="message" onChange={handleInputChange} required></textarea>
                    
                    <button type='submit' className='buttonChange'>Send Message</button>
                </form>
            </section>
            
            <p className='pRRSS'>My social media</p>
            <div className='containerFooterRRSS'>
                <a href="https://github.com/FacundoMarcoBacigalupo" target="_blank" rel="noreferrer">
                    <img src={GitHub} alt="GitHub" />
                </a>
                <a href="https://www.linkedin.com/in/facundolucasmarco/" target="_blank" rel="noreferrer">
                    <img src={Linkedin} alt="LinkedIn " />
                </a>
            </div>
        </div>
    )
}


export default Contact