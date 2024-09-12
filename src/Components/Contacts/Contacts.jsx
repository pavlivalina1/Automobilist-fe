import React, { useState, useRef, useEffect } from 'react';
import  Container  from "../Container/Container";
import css from './Contacts.module.css';
import GoogleMap from "./GoogleMap/GoogleMap";
import axios from "axios";
import {useTranslation} from "react-i18next";

const Contacts = () => {

    const {t} = useTranslation();
    const formRef = useRef(null);
    const [isSuccess, setIsSuccess] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        contactMethod: 'Email',
        email: '',
        telegram: '',
        whatsapp: '',
        viber: '',
        message: '',
    });

    const tgToken = '6454024656:AAEP70YcLAt6nZX4iArXnhrzINorkJU8QK4'
    const chatId = '-1001956370511'

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                `https://api.telegram.org/bot${tgToken}/sendMessage`,
                {
                    chat_id: `${chatId}`,
                    text: ` Ім'я: ${formData.name} \nСпосіб зв'язку: ${formData.contactMethod} \nКонтактна інформація: ${formData[formData.contactMethod]} \nПовідомлення: ${formData.message}  `,
                }
            );
            setFormData({
                name: '',
                contactMethod: 'Email',
                email: '',
                telegram: '',
                whatsapp: '',
                viber: '',
                message: '',
            })
            console.log('Дані успішно відправлені у Telegram');
            setIsSuccess(true);
        } catch (error) {
            console.error('Помилка відправлення даних у Telegram:', error);
        }
    };


    useEffect(() =>{
        const handleScroll = () => {
            const elemenTop = formRef.current.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if(elemenTop < windowHeight){
                formRef.current.classList.add(css['slideIn']);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    return (
        <Container>
            <div id="contact-us" className={css.contactUsSection}>
                <div className={css.container}>
                    <form className={css.contactForm} onSubmit={handleSubmit} ref={formRef}>
                        <div className={css.mailBackground}>
                            <svg xmlns="http://www.w3.org/2000/svg" className={css.mailIcon}  viewBox="0 0 512 512">
                                <path fill="#92e3a9" d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/>
                             </svg>
                        </div>

                        <div>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder={t('contactFormPlaceholder1')}
                                required
                            />
                        </div>

                        <div>
                            <select
                                name="contactMethod"
                                className={css.contactMethod}
                                id='contact-method'
                                value={formData.contactMethod}
                                onChange={handleChange}
                                placeholder="Спосіб зв'язку"

                            >
                                <option value="Email">E-mail</option>
                                <option value="Telegram">Telegram</option>
                                <option value="Whatsapp">WhatsApp</option>
                                <option value="Viber">Viber</option>
                            </select>
                        </div>

                        <div>
                            <input
                                type="text"
                                name={formData.contactMethod}
                                value={formData[formData.contactMethod]}
                                onChange={handleChange}
                                placeholder={formData.contactMethod}
                                required
                            />
                        </div>

                        <div>
                            <textarea
                              name="message"
                              className={css.message}
                              id="message"
                              value={formData.message}
                              onChange={handleChange}
                              placeholder={t('contactFormPlaceholder2')}
                            />
                        </div>

                        {isSuccess ? (
                            <button type="button" className={`${css.submitButton} ${css.inactiveButton}`} disabled>
                                {t('sent')}
                            </button>
                        ) : (
                            <button type="submit" className={css.submitButton}>
                                {t('send')}
                            </button>
                        )}
                    </form>
                    <div className={css.locationsContainer}>
                        <GoogleMap />

                        <div className={css.locations}>
                            {t('filials')}:
                            <div className={css.location}>

                                <a href={"https://maps.app.goo.gl/HtQHVWU5tVJpJ7geA"} className={css.address}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">
                                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                                    </svg>
                                    {t('googleMap1')}
                                </a>
                                <span className={css.phoneNum}>(067) 401 9 401 </span>
                            </div>
                            <div className={css.location}>

                                <a href={"https://maps.app.goo.gl/JWgB4d1YZRfYxh9EA"} className={css.address}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">
                                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                                    </svg> {t('googleMap2')}
                                </a>
                                <span className={css.phoneNum}> (067) 623 00 78 </span>
                            </div>
                            <div className={css.location}>

                                <a href={"https://maps.app.goo.gl/FFFCBu4RnhYr5gVH7"} className={css.address}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">
                                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                                    </svg> {t('googleMap3')}
                                </a>
                                <span className={css.phoneNum}>(067) 623 00 73</span>
                            </div>
                            <div className={css.location}>

                                <a href={"https://maps.app.goo.gl/iktf4MSt3ujkfKt98"} className={css.address}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">
                                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                                    </svg> {t('googleMap4')}
                                </a>
                                <span className={css.phoneNum}>(067) 623 00 76 <br/> (096) 535 82 81</span>
                            </div>
                            <div className={css.location}>

                                <a href={"https://maps.app.goo.gl/m1pYbJi2dWrUyztt7"} className={css.address}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">
                                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                                    </svg> {t('googleMap5')}
                                </a>
                                <span className={css.phoneNum}>(067) 623 00 51 </span>
                            </div>
                            <div className={css.location}>

                                <a href={"https://maps.app.goo.gl/SjcQ7gUq2ZgamnPTA"} className={css.address}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">
                                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                                    </svg>{t('googleMap6')}
                                </a>
                                <span className={css.phoneNum}>(067) 623 00 98</span>
                            </div>
                            <div className={css.location}>

                                <a href={"https://maps.app.goo.gl/JMZq59sn1KebvAxs7"} className={css.address}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">
                                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                                    </svg>   {t('googleMap7')}
                                </a>
                                <span className={css.phoneNum}>(067) 623 00 83</span>
                            </div>
                            <div className={css.location}>

                                <a href={"https://maps.app.goo.gl/buh1z38ndwf9azBW9"} className={css.address}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">
                                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                                    </svg> {t('googleMap8')}
                                </a>
                                <span className={css.phoneNum}>(067) 623 00 60</span>
                            </div>
                            <div className={css.location}>

                                <a href={"https://maps.app.goo.gl/UoU2oJQCiFpPziCL8"} className={css.address}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">
                                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                                    </svg> {t('googleMap9')}
                                </a>
                                <span className={css.phoneNum}>(067) 623 00 54</span>
                            </div>
                            <div className={css.location}>

                                <a href={"https://maps.app.goo.gl/WFENk4ottwdK2TJfA"} className={css.address}>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512">
                                        <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/>
                                    </svg> {t('googleMap10')}
                                </a>
                                <span className={css.phoneNum}>(067) 623 00 84</span>
                            </div>
                        </div>
                    </div>

                </div>


                <div className={css.contacts}>
                    {/*<p className='phone'><a href="tel:+380 952 534 134">+380 67 401 94 01</a></p>*/}
                    {/*<p className='mail'><a href="mailto:team@vnv.solutions"></a>avtomobilist.kr@gmail.com</p>*/}
                </div>
            </div>

        </Container>
    );
};

export default Contacts;