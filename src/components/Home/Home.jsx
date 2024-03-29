import React from 'react'
import Button from "../Button/Button.jsx"
import PresentationImage from '../PresentationImage/PresentationImage.jsx'
import ButtonDownload from "../ButtonDownload/ButtonDownload.jsx"
import "./Home.css"


const Home = () => {
    return (
        <main id='containerMain'>
            <section className='leftSide'>
                <PresentationImage />
            </section>

            <section className='rightSide'>
                <p className='g1' id='title'>Hola, soy Facundo Marco Bacigalupo y soy Desarrollador Web</p>
                <p className='g2'>Me entusiasma la Programación, Marketing Digital y desarrollar mis habilidades en el ámbito en el que me especializo. Me considero responsable, disciplinado y entusiasta. Disfruto trabajar en equipo y utilizar esos encuentros para nutrirme de conocimientos. Me apasionan los libros sobre desarrollo personal y el universo cinematográfico de Marvel.</p>
                <Button href={"https://wa.me/+5401127398858"} className='g3'/>
                <ButtonDownload className='g3'/>
            </section>
        </main>
    )
}


export default Home