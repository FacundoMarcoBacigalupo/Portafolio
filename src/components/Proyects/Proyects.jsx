import React from 'react'
import MFL from '../../img/MFL-Agencia-Marketing-Digital.png'
import NbStyle from '../../img/nbStyle.jpg'
import Landing from '../../img/landing.jpg'
import ToDo from '../../img/ToDo.jpg'
import Papelera from '../../img/Papelera.jpg'
import Clima from '../../img/clima.jpg'
import Marvel from "../../img/marvel.jpg"
import "./proyects.css"


const Proyects2 = () => {
    return (
        <article className='backgroundBox'>
            <h2 className='titlePresenting'>Proyectos</h2>

                <section className='containterProyects2'>
                    <div className="l-container">
                        <article className='containerTextCard'>
                            <div className="b-game-card">
                                <a href='https://agencia-mfl.netlify.app' className="b-game-card__cover" target="_blank" rel="noreferrer" style={{backgroundImage: `url(${MFL})`}}>
                                </a>
                            </div>
                            <p className='textCard'>Sitio Web de una agencia de marketing digital.</p>
                        </article>


                        <article className='containerTextCard'>
                            <div className="b-game-card">  
                                <a href='https://ecommerce-nbstyle.netlify.app' className="b-game-card__cover" target="_blank" rel="noreferrer" style={{backgroundImage: `url(${NbStyle})`}}>
                                </a>
                            </div>
                            <p className='textCard'>Simulación completa de un Ecommerce de zapatillas.</p>
                        </article>

                        <article className='containerTextCard'>
                            <div className="b-game-card">  
                                <a href='https://lista-de-tareas-todo.netlify.app' className="b-game-card__cover" target="_blank" rel="noreferrer" style={{backgroundImage: `url(${ToDo})`}}>
                                </a>  
                            </div>
                            <p className='textCard'>ToDo, lista de tareas mas un apartado para buscar y descargar imagenes.</p>
                        </article>


                        <article className='containerTextCard'>
                            <div className="b-game-card">  
                                <a href='https://facundomarcobacigalupo.github.io/Landing-page-ecommerce/' className="b-game-card__cover" target="_blank" rel="noreferrer" style={{backgroundImage: `url(${Landing})`}}>
                                </a>  
                            </div>
                            <p className='textCard'>Landing page simple de muestra sobre Ecommerce de zapatillas.</p>
                        </article>


                        <article className='containerTextCard'>
                            <div className="b-game-card">  
                                <a href='https://papelera-canuelas.netlify.app' className="b-game-card__cover" target="_blank" rel="noreferrer" style={{backgroundImage: `url(${Papelera})`}}>
                                </a>  
                            </div>
                            <p className='textCard'>Sitio Web de un proveedor minorista de bolsas.</p>
                        </article>


                        <article className='containerTextCard'>
                            <div className="b-game-card">
                                <a href='https://facundomarcobacigalupo.github.io/Sito-Web-Clima/' className="b-game-card__cover" target="_blank" rel="noreferrer" style={{backgroundImage: `url(${Clima})`}}>
                                </a>
                            </div>
                            <p className='textCard'>Sitio Web clima que te muestra como esta el clima en tu ciudad.</p>
                        </article>


                        <article className='containerTextCard'>
                            <div className="b-game-card">
                                <a href='https://info-marvel.netlify.app/' className="b-game-card__cover" target="_blank" rel="noreferrer" style={{backgroundImage: `url(${Marvel})`}}>
                                </a>
                            </div>
                            <p className='textCard'>Sitio Web sobre Marvel que muestra los comics y series que tiene utilizando la API de marvel.</p>
                        </article>
                    </div>
                </section>
        </article>
    )
}


export default Proyects2