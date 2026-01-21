import React from 'react'
import "./button.css"


const Button = ({href, label}) => {
    return (
        <div>
            <span id='styleButton'>
                <a id="styleA" href={href} target="_blank" rel="noreferrer" data-text={label}> </a>
            </span>
        </div>
    )
}


export default Button