import { useTranslation } from 'react-i18next'
import React from 'react'
import bootstrap from '../../assets/icons/icons8-boostrap.svg'
import git from '../../assets/icons/icons8-git.svg'
import html from "../../assets/icons/html5-svgrepo-com.svg"
import javascript from '../../assets/icons/javascript-svgrepo-com.svg'
import reactJs from '../../assets/icons/react-svgrepo-com.svg'
import responsive from '../../assets/icons/responsive-design-symbol-svgrepo-com.svg'
import sass from '../../assets/icons/sass-svgrepo-com.svg'
import css from '../../assets/icons/css3-02-svgrepo-com.svg'
import mongodb from '../../assets/icons/dbs-mongodb-svgrepo-com.svg'
import nodejs from "../../assets/icons/node-js-svgrepo-com.svg"
import java from "../../assets/icons/java.png"
import "./Knows.css"

const Knows = () => {
    const [t] = useTranslation(["global"]);

    return (
        <div id='knows'>
            <h2 className='titlePresenting'>{t("knows.skills")}</h2>
            
            <article className='container'>
                    <a href="https://nodejs.org/en" target="_blank" rel="noreferrer" id='card1' className='cardSkills'>
                        <p>Node.js</p>
                        <img src={nodejs} alt="Skill" />
                    </a>
                    
                    <a href="https://www.mongodb.com/es" target="_blank" rel="noreferrer" id='card2' className='cardSkills'>
                        <p>MongoDB</p>
                        <img src={mongodb} alt="Skill" />
                    </a>
                    
                    <a href="https://developer.mozilla.org/es/docs/Web/CSS" target="_blank" rel="noreferrer" id='card3' className='cardSkills'>
                        <p>Css</p>
                        <img src={css} alt="Skill" />
                    </a>
                    
                    <a href="https://sass-lang.com" target="_blank" rel="noreferrer" id='card4' className='cardSkills'>
                        <p>Sass</p>
                        <img src={sass} alt="Skill" />
                    </a>
                    
                    <a href="https://www.40defiebre.com/que-es/diseno-responsive" target="_blank" rel="noreferrer" id='card5' className='cardSkills'>
                        <p>Responsive</p>
                        <img src={responsive} alt="Skill" />
                    </a>
                    
                    <a href="https://es.react.dev" target="_blank" rel="noreferrer" id='card6' className='cardSkills'>
                        <p>React.js</p>
                        <img src={reactJs} alt="Skill" />
                    </a>
                    
                    <a href="https://developer.mozilla.org/es/docs/Web/JavaScript" target="_blank" rel="noreferrer" id='card7' className='cardSkills'>
                        <p>Javascript</p>
                        <img src={javascript} alt="Skill" />
                    </a>
                    
                    <a href="https://developer.mozilla.org/es/docs/Web/HTML" target="_blank" rel="noreferrer" id='card8' className='cardSkills'>
                        <p>Html</p>
                        <img src={html} alt="Skill" />
                    </a>
                    
                    <a href="https://getbootstrap.com" target="_blank" rel="noreferrer" id='card9' className='cardSkills'>
                        <p>Bootstrap</p>
                        <img src={bootstrap} alt="Skill" />
                    </a>
                    
                    <a href="https://git-scm.com" target="_blank" rel="noreferrer" id='card10' className='cardSkills'>
                        <p>Git</p>
                        <img src={git} alt="Skill" />
                    </a>
                    
                    <a href="https://dev.java" target="_blank" rel="noreferrer" id='card11' className='cardSkills'>
                        <p>Java</p>
                        <img src={java} alt="Skill" />
                    </a>
            </article>
        </div>
    )
}

export default Knows