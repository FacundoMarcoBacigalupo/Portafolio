import { useTranslation } from 'react-i18next';
import "./changelanguage.css"


const ChangeLanguage = () => {
    const [, i18n] = useTranslation()


    return (
        <>
            <button onClick={() => i18n.changeLanguage("es")}>ES</button>
            <button onClick={() => i18n.changeLanguage("en")}>EN</button>
        </>
    )
}


export default ChangeLanguage