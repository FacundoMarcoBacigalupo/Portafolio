import React, { useState, useRef } from 'react'
import GitHub from "../../assets/icons/icons8-github.svg"
import Linkedin from "../../assets/icons/icons8-linkedin.svg"
import emailjs from "@emailjs/browser"
import "./Contact.css"



const Contact = () => {
    const [fields, setFields] = useState({name:"", email:"", message:""})
    const [validations, setValidations] = useState({name:false, email:false, message:false});


    const refForm = useRef()
    const serviceId = "service_rzvqy8t";
    const templateId = "template_0a85z8s";
    const apiKey = "o-fORQkoze7TQoYO7";


    const handleInputChange = (e) =>{
        const value = e.target.value;
        const name = e.target.name;
        
        setFields({...fields, [name]:value})
        setValidations({...validations, [name]:value.trim() !== ""});
    }


    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if(fields.email.endsWith("@gmail.com") || fields.email.endsWith("@hotmail.com")){
            emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
            .catch( error => console.error(error) )
            
            alert("Submitted form")
        }
        else{
            alert("Fill out the form correctly")
        }
        
        setFields({name:"", email:"", message:""})
        setValidations({name:false, email:false, message:false})
    }



    return (
        <div id='contact'>
            <h2 className='titlePresenting'>Send me a message</h2>
            <div id='containerCon'>
                <p className='description'>Write me to say good morning, ask for my resume, or see if we can do something awesome together? I'm glad to meet you!</p>
                
                <section id='containerContact'>
                    <form ref={refForm} onSubmit={handleSubmit} className='formStyle'>
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
                        <textarea placeholder="Hello, we need a web developer for a Website for X Company/Pyme." name="message" id="message" value={fields.message} onChange={handleInputChange} required></textarea>
                        
                        <button type='submit' className='buttonChange'>Send Message</button>
                    </form>
                </section>
            </div>
            
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