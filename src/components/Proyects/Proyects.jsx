import React from 'react'
import MFL from '../../assets/img/MFL-Agencia-Marketing-Digital.png'
import NbStyle from '../../assets/img/nbStyle.jpg'
import Landing from '../../assets/img/landing.jpg'
import ToDo from '../../assets/img/ToDo.jpg'
import Papelera from '../../assets/img/Papelera.jpg'
import Clima from '../../assets/img/clima.jpg'
import Marvel from "../../assets/img/marvel.jpg"
import Blog from "../../assets/img/blog.jpeg"
import "./proyects.css"


const Proyects2 = () => {
    return (
        <>
            <h2 className='titlePresenting'>Proyectos</h2>
            
            <section className='containerProyects'>
                <article id='c1' className="card">
                    <img className="card__thumb" src={MFL} alt='MFL' />
                    <div className="card__body">
                        <h2 className="card__title">Sitio Web de una agencia de marketing digital</h2>
                        <a href='https://agencia-mfl.netlify.app' target="_blank" rel="noreferrer" className="card__more">View more</a>
                    </div>
                </article>
                
                <article id='c2' className="card">
                    <header className="card__thumb">
                        <img src={NbStyle} alt='NbStyle' />
                    </header>
                    <div className="card__body">
                        <h2 className="card__title">Simulación completa de un Ecommerce de zapatillas</h2>
                        <a href='https://ecommerce-nbstyle.netlify.app' target="_blank" rel="noreferrer" className="card__more">View more</a>
                    </div>
                </article>
                
                <article id='c3' className="card">
                    <header className="card__thumb">
                        <img src={ToDo} alt='ToDo' />
                    </header>
                    <div className="card__body">
                        <h2 className="card__title">ToDo, lista de tareas mas un apartado para buscar y descargar imagenes</h2>
                        <a href='https://lista-de-tareas-todo.netlify.app' target="_blank" rel="noreferrer" className="card__more">View more</a>
                    </div>
                </article>
                
                <article id='c4' className="card">
                    <header className="card__thumb">
                        <img src={Landing} alt='Landing' />
                    </header>
                    <div className="card__body">
                        <h2 className="card__title">Landing page simple de muestra sobre Ecommerce de zapatillas</h2>
                        <a href='https://facundomarcobacigalupo.github.io/Landing-page-ecommerce/' target="_blank" rel="noreferrer" className="card__more">View more</a>
                    </div>
                </article>
                
                <article id='c5' className="card">
                    <header className="card__thumb">
                        <img src={Papelera} alt='Papelera' />
                    </header>
                    <div className="card__body">
                        <h2 className="card__title">Sitio Web de un proveedor minorista de bolsas</h2>
                        <a href='https://papelera-canuelas.netlify.app' target="_blank" rel="noreferrer" className="card__more">View more</a>
                    </div>
                </article>
                
                <article id='c6' className="card">
                    <header className="card__thumb">
                        <img src={Clima} alt='Clima' />
                    </header>
                    <div className="card__body">
                        <h2 className="card__title">Sitio Web clima que te muestra como esta el clima en tu ciudad</h2>
                        <a href='https://facundomarcobacigalupo.github.io/Sito-Web-Clima/' target="_blank" rel="noreferrer" className="card__more">View more</a>
                    </div>
                </article>
                
                <article id='c7' className="card">
                    <header className="card__thumb">
                        <img src={Marvel} alt='Marvel' />
                    </header>
                    <div className="card__body">
                        <h2 className="card__title">API de Marvel que muestra los comics, series y personajes</h2>
                        <a href='https://info-marvel.netlify.app/' target="_blank" rel="noreferrer" className="card__more">View more</a>
                    </div>
                </article>
                
                <article id='c8' className="card">
                    <header className="card__thumb">
                        <img src={Blog} alt='Blog' />
                    </header>
                    <div className="card__body">
                        <h2 className="card__title">Blog</h2>
                        <a href='https://canuelas-te-escucha.netlify.app/' target="_blank" rel="noreferrer" className="card__more">View more</a>
                    </div>
                </article>
            </section>
        </>
    )
}


export default Proyects2