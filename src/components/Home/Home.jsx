import { useTranslation } from 'react-i18next'
import Button from "../Button/Button.jsx"
import ButtonDownload from "../ButtonDownload/ButtonDownload.jsx"
import "./Home.css"

const Home = () => {
    const [t] = useTranslation(["global"]);

    return (
        <main id='home' className='containerMain'>
            <section>
                <div className='animated-text'>
                    I'm a <span></span>
                </div>
                
                <p className='text'>{t("home.text")}</p>
                
                <div className='containerButtons'>
                    <Button href={"https://wa.me/+5401127398858"} label={t("home.contact")}/>
                    <ButtonDownload label={t("home.download")}/>
                </div>
            </section>
        </main>
    )
}

export default Home