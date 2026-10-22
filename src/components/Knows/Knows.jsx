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
import typescript from '../../assets/icons/si-typescript.svg';
import reactRouter from '../../assets/icons/si-reactrouter.svg';
import redux from '../../assets/icons/si-redux.svg';
import tailwindcss from '../../assets/icons/si-tailwindcss.svg';
import vite from '../../assets/icons/si-vite.svg';
import socketio from '../../assets/icons/si-socketdotio.svg';
import express from '../../assets/icons/si-express.svg';
import springBoot from '../../assets/icons/si-springboot.svg';
import dotnet from '../../assets/icons/si-dotnet.svg';
import python from '../../assets/icons/si-python.svg';
import php from '../../assets/icons/si-php.svg';
import sqlserver from '../../assets/icons/dev-sqlserver.svg';
import firebase from '../../assets/icons/si-firebase.svg';
import sequelize from '../../assets/icons/si-sequelize.svg';
import vitest from '../../assets/icons/si-vitest.svg';
import junit from '../../assets/icons/si-junit5.svg';
import eslint from '../../assets/icons/si-eslint.svg';
import prettier from '../../assets/icons/si-prettier.svg';
import jwt from '../../assets/icons/si-jsonwebtokens.svg';
import mercadopago from '../../assets/icons/si-mercadopago.svg';
import cloudinary from '../../assets/icons/si-cloudinary.svg';
import docker from '../../assets/icons/si-docker.svg';
import gemini from '../../assets/icons/si-googlegemini.svg';
import githubCopilot from '../../assets/icons/si-githubcopilot.svg';
import cursor from '../../assets/icons/si-cursor.svg';
import grafana from '../../assets/icons/si-grafana.svg';
import claudeCode from '../../assets/icons/si-claudecode.svg';
import opencode from '../../assets/icons/opencode.png';
import codex from '../../assets/icons/codex.png';
import './Knows.css';

const groups = [
    {
        key: 'frontend',
        items: [
            { name: 'HTML', icon: html, href: 'https://developer.mozilla.org/es/docs/Web/HTML' },
            { name: 'CSS', icon: css, href: 'https://developer.mozilla.org/es/docs/Web/CSS' },
            { name: 'Sass', icon: sass, href: 'https://sass-lang.com' },
            { name: 'JavaScript', icon: javascript, href: 'https://developer.mozilla.org/es/docs/Web/JavaScript' },
            { name: 'TypeScript', icon: typescript, href: 'https://www.typescriptlang.org/' },
            { name: 'React', icon: reactJs, href: 'https://es.react.dev' },
            { name: 'React Router', icon: reactRouter, href: 'https://reactrouter.com/' },
            { name: 'Redux', icon: redux, href: 'https://redux.js.org/' },
            { name: 'Bootstrap', icon: bootstrap, href: 'https://getbootstrap.com' },
            { name: 'TailwindCSS', icon: tailwindcss, href: 'https://tailwindcss.com/' },
            { name: 'Vite', icon: vite, href: 'https://vitejs.dev/' },
            { name: 'PWA', href: 'https://web.dev/progressive-web-apps/' },
            { name: 'Service Workers', href: 'https://developer.mozilla.org/es/docs/Web/API/Service_Worker_API' },
            { name: 'Socket.IO', icon: socketio, href: 'https://socket.io/' },
            { name: 'Responsive', icon: responsive, href: 'https://web.dev/responsive-web-design-basics/' },
        ],
    },
    {
        key: 'backend',
        items: [
            { name: 'Node.js', icon: nodejs, href: 'https://nodejs.org/en' },
            { name: 'Express', icon: express, href: 'https://expressjs.com/' },
            { name: 'Java', icon: java, href: 'https://dev.java' },
            { name: 'Spring Boot', icon: springBoot, href: 'https://spring.io/projects/spring-boot' },
            { name: 'C#', icon: csharp, href: 'https://dotnet.microsoft.com/es-es/languages/csharp' },
            { name: 'ASP.NET Core', icon: dotnet, href: 'https://dotnet.microsoft.com/es-es/apps/aspnet' },
            { name: 'Kotlin', icon: kotlin, href: 'https://kotlinlang.org/' },
            { name: 'Python', icon: python, href: 'https://www.python.org/' },
            { name: 'PHP', icon: php, href: 'https://www.php.net/' },
        ],
    },
    {
        key: 'db',
        items: [
            { name: 'MySQL', icon: mySQL, href: 'https://www.mysql.com' },
            { name: 'SQL Server', icon: sqlserver, href: 'https://www.microsoft.com/sql-server' },
            { name: 'MongoDB', icon: mongodb, href: 'https://www.mongodb.com/es' },
            { name: 'Firebase', icon: firebase, href: 'https://firebase.google.com/' },
            { name: 'Sequelize', icon: sequelize, href: 'https://sequelize.org/' },
            { name: 'Primary-Replica Replication', href: 'https://dev.mysql.com/doc/refman/8.0/en/replication.html' },
        ],
    },
    {
        key: 'testing',
        items: [
            { name: 'TDD', href: 'https://martinfowler.com/bliki/TestDrivenDevelopment.html' },
            { name: 'Automated Testing', href: 'https://www.browserstack.com/guide/automated-testing' },
            { name: 'Vitest', icon: vitest, href: 'https://vitest.dev/' },
            { name: 'JUnit 4/5', icon: junit, href: 'https://junit.org/' },
            { name: 'Mockito', href: 'https://site.mockito.org/' },
            { name: 'ESLint', icon: eslint, href: 'https://eslint.org/' },
            { name: 'Prettier', icon: prettier, href: 'https://prettier.io/' },
            { name: 'Integration Testing', href: 'https://martinfowler.com/bliki/IntegrationTest.html' },
            { name: 'E2E Testing', href: 'https://www.browserstack.com/guide/end-to-end-testing' },
        ],
    },
    {
        key: 'cicd',
        items: [
            { name: 'CI/CD Pipelines', href: 'https://about.gitlab.com/topics/ci-cd/' },
            { name: 'Git Hooks', icon: git, href: 'https://git-scm.com/docs/githooks' },
        ],
    },
    {
        key: 'services',
        items: [
            { name: 'JWT', icon: jwt, href: 'https://jwt.io/' },
            { name: 'Nodemailer', href: 'https://nodemailer.com/' },
            { name: 'MercadoPago SDK', icon: mercadopago, href: 'https://www.mercadopago.com.ar/developers' },
            { name: 'Cloudinary', icon: cloudinary, href: 'https://cloudinary.com/' },
        ],
    },
    {
        key: 'tools',
        items: [
            { name: 'Git', icon: git, href: 'https://git-scm.com' },
            { name: 'Docker', icon: docker, href: 'https://www.docker.com/' },
            { name: 'Power BI', href: 'https://powerbi.microsoft.com/' },
            { name: 'Power Query', href: 'https://learn.microsoft.com/power-query/' },
            { name: 'Claude Code', icon: claudeCode, href: 'https://www.claude.com/product/claude-code' },
            { name: 'Gemini', icon: gemini, href: 'https://gemini.google.com/' },
            { name: 'GitHub Copilot', icon: githubCopilot, href: 'https://github.com/features/copilot' },
            { name: 'Cursor', icon: cursor, href: 'https://www.cursor.com/' },
            { name: 'Codex', icon: codex, href: 'https://openai.com/codex' },
            { name: 'OpenCode', icon: opencode, href: 'https://opencode.ai/' },
            { name: 'Grafana', icon: grafana, href: 'https://grafana.com/' },
        ],
    },
    {
        key: 'patterns',
        items: [
            { name: 'Scrum', href: 'https://www.scrum.org/resources/what-scrum-module' },
            { name: 'MVC', href: 'https://developer.mozilla.org/es/docs/Glossary/MVC' },
            { name: 'MVVM', href: 'https://learn.microsoft.com/dotnet/architecture/maui/mvvm' },
            { name: 'SOLID', href: 'https://en.wikipedia.org/wiki/SOLID' },
            { name: 'Clean Architecture', href: 'https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html' },
            { name: 'Hexagonal', href: 'https://alistair.cockburn.us/hexagonal-architecture/' },
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
                                <span className="mono mute">{'//'} {t(`knows.groups.${g.key}`)}</span>
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
