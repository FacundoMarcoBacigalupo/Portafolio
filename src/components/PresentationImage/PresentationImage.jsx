import React from 'react'
import facu1 from '../../img/fa.png'
import facu3 from '../../img/fa3.png'
import "./presentationImage.css"



const PresentationImage = () => {
    return (
        <section id='containerPicture'>
                <div className="card">
                    <div className="wrapper">
                        <img src={facu1} alt='foto facu' className="cover-image" />
                    </div>

                    <img src={facu3} alt='foto facu' className="character" />
                </div>
        </section>
    )
}



export default PresentationImage