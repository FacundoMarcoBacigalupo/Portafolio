import React from 'react';
import { useTranslation } from 'react-i18next';
import bootstrap from '../../assets/icons/icons8-boostrap.svg';
import git from '../../assets/icons/icons8-git.svg';
import html from '../../assets/icons/html5-svgrepo-com.svg';
import javascript from '../../assets/icons/javascript-svgrepo-com.svg';
import reactJs from '../../assets/icons/react-svgrepo-com.svg';
import responsive from '../../assets/icons/responsive-design-symbol-svgrepo-com.svg';
import sass from '../../assets/icons/sass-svgrepo-com.svg';
import css from '../../assets/icons/css3-02-svgrepo-com.svg';
import mongodb from '../../assets/icons/dbs-mongodb-svgrepo-com.svg';
import nodejs from '../../assets/icons/node-js-svgrepo-com.svg';
import java from '../../assets/icons/java.png';
import csharp from '../../assets/icons/iconCsharp.png';
import mySQL from '../../assets/icons/mysql.png';
import kotlin from '../../assets/icons/kotlin.svg';
import './Knows.css';

const groups = [
    {
        key: 'frontend',
        items: [
            { name: 'HTML', icon: html, href: 'https://developer.mozilla.org/es/docs/Web/HTML' },
            { name: 'CSS', icon: css, href: 'https://developer.mozilla.org/es/docs/Web/CSS' },
            { name: 'Sass', icon: sass, href: 'https://sass-lang.com' },
            { name: 'JavaScript', icon: javascript, href: 'https://developer.mozilla.org/es/docs/Web/JavaScript' },
            { name: 'TypeScript', href: 'https://www.typescriptlang.org/' },
            { name: 'React', icon: reactJs, href: 'https://es.react.dev' },
            { name: 'Bootstrap', icon: bootstrap, href: 'https://getbootstrap.com' },
            { name: 'Responsive', icon: responsive, href: 'https://web.dev/responsive-web-design-basics/' },
        ],
    },
    {
        key: 'backend',
        items: [
            { name: 'Node.js', icon: nodejs, href: 'https://nodejs.org/en' },
            { name: 'Java', icon: java, href: 'https://dev.java' },
            { name: 'Spring Boot', href: 'https://spring.io/projects/spring-boot' },
            { name: 'C#', icon: csharp, href: 'https://dotnet.microsoft.com/es-es/languages/csharp' },
            { name: 'ASP.NET Core', href: 'https://dotnet.microsoft.com/es-es/apps/aspnet' },
            { name: 'Kotlin', icon: kotlin, href: 'https://kotlinlang.org/' },
        ],
    },
    {
        key: 'db',
        items: [
            { name: 'MongoDB', icon: mongodb, href: 'https://www.mongodb.com/es' },
            { name: 'MySQL', icon: mySQL, href: 'https://www.mysql.com' },
            { name: 'SQL Server', href: 'https://www.microsoft.com/sql-server' },
            { name: 'Firebase', href: 'https://firebase.google.com/' },
        ],
    },
    {
        key: 'tools',
        items: [
            { name: 'Git', icon: git, href: 'https://git-scm.com' },
            { name: 'Claude Code', href: 'https://www.claude.com/product/claude-code' },
        ],
    },
    {
        key: 'patterns',
        items: [
            { name: 'MVC', href: 'https://developer.mozilla.org/es/docs/Glossary/MVC' },
            { name: 'MVVM', href: 'https://learn.microsoft.com/dotnet/architecture/maui/mvvm' },
            { name: 'Scrum', href: 'https://www.scrum.org/resources/what-scrum-module' },
        ],
    },
];

const Knows = () => {
    const [t] = useTranslation(['global']);

    return (
        <section id="knows" className="section stack">
            <div className="container">
                <div className="section-label" data-reveal="up">
                    <span className="num">01</span> / <span>{t('knows.skills')}</span>
                    <span className="line" />
                </div>
                <h2 className="section-title" data-reveal="up">
                    {t('knows.title')} <em>.</em>
                </h2>
                <p className="section-sub" data-reveal="up">{t('knows.subtitle')}</p>

                <div className="stack-grid">
                    {groups.map((g, i) => (
                        <article
                            key={g.key}
                            className="stack-card"
                            data-reveal="up"
                            style={{ transitionDelay: `${0.08 * i}s` }}
                        >
                            <header className="stack-card__head">
                                <span className="mono mute">// {t(`knows.groups.${g.key}`)}</span>
                                <span className="mono mute">{String(g.items.length).padStart(2, '0')}</span>
                            </header>
                            <ul className="stack-list">
                                {g.items.map((it) => (
                                    <li key={it.name}>
                                        <a href={it.href} target="_blank" rel="noreferrer" className={`chip ${it.icon ? '' : 'chip--text'}`}>
                                            {it.icon ? (
                                                <img src={it.icon} alt="" loading="lazy" width="20" height="20" />
                                            ) : (
                                                <span className="chip__dot" aria-hidden="true" />
                                            )}
                                            <span>{it.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Knows;
