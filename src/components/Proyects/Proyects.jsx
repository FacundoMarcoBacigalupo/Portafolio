import React from 'react';
import { useTranslation } from 'react-i18next';
import NbStyle from '../../assets/img/nbStyle.png';
import ToDo from '../../assets/img/ToDo.png';
import Blog from '../../assets/img/blog.jpg';
import mythfImg from '../../assets/img/Mythf.png';
import EdificacionesJonathan from '../../assets/img/constructura.png';
import MimosPapel from '../../assets/img/mimosPapel.png';
import CanuelasProps from '../../assets/img/canuelasProps.png';
import OportoFightClub from '../../assets/img/oportoFightClub.png';
import CrmMythf from '../../assets/img/crm.png';
import TurnosMythF from '../../assets/img/TurnosMythF.png';
import RutaVivaMythfImg from '../../assets/img/RutaVivaMythF.png';
import './proyects.css';

const projects = [
    { key: 'mythf', img: mythfImg, href: 'https://mythf.site', tags: ['Agency', 'Brand'] },
    { key: 'crmythf', img: CrmMythf, href: 'https://mythf.site/servicio-paquete-software', tags: ['CRM', 'SaaS'] },
    { key: 'turnosMythf', img: TurnosMythF, href: 'https://turnos.mythf.site', tags: ['SaaS', 'Agendas'] },
    { key: 'rutavivaMythf', img: RutaVivaMythfImg, href: 'https://rutaviva.mythf.site/', tags: ['Transport', 'Fullstack'] },
    { key: 'nbstyle', img: NbStyle, href: 'https://ecommerce-nbstyle.netlify.app', tags: ['Ecommerce', 'React'] },
    { key: 'edificacionesJonathan', img: EdificacionesJonathan, href: 'https://edificaciones-jonathan.vercel.app', tags: ['Construction', 'Landing'] },
    { key: 'mimosPapel', img: MimosPapel, href: 'https://mimos-papel.vercel.app', tags: ['Shop', 'Brand'] },
    { key: 'canuelasProps', img: CanuelasProps, href: 'https://canuelas-props.vercel.app', tags: ['Real Estate'] },
    { key: 'oportoFightClub', img: OportoFightClub, href: 'https://oporto-fight-club.vercel.app', tags: ['Gym', 'Landing'] },
    { key: 'todo', img: ToDo, href: 'https://lista-de-tareas-todo.netlify.app', tags: ['App', 'Utility'] },
    { key: 'blog', img: Blog, href: 'https://it-noticias.netlify.app', tags: ['Blog', 'News'] },
];

const Proyects = () => {
    const [t] = useTranslation(['global']);

    return (
        <section id="proyects" className="section projects">
            <div className="container">
                <div className="section-label" data-reveal="up">
                    <span className="num">02</span> / <span>{t('proyects.label')}</span>
                    <span className="line" />
                </div>
                <h2 className="section-title" data-reveal="up">
                    {t('proyects.title')} <em>.</em>
                </h2>
                <p className="section-sub" data-reveal="up">{t('proyects.subtitle')}</p>

                <div className="projects-grid">
                    {projects.map((p, i) => (
                        <a
                            key={p.key}
                            href={p.href}
                            target="_blank"
                            rel="noreferrer"
                            className="proj-card"
                            data-reveal="up"
                            style={{ transitionDelay: `${0.05 * (i % 6)}s` }}
                        >
                            <div className="proj-thumb">
                                <img
                                    src={p.img}
                                    alt={t(`proyects.${p.key}`)}
                                    loading={i < 3 ? 'eager' : 'lazy'}
                                    decoding="async"
                                />
                            </div>
                            <div className="proj-body">
                                <div className="proj-meta">
                                    <span className="mono mute">P/{String(i + 1).padStart(2, '0')}</span>
                                    <div className="proj-tags">
                                        {p.tags.map((tag) => (
                                            <span key={tag} className="proj-tag">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                                <h3 className="proj-title">
                                    <span>{t(`proyects.${p.key}`)}</span>
                                    <svg className="proj-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M7 17 17 7" />
                                        <path d="M8 7h9v9" />
                                    </svg>
                                </h3>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Proyects;
