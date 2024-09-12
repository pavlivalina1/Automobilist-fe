import css from "./LeadMagnet.module.css"
import {useTranslation} from "react-i18next";

const LeadMagnet = () => {
    const {t}= useTranslation()

    return(
        <div className={css.magnetWrap}>
            <div className={css.magnet}>
                <a href="automobilist/Automobilist/frontend/src/Components/LeadMagnet#online-registration" className={css.magnetLink}>{t('register')}</a>
            </div>
        </div>
    )
}

export default LeadMagnet