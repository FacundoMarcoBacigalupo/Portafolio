import React, { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import GitHub from "../../assets/icons/icons8-github.svg"
import Linkedin from "../../assets/icons/icons8-linkedin.svg"
import emailjs from "@emailjs/browser"
import "./Contact.css"

const Contact = () => {
    const [t] = useTranslation(["global"]);


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
            <h2 className='titlePresenting'>{t("contact.sendmsj")}</h2>
            <div id='containerCon'>
                <p className='description'>{t("contact.description")}</p>
                
                <section id='containerContact'>
                    <form ref={refForm} onSubmit={handleSubmit} className='formStyle'>
                        <section className='nameAddress'>
                            <div>
                                <label>{t("contact.name")}</label>
                                <input type="text" placeholder={t("contact.name")} name="name" id="name" value={fields.name} onChange={handleInputChange} required />
                            </div>
                            
                            <div>
                                <label>{t("contact.email")}</label>
                                <input type="email" placeholder={t("contact.email")} name="email" id="email" value={fields.email} onChange={handleInputChange} required />
                            </div>
                        </section>
                        
                        <label>{t("contact.yourmsj")}</label>
                        <textarea placeholder={`${t("contact.yourmsjplaceholder")}`} name="message" id="message" value={fields.message} onChange={handleInputChange} required></textarea>
                        
                        <button type='submit' className='buttonChange'>{t("contact.button")}</button>
                    </form>
                </section>
            </div>
            
            <section className='containerPadreFooterRRSS'>
                <p>{t("contact.rrss")}</p>
                <div className='containerFooterRRSS'>
                    <a href="https://github.com/FacundoMarcoBacigalupo" target="_blank" rel="noreferrer">
                        <img src={GitHub} alt="GitHub" />
                    </a>
                    <a href="https://www.linkedin.com/in/facundomarcobacigalupo/" target="_blank" rel="noreferrer">
                        <img src={Linkedin} alt="LinkedIn " />
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Contact