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
import "./knows.css"


const Knows = () => {
    return (
        <article className='backgroundBox'>
            <h2 className='titlePresenting'>Mis conocimiento y herramientas</h2>

            <section id='grillaContainer'>
                <div id='img1'>
                    <img className='styleImg' src={VScode} alt="Conocimiento 1" />
                    <p>Visual Studio Code</p>
                </div>

                <div id='img2'>
                    <img className='styleImg' src={bootstrap} alt="Conocimiento 2" />
                    <p>Bootstrap</p>
                </div>

                <div id='img3'>
                    <img className='styleImg' src={css} alt="Conocimiento 3" />
                    <p>Css</p>
                </div>

                <div id='img4'>
                    <img className='styleImg' src={sass} alt="Conocimiento 4" />
                    <p>Sass</p>
                </div>

                <div id='img5'>
                    <img className='styleImg' src={github} alt="Conocimiento 5" />
                    <p>GitHub</p>
                </div>

                <div id='img6'>
                    <img className='styleImg' src={reactJs} alt="Conocimiento 6" />
                    <p>React Js</p>
                </div>

                <div id='img7'>
                    <img className='styleImg' src={javascript} alt="Conocimiento 7" />
                    <p>JavaScript</p>
                </div>

                <div id='img8'>
                    <img className='styleImg' src={html} alt="Conocimiento 8" />
                    <p>html</p>
                </div>

                <div id='img9'>
                    <img className='styleImg' src={responsive} alt="Conocimiento 9" />
                    <p>Diseño Responvisve</p>
                </div>

                <div id='img10'>
                    <img className='styleImg' src={git} alt="Conocimiento 10" />
                    <p>Git</p>
                </div>
            </section>
        </article>
    )
}


export default Knows