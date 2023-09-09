import React from 'react'
import "./niceTitle.css"


const NiceTitle = ({Title}) => {
    return (
        <section class="containerTitle">
            <div class="bg">{Title}</div>
            <div class="fg">{Title}</div>
        </section>
    )
}


export default NiceTitle