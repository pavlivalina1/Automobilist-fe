import Container from "../Container/Container";
import heroImg from "../../img/HeroSevtionAutoschool.png"
import css from "./Hero.module.css"
import {useTranslation} from "react-i18next";
import axios from "axios";
import {useEffect} from "react";


function Hero() {
    const {t} = useTranslation();



    return(
        <Container>
            <div className={css.heroContent}>
                <div className={css.wrapTitle}>
                    <h1 className={css.title}>{t('heroTitle')}</h1>
                    <h2 className={css.subTitle}>{t('heroSubtitle')}</h2>
                </div>
                <img className={css.heroImg} width={600}  src={heroImg} alt="heroSection"/>
            </div>
        </Container>

    )
}

export default Hero