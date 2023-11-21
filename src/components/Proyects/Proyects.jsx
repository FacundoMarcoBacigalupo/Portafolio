import React from 'react'
import MFL from '../../img/MFL-Agencia-Marketing-Digital.png'
import NbStyle from '../../img/nbStyle.jpg'
import Landing from '../../img/landing.jpg'
import ToDo from '../../img/ToDo.jpg'
import Papelera from '../../img/Papelera.jpg'
import Clima from '../../img/clima.jpg'
import "./proyects.css"


const Proyects2 = () => {
    return (
        <article className='backgroundBox'>
            <h2 className='titlePresenting'>Proyectos</h2>

                <section className='containterProyects2'>
                    <div className="l-container">
                        <article className='containerTextCard'>
                            <div className="b-game-card">
                                <a href='https://agencia-mfl.netlify.app' className="b-game-card__cover" style={{backgroundImage: `url(${MFL})`}}></a>
                            </div>
                            <p className='textCard'>Sitio Web de una agencia de marketing digital (MFL)</p>
                        </article>


                        <article className='containerTextCard'>
                            <div className="b-game-card">  
                                <a href='https://ecommerce-nbstyle.netlify.app' className="b-game-card__cover" style={{backgroundImage: `url(${NbStyle})`}}></a>
                            </div>
                            <p className='textCard'>Simulación de un Ecommerce</p>
                        </article>

                        <article className='containerTextCard'>
                            <div className="b-game-card">  
                                <a href='https://lista-de-tareas-todo.netlify.app' className="b-game-card__cover" style={{backgroundImage: `url(${ToDo})`}}></a>  
                            </div>
                            <p className='textCard'>ToDo, lista de tareas</p>
                        </article>


                        <article className='containerTextCard'>
                            <div className="b-game-card">  
                                <a href='https://facundomarcobacigalupo.github.io/Landing-page-ecommerce/' className="b-game-card__cover" style={{backgroundImage: `url(${Landing})`}}></a>  
                            </div>
                            <p className='textCard'>Landing page simple de un Ecommerce</p>
                        </article>


                        <article className='containerTextCard'>
                            <div className="b-game-card">  
                                <a href='https://papelera-canuelas.netlify.app' className="b-game-card__cover" style={{backgroundImage: `url(${Papelera})`}}></a>  
                            </div>
                            <p className='textCard'>Sitio Web de un Emprendimiento, es de un proveedor minorista</p>
                        </article>


                        <article className='containerTextCard'>
                            <div className="b-game-card">
                                <a href='https://facundomarcobacigalupo.github.io/Sito-Web-Clima/' className="b-game-card__cover" style={{backgroundImage: `url(${Clima})`}}></a>
                            </div>
                            <p className='textCard'>Sitio Web del clima</p>
                        </article>
                    </div>
                </section>
        </article>
    )
}


export default Proyects2