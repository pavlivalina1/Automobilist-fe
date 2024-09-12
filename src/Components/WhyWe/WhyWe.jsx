import Container from "../Container/Container";
import 'react-tabs/style/react-tabs.css';
import {useTranslation} from "react-i18next";
import css from './WhyWeCard/WhyWeCard.module.css'
import AboutUsCard from "./WhyWeCard/WhyWeCard";
import workExp from '../../img/workExpr.png'
import modernClesses from '../../img/modernClasses.png'
import flexibleTime from '../../img/flexibleTime.png'
import learingOutcomes from '../../img/learningUotcomes.png'


function WhyWe(props) {
    const {t} = useTranslation();

    return(
        <div id="why-us">
            <Container>
                <h2  className={css.whyWeTitle}>{t('whyWe')}</h2>

                <div className={css.aboutUsContainer}>
                    <AboutUsCard
                        imgSrc={workExp}
                        title={props.data?.why_we_ua?.[0]?.whyWeSubtitle1 ||props.data?.why_we_eng?.[0]?.whyWeSubtitle1 || t('whyWeSubtitle1') }
                        description={props.data?.why_we_ua?.[0]?.whyWeText1 || props.data?.why_we_eng?.[0]?.whyWeText1  ||t('whyWeText1')}
                    />
                    <AboutUsCard
                        imgSrc={modernClesses}
                        title={props.data?.why_we_ua?.[0]?.whyWeSubtitle2 ||props.data?.why_we_eng?.[0]?.whyWeSubtitle2 || t('whyWeSubtitle2')}
                        description={props.data?.why_we_ua?.[0]?.whyWeText2 || props.data?.why_we_eng?.[0]?.whyWeText2 || t('whyWeText2')}
                    />
                    <AboutUsCard
                        imgSrc={flexibleTime}
                        title={props.data?.why_we_ua?.[0]?.whyWeSubtitle3 || props.data?.why_we_eng?.[0]?.whyWeSubtitle3 || t('whyWeSubtitle3')}
                        description={props.data?.why_we_ua?.[0]?.whyWeText3 || props.data?.why_we_eng?.[0]?.whyWeText3 || t('whyWeText3')}
                    />
                    <AboutUsCard
                        imgSrc={learingOutcomes}
                        title={props.data?.why_we_ua?.[0]?.whyWeSubtitle4 || props.data?.why_we_eng?.[0]?.whyWeSubtitle4 ||t('whyWeSubtitle4')}
                        description={props.data?.why_we_ua?.[0]?.whyWeText4 || props.data?.why_we_eng?.[0]?.whyWeText4 || t('whyWeText4')}
                    />
                    {/* Додайте ще карти за аналогією */}

                </div>
            </Container>
        </div>)
}


export default WhyWe