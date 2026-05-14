import React, { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';
import GitHub from '../../assets/icons/icons8-github.svg';
import Linkedin from '../../assets/icons/icons8-linkedin.svg';
import './Contact.css';

const SERVICE_ID = 'service_rzvqy8t';
const TEMPLATE_ID = 'template_0a85z8s';
const PUBLIC_KEY = 'o-fORQkoze7TQoYO7';

const isValidEmail = (e) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);

const Contact = () => {
    const [t] = useTranslation(['global']);
    const refForm = useRef();
    const [fields, setFields] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ type: '', text: '' });
    const [sending, setSending] = useState(false);

    const handleChange = (e) => {
        setFields((f) => ({ ...f, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!fields.name.trim() || !fields.message.trim()) {
            setStatus({ type: 'error', text: t('contact.errMissing') });
            return;
        }
        if (!isValidEmail(fields.email)) {
            setStatus({ type: 'error', text: t('contact.errEmail') });
            return;
        }
        try {
            setSending(true);
            await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, refForm.current, PUBLIC_KEY);
            setStatus({ type: 'ok', text: t('contact.ok') });
            setFields({ name: '', email: '', message: '' });
        } catch (err) {
            console.error(err);
            setStatus({ type: 'error', text: t('contact.errSend') });
        } finally {
            setSending(false);
        }
    };

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <div className="section-label" data-reveal="up">
                    <span className="num">03</span> / <span>{t('contact.label')}</span>
                    <span className="line" />
                </div>

                <div className="contact-grid">
                    <div className="contact-intro" data-reveal="left">
                        <h2 className="section-title">
                            {t('contact.heading')} <em>.</em>
                        </h2>
                        <p className="contact-text">{t('contact.description')}</p>

                        <ul className="contact-list">
                            <li>
                                <span className="mono mute">EMAIL</span>
                                <a href="mailto:marcofacundolucas@gmail.com">marcofacundolucas@gmail.com</a>
                            </li>
                            <li>
                                <span className="mono mute">WHATSAPP</span>
                                <a href="https://wa.me/+5401127398858" target="_blank" rel="noreferrer">
                                    +54 011 2739-8858
                                </a>
                            </li>
                            <li>
                                <span className="mono mute">LOCATION</span>
                                <span>Buenos Aires, AR</span>
                            </li>
                        </ul>

                        <div className="contact-socials">
                            <span className="mono mute">{t('contact.rrss')}</span>
                            <div className="contact-socials__row">
                                <a href="https://github.com/FacundoMarcoBacigalupo" target="_blank" rel="noreferrer" aria-label="GitHub">
                                    <img src={GitHub} alt="" loading="lazy" />
                                </a>
                                <a href="https://www.linkedin.com/in/facundomarcobacigalupo/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                    <img src={Linkedin} alt="" loading="lazy" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <form ref={refForm} onSubmit={handleSubmit} className="contact-form" data-reveal="right" noValidate>
                        <div className="field">
                            <label htmlFor="name">{t('contact.name')}</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder={t('contact.namePh')}
                                value={fields.name}
                                onChange={handleChange}
                                autoComplete="name"
                                required
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="email">{t('contact.email')}</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                placeholder={t('contact.emailPh')}
                                value={fields.email}
                                onChange={handleChange}
                                autoComplete="email"
                                required
                            />
                        </div>
                        <div className="field">
                            <label htmlFor="message">{t('contact.yourmsj')}</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder={t('contact.yourmsjplaceholder')}
                                value={fields.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        {status.text && (
                            <p className={`form-status ${status.type === 'ok' ? 'ok' : 'err'}`}>
                                {status.text}
                            </p>
                        )}

                        <button type="submit" className="btn btn--primary form-submit" disabled={sending}>
                            {sending ? t('contact.sending') : t('contact.button')}
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                <path d="M5 12h14" />
                                <path d="m13 5 7 7-7 7" />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>

            <footer className="footer container">
                <span className="mono mute">© {new Date().getFullYear()} Facundo Marco Bacigalupo</span>
                <span className="mono mute">{t('footer.crafted')}</span>
            </footer>
        </section>
    );
};

export default Contact;
