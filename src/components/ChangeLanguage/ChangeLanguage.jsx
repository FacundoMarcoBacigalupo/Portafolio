import { useTranslation } from 'react-i18next';
import "./changelanguage.css"

const ChangeLanguage = () => {
    const [, i18n] = useTranslation()
    return (
        <div className='up'>
            <div>
                <span className='styleButtonUp'>
                    <span id="styleAup"  onClick={() => i18n.changeLanguage("es")}></span>
                </span>
            </div>
            <div>
                <span className='styleButtonUp'>
                    <span id="styleBup" onClick={() => i18n.changeLanguage("en")}></span>
                </span>
            </div>
        </div>
    )
}

export default ChangeLanguage