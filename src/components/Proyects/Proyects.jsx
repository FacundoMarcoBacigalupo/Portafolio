import { useTranslation } from 'react-i18next'
import React from 'react'
import NbStyle from '../../assets/img/nbStyle.png'
import ToDo from '../../assets/img/ToDo.png'
import Blog from "../../assets/img/blog.jpg"
import mythfImg from "../../assets/img/Mythf.png"
import EdificacionesJonathan from "../../assets/img/constructura.png"
import MimosPapel from "../../assets/img/mimosPapel.png"
import CanuelasProps from "../../assets/img/canuelasProps.png"
import OportoFightClub from "../../assets/img/oportoFightClub.png"
import CrmMythf from "../../assets/img/crm.png"
import TurnosMythF from "../../assets/img/TurnosMythF.png"
import "./proyects.css"

const Proyects2 = () => {
    const [t] = useTranslation(["global"]);

    return (
        <div id='proyects'>
            <h2 className='titlePresenting'>{t("proyects.title")}</h2>

            <section className='containerProyects'>
                <article className="card">
                    <header className="card__thumb">
                        <img src={NbStyle} alt='NbStyle' />
                    </header>
                    <div className="card__body">
                        <h2 className="card__title">{t("proyects.nbstyle")}</h2>
                        <a href='https://ecommerce-nbstyle.netlify.app' target="_blank" rel="noreferrer" className="card__more">{t("proyects.button")}</a>
                    </div>
                </article>

                <article className="card">
                    <header className="card__thumb">
                        <img src={ToDo} alt='ToDo' />
                    </header>
                    <div className="card__body">
                        <h2 className="card__title">{t("proyects.todo")}</h2>
                        <a href='https://lista-de-tareas-todo.netlify.app' target="_blank" rel="noreferrer" className="card__more">{t("proyects.button")}</a>
                    </div>
                </article>

                <article className="card">
                    <header className="card__thumb">
                        <img src={mythfImg} alt='Mythf' />
                    </header>
                    <div className="card__body">
                        <h2 className="card__title">{t("proyects.mythf")}</h2>
                        <a href='https://mythf.site' target="_blank" rel="noreferrer" className="card__more">{t("proyects.button")}</a>
                    </div>
                </article>

                <article className="card">
                    <header className="card__thumb">
                        <img src={CrmMythf} alt='CRM MythF' />
                    </header>
                    <div className="card__body">
                        <h2 className="card__title">{t("proyects.crmythf")}</h2>
                        <a href='https://mythf.site/servicio-paquete-software' target="_blank" rel="noreferrer" className="card__more">{t("proyects.button")}</a>
                    </div>
                </article>

                <article className="card">
                    <header className="card__thumb">
                        <img src={EdificacionesJonathan} alt='Edificaciones Jonathan' />
                    </header>
                    <div className="card__body">
                        <h2 className="card__title">{t("proyects.edificacionesJonathan")}</h2>
                        <a href='https://edificaciones-jonathan.vercel.app' target="_blank" rel="noreferrer" className="card__more">{t("proyects.button")}</a>
                    </div>
                </article>

                <article className="card">
                    <header className="card__thumb">
                        <img src={MimosPapel} alt='Mimos en Papel' />
                    </header>
                    <div className="card__body">
                        <h2 className="card__title">{t("proyects.mimosPapel")}</h2>
                        <a href='https://mimos-papel.vercel.app' target="_blank" rel="noreferrer" className="card__more">{t("proyects.button")}</a>
                    </div>
                </article>

                <article className="card">
                    <header className="card__thumb">
                        <img src={CanuelasProps} alt='Cañuelas Props' />
                    </header>
                    <div className="card__body">
                        <h2 className="card__title">{t("proyects.canuelasProps")}</h2>
                        <a href='https://canuelas-props.vercel.app' target="_blank" rel="noreferrer" className="card__more">{t("proyects.button")}</a>
                    </div>
                </article>

                <article className="card">
                    <header className="card__thumb">
                        <img src={OportoFightClub} alt='Oporto Fight Club' />
                    </header>
                    <div className="card__body">
                        <h2 className="card__title">{t("proyects.oportoFightClub")}</h2>
                        <a href='https://oporto-fight-club.vercel.app' target="_blank" rel="noreferrer" className="card__more">{t("proyects.button")}</a>
                    </div>
                </article>

                <article className="card">
                    <header className="card__thumb">
                        <img src={Blog} alt='Blog' />
                    </header>
                    <div className="card__body">
                        <h2 className="card__title">{t("proyects.blog")}</h2>
                        <a href='https://it-noticias.netlify.app' target="_blank" rel="noreferrer" className="card__more">{t("proyects.button")}</a>
                    </div>
                </article>

                <article className="card">
                    <header className="card__thumb">
                        <img src={TurnosMythF} alt='Turnos MythF' />
                    </header>
                    <div className="card__body">
                        <h2 className="card__title">{t("proyects.turnosMythf")}</h2>
                        <a href='https://mythf.site' target="_blank" rel="noreferrer" className="card__more">{t("proyects.button")}</a>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default Proyects2