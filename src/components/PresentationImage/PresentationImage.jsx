import React from 'react'
import facu1 from '../../img/fa1.jpg'
import "./presentationImage.css"



const PresentationImage = () => {
    return (
        <div>
            <img className="card" src={facu1} alt='foto facu' />
        </div>
    )
}



export default PresentationImage