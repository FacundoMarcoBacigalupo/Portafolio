import React from 'react'
import Button from "../Button/Button.jsx"
import ButtonDownload from "../ButtonDownload/ButtonDownload.jsx"
import "./Home.css"


const Home = () => {
    return (
        <main id='containerMain'>
            <section>
                <div className='animated-text'>
                    I'm a <span></span>
                </div>
                
                <p className='text'>I am excited about Programming, Digital Marketing and developing my skills in the field in which I specialize. I consider myself responsible, disciplined and enthusiastic. I enjoy working as a team and using these meetings to gain knowledge. I am passionate about books about personal development and the Marvel cinematic universe.</p>
                
                <div className='containerButtons'>
                    <Button href={"https://wa.me/+5401127398858"}/>
                    <ButtonDownload/>
                </div>
            </section>
        </main>
    )
}


export default Home