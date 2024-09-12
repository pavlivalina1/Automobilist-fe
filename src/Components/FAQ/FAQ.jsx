import React from "react";
import Container from "../Container/Container";
import {useTranslation} from "react-i18next";
import css from './FAQ.module.css'
import carDriving from '../../img/CarDrivingStatic.svg'
import carKey from "../../img/carKey.png"
import FAQItem from "./FAQItem/FAQItem";
import Arrow from "../../img/noun-arrow-4110991.svg"

const FAQ = (props) => {
    const { t } = useTranslation();

    const data = {
        title: t("FAQ"),
        rows: [
            {
                title: props?.data?.faq_ua?.[0]?.FAQQuestion1 || props?.data?.faq_eng?.[0]?.FAQQuestion1 || t('FAQQuestion1'),
                content: props?.data?.faq_ua?.[0]?.FAQAnswer1 || props?.data?.faq_eng?.[0]?.FAQAnswer1 ||t('FAQAnswer1'),
            },
            {
                title: props?.data?.faq_ua?.[0]?.FAQQuestion2 || props?.data?.faq_eng?.[0]?.FAQQuestion2 ||  `${t('FAQQuestion2')}  \n${t('FAQQuestion2.1')}`,
                content:props?.data?.faq_ua?.[0]?.FAQAnswer2 || props?.data?.faq_eng?.[0]?.FAQAnswer2 || t('FAQAnswer2'),
            },
            {
                title: props?.data?.faq_ua?.[0]?.FAQQuestion3 || props?.data?.faq_eng?.[0]?.FAQQuestion3 ||`${t('FAQQuestion3')}  \n${t('FAQQuestion3.1')}`,
                content: props?.data?.faq_ua?.[0]?.FAQAnswer3 || props?.data?.faq_eng?.[0]?.FAQAnswer3 || t('FAQAnswer3'),
            },
            {
                title:  props?.data?.faq_ua?.[0]?.FAQQuestion4 || props?.data?.faq_eng?.[0]?.FAQQuestion4 || `${t('FAQQuestion4')}  \n${t('FAQQuestion4.1')}`,
                content: props?.data?.faq_ua?.[0]?.FAQAnswer4 || props?.data?.faq_eng?.[0]?.FAQAnswer4 || t('FAQAnswer4'),
            },
            {
                title: props?.data?.faq_ua?.[0]?.FAQQuestion5 || props?.data?.faq_eng?.[0]?.FAQQuestion5 || `${t('FAQQuestion5')}  \n${t('FAQQuestion5.1')}`,
                content: props?.data?.faq_ua?.[0]?.FAQAnswer5 || props?.data?.faq_eng?.[0]?.FAQAnswer5 || t('FAQAnswer5'),
            },
        ],
    };

    const styles = {
        // bgColor: 'white',
        titleTextColor: "#006000",
        rowTitleColor: "#006000",
        // rowContentColor: 'grey',
        // arrowColor: "red",
    };

    const config = {
        // animate: true,
        arrowIcon: <img src={carKey} width={30}/>,
        // tabFocus: true
    };

    return (
            <div id="faq" className={css.faqSection}>
                <div className={css.container}>
                    <img src={carDriving} className={css.carSchoolImg}/>
                    <div className={css.accordion}>
                        <div className={css.FaqTitle}>
                            <h2>{t('FAQ')}</h2>
                        </div>
                    {data.rows.map((item) => (
                        <FAQItem  {...item} />
                    ))}
                    </div>
                </div>
                <div className={css.moreQuestions}>
                    <p>{t('notFoundAnswer')}</p>
                    <img src={Arrow}/>
                    <div className={css.contactBlock}>
                        <a className={css.chatUs} href="automobilist/Automobilist/frontend/src/Components/FAQ#contact-us">{t('writeUs')}</a>
                        {t('or')}
                        <div className={css.callUs}>{t('callUs')}
                            <br/>
                            <a href="tel:+380674019401">+380674019401</a>
                        </div>
                    </div>

                </div>
            </div>

    );
};

export default FAQ;
