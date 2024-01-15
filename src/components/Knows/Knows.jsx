import React from 'react'
import VScode from '../../img/VScode.png'
import bootstrap from '../../img/bootstrap.png'
import css from '../../img/css.png'
import git from '../../img/git.png'
import github from '../../img/github.png'
import html from '../../img/html.png'
import javascript from '../../img/javascript.png'
import reactJs from '../../img/reactJs.png'
import responsive from '../../img/responsive.png'
import sass from '../../img/sass.png'
import mongodb from '../../img/mongodb.png'
import nodejs from '../../img/nodejs.png'
import "./Knows.css"


const Knows = () => {
    return (
        <article className='backgroundBox'>
            <h2 className='titlePresenting'>Mis conocimiento y herramientas</h2>

            <section id='grillaContainer'>
                <div id='img1'>
                    <img className='styleImg' src={VScode} alt="Know 1" />
                    <p>Visual Studio Code</p>
                </div>

                <div id='img2'>
                    <img className='styleImg' src={bootstrap} alt="Know 2" />
                    <p>Bootstrap</p>
                </div>

                <div id='img3'>
                    <img className='styleImg' src={css} alt="Know 3" />
                    <p>Css</p>
                </div>

                <div id='img4'>
                    <img className='styleImg' src={sass} alt="Know 4" />
                    <p>Sass</p>
                </div>

                <div id='img5'>
                    <img className='styleImg' src={github} alt="Know 5" />
                    <p>GitHub</p>
                </div>

                <div id='img6'>
                    <img className='styleImg' src={reactJs} alt="Know 6" />
                    <p>React.   Js</p>
                </div>

                <div id='img7'>
                    <img className='styleImg' src={javascript} alt="Know 7" />
                    <p>JavaScript</p>
                </div>

                <div id='img8'>
                    <img className='styleImg' src={html} alt="Know 8" />
                    <p>html</p>
                </div>

                <div id='img9'>
                    <img className='styleImg' src={responsive} alt="Know 9" />
                    <p>Diseño Responvisve</p>
                </div>

                <div id='img10'>
                    <img className='styleImg' src={git} alt="Know 10" />
                    <p>Git</p>
                </div>

                <div id='img11'>
                    <img className='styleImg' src={mongodb} alt="Know 11" />
                    <p>MongoDB</p>
                </div>

                <div id='img12'>
                    <img className='styleImg' src={nodejs} alt="Know 12" />
                    <p>Node.js</p>
                </div>
            </section>
        </article>
    )
}


export default Knows