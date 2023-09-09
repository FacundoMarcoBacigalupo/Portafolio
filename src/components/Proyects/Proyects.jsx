import React, { Fragment } from 'react'
import MFL from '../../img/MFL-Agencia-Marketing-Digital.png'
import NbStyle from '../../img/nbStyle.jpg'
import Clima from '../../img/clima.png'
import Landing from '../../img/landing.jpg'
import ToDo from '../../img/ToDo.jpg'
import Papelera from '../../img/Papelera.jpg'
import NiceTitle from "../NiceTitle/NiceTitle.jsx"
import "./proyects.css"



const Proyects = () => {
    return (
        <Fragment>
            <NiceTitle Title={"Proyectos"} />

            <article id='grillaProyects' className='articelNASHE'>
                        <div id='img1' class="card1">
                            <a href='https://agencia-mfl.netlify.app'><img src={MFL} alt="Sitio Web de una agencia de marketing digital (MFL)" /></a>
                            <p className='textCard'>Sitio Web de una agencia de marketing digital (MFL)</p>
                        </div>

                        <div id='img2' class="card1">
                            <a href="https://ecommerce-nbstyle.netlify.app"><img src={NbStyle} alt="Simulación de un Ecommerce" /></a>
                            <p className='textCard'>Simulación de un Ecommerce</p>
                        </div>

                        <div id='img3' class="card1">
                            <a href="https://facundomarcobacigalupo.github.io/Sito-Web-Clima/"><img src={Clima} alt="Sitio Web del clima" /></a>
                            <p className='textCard'>Sitio Web del clima</p>
                        </div>

                        <div id='img4' class="card1">
                            <a href="https://facundomarcobacigalupo.github.io/Landing-page-ecommerce/"><img src={Landing} alt="Landing page simple de un Ecommerce" /></a>
                            <p className='textCard'>Landing page simple de un Ecommerce</p>
                        </div>

                        <div id='img5' class="card1">
                            <a href="https://lista-de-tareas-todo.netlify.app"><img src={ToDo} alt="ToDo, lista de tareas" /></a>
                            <p className='textCard'>ToDo, lista de tareas</p>
                        </div>

                        <div id='img6' class="card1">
                            <a href="https://papelera-canuelas.netlify.app"><img src={Papelera} alt="Sitio Web de un Emprendimiento, es de un proveedor minorista" /></a>
                            <p className='textCard'>Sitio Web de un Emprendimiento, es de un proveedor minorista</p>
                        </div>
            </article>
        </Fragment>
    )
}


export default Proyects