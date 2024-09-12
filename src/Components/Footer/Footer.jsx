import React from 'react';
import css from "./Footer.module.css"
import {useTranslation} from "react-i18next";

const Footer = () => {

    const {t}=useTranslation();
    return (
        <footer className={css.footer}>
            <div className={css.container}>
                <div className={css.row}>
                    <div className={css.footerCol}>
                        <h4>{t('info')}</h4>
                        <ul className={css.footerList}>
                            <li><a href="automobilist/Automobilist/frontend/src/Components/Footer#why-us">{t('whyUs')}?</a></li>
                            <li><a href="automobilist/Automobilist/frontend/src/Components/Footer#">{t('stagesOfLearn')}</a></li>
                            <li><a href="automobilist/Automobilist/frontend/src/Components/Footer#faq">{t('askedQuestions')}</a></li>

                            <li><a href="automobilist/Automobilist/frontend/src/Components/Footer#">{t('priceList')}</a></li>
                            <li><a href="automobilist/Automobilist/frontend/src/Components/Footer#">{t('discounts')}</a></li>
                            <li><a href="automobilist/Automobilist/frontend/src/Components/Footer#">{t('onlineRegistration')}</a></li>
                            <li><a href="automobilist/Automobilist/frontend/src/Components/Footer#">{t('reviews')}</a></li>
                        </ul>
                    </div>
                    <div className={css.footerCol}>
                        <h4>{t('contactUs')}</h4>
                        <ul className={css.footerList}>
                            <li>
                                <a href="automobilist/Automobilist/frontend/src/Components/Footer#">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">
                                        <path fill="#ffffff" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                                    </svg>
                                    Україна, Кривий Ріг,<br/> 44 квартал, пров. Бутлерова, 10
                                </a>
                            </li>
                            <li><a href="tel: +380 67 40 19 401">
                                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                                    <path fill="#ffffff" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                                </svg>
                                +380 (67) 40 19 401</a></li>
                            <li>
                                <a href="automobilist/Automobilist/frontend/src/Components/Footer#">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512">
                                        <path fill="#ffffff" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                                    </svg>
                                    avtomobilist.kr@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className={css.footerCol}>
                        <h4>{t('followUs')}</h4>
                        <div className={css.socialLinks}>
                            <a href="automobilist/Automobilist/frontend/src/Components/Footer#">
                                <svg xmlns="http://www.w3.org/2000/svg" height="26" width="24" viewBox="0 0 448 512" fill={"white"} style={{marginTop: "7px"}}>
                                    <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                                </svg>
                            </a>
                            <a href="automobilist/Automobilist/frontend/src/Components/Footer#">
                                <svg xmlns="http://www.w3.org/2000/svg" height="30" width="28" viewBox="0 0 496 512" style={{marginTop: "6px"}}>
                                    <path fill="#ffffff" d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/>
                                </svg>
                            </a>
                            <a href="automobilist/Automobilist/frontend/src/Components/Footer#">
                                <svg xmlns="http://www.w3.org/2000/svg" height="26" width="24" viewBox="0 0 320 512" style={{marginTop: "7px"}}>
                                    <path fill="#ffffff" d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;