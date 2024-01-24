import React from 'react'
import VScode from '../../assets/img/VScode.png'
import bootstrap from '../../assets/img/bootstrap.png'
import css from '../../assets/img/css.png'
import git from '../../assets/img/git.png'
import github from '../../assets/img/github.png'
import html from '../../assets/img/html.png'
import javascript from '../../assets/img/javascript.png'
import reactJs from '../../assets/img/reactJs.png'
import responsive from '../../assets/img/responsive.png'
import sass from '../../assets/img/sass.png'
import mongodb from '../../assets/img/mongodb.png'
import nodejs from '../../assets/img/nodejs.png'
import "./Knows.css"


const Knows = () => {
    return (
        <section className='container'>
            <h2 className='titlePresenting'>Mis conocimiento y herramientas</h2>    
            <article id='grillaContainerr'>
                    <p id='title1' className='categories'>BackEnd</p>
                    <div id='img1'>
                        <img className='styleImg' src={nodejs} alt="Know" />
                        <p>Node.js</p>
                    </div>

                    <div id='img2'>
                        <img className='styleImg' src={mongodb} alt="Know" />
                        <p>MongoDB</p>
                    </div>




                    <p id='title2' className='categories'>FrontEnd</p>
                    <div id='img3'>
                        <img className='styleImg' src={css} alt="Know" />
                        <p>Css</p>
                    </div>

                    <div id='img4'>
                        <img className='styleImg' src={sass} alt="Know" />
                        <p>Sass</p>
                    </div>

                    <div id='img5'>
                        <img className='styleImg' src={reactJs} alt="Know" />
                        <p>React.Js</p>
                    </div>

                    <div id='img6'>
                        <img className='styleImg' src={javascript} alt="Know" />
                        <p>JavaScript</p>
                    </div>

                    <div id='img7'>
                        <img className='styleImg' src={html} alt="Know" />
                        <p>html</p>
                    </div>



                    <p id='title3' className='categories'>Herramientas</p>
                    <div id='img8'>
                        <img className='styleImg' src={github} alt="Know" />
                        <p>GitHub</p>
                    </div>

                    <div id='img9'>
                        <img className='styleImg' src={responsive} alt="Know" />
                        <p>Diseño Responvisve</p>
                    </div>

                    <div id='img10'>
                        <img className='styleImg' src={git} alt="Know" />
                        <p>Git</p>
                    </div>

                    <div id='img11'>
                        <img className='styleImg' src={bootstrap} alt="Know" />
                        <p>Bootstrap</p>
                    </div>

                    <div id='img12'>
                        <img className='styleImg' src={VScode} alt="Know" />
                        <p>Visual Studio Code</p>
                    </div>
            </article>
        </section>
    )
}


export default Knows