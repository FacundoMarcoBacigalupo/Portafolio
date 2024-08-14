import { useTranslation } from 'react-i18next'
import React from 'react'
import MFL from '../../assets/img/MFL-Agencia-Marketing-Digital.png'
import NbStyle from '../../assets/img/nbStyle.png'
import Landing from '../../assets/img/landing.png'
import ToDo from '../../assets/img/ToDo.png'
import Papelera from '../../assets/img/Papelera.png'
import Marvel from "../../assets/img/marvel.png"
import Blog from "../../assets/img/blog.png"
import "./proyects.css"

const Proyects2 = () => {
    const [t] = useTranslation(["global"]);

    return (
        <div id='proyects'>
            <h2 className='titlePresenting'>{t("proyects.title")}</h2>
            
            <section className='containerProyects'>
                <article id='c1' className="card">
                    <img className="card__thumb" src={MFL} alt='MFL' />
                    <div className="card__body">
                        <h2 className="card__title">{t("proyects.mfl")}</h2>
                        <a href='https://agencia-mfl.netlify.app' target="_blank" rel="noreferrer" className="card__more">{t("proyects.button")}</a>
                    </div>
                </article>
                
                <article id='c2' className="card">
                    <header className="card__thumb">
                        <img src={NbStyle} alt='NbStyle' />
                    </header>
                    <div className="card__body">
                        <h2 className="card__title">{t("proyects.nbstyle")}</h2>
                        <a href='https://ecommerce-nbstyle.netlify.app' target="_blank" rel="noreferrer" className="card__more">{t("proyects.button")}</a>
                    </div>
                </article>
                
                <article id='c3' className="card">
                    <header className="card__thumb">
                        <img src={ToDo} alt='ToDo' />
                    </header>
                    <div className="card__body">
                        <h2 className="card__title">{t("proyects.todo")}</h2>
                        <a href='https://lista-de-tareas-todo.netlify.app' target="_blank" rel="noreferrer" className="card__more">{t("proyects.button")}</a>
                    </div>
                </article>
                
                <article id='c4' className="card">
                    <header className="card__thumb">
                        <img src={Landing} alt='Landing' />
                    </header>
                    <div className="card__body">
                        <h2 className="card__title">{t("proyects.landing")}</h2>
                        <a href='https://facundomarcobacigalupo.github.io/Landing-page-ecommerce/' target="_blank" rel="noreferrer" className="card__more">{t("proyects.button")}</a>
                    </div>
                </article>
                
                <article id='c5' className="card">
                    <header className="card__thumb">
                        <img src={Papelera} alt='Papelera' />
                    </header>
                    <div className="card__body">
                        <h2 className="card__title">{t("proyects.papelera")}</h2>
                        <a href='https://papelera-canuelas.netlify.app' target="_blank" rel="noreferrer" className="card__more">{t("proyects.button")}</a>
                    </div>
                </article>
                
                <article id='c6' className="card">
                    <header className="card__thumb">
                        <img src={Blog} alt='Blog' />
                    </header>
                    <div className="card__body">
                        <h2 className="card__title">{t("proyects.blog")}</h2>
                        <a href='https://canuelas-te-escucha.netlify.app/' target="_blank" rel="noreferrer" className="card__more">{t("proyects.button")}</a>
                    </div>
                </article>
                
                <article id='c7' className="card">
                    <header className="card__thumb">
                        <img src={Marvel} alt='Marvel' />
                    </header>
                    <div className="card__body">
                        <h2 className="card__title">{t("proyects.marvel")}</h2>
                        <a href='https://info-marvel.netlify.app/' target="_blank" rel="noreferrer" className="card__more">{t("proyects.button")}</a>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Proyects2