import React from 'react'
import "./button.css"


const Button = ({href}) => {
    return (
        <div>
            <span id='styleButton'>
                <a id="styleA" href={href} target="_blank" rel="noreferrer"> </a>
            </span>
        </div>
    )
}


export default Button