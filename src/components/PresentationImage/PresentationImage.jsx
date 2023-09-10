import React from 'react'
import facu1 from '../../img/fa1.jpg'
import facu2 from '../../img/fa2.png'
import "./presentationImage.css"



const PresentationImage = () => {
    return (
        <section id='containerPicture'>
                <div className="card">
                    <div className="wrapper">
                        <img src={facu1} alt='foto facu' className="image1" />
                    </div>

                    <img src={facu2} alt='foto facu' className="image2" />
                </div>
        </section>
    )
}



export default PresentationImage