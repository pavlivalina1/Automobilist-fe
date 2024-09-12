import css from "./Header.module.css"
import Container from "../Container/Container";
import logo from "../../img/auto-logo.png"
import { GiHamburgerMenu } from "react-icons/gi";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

function Header(props) {
    const [activeSection, setActiveSection] = useState(null);

    const {t} = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [language, setLanguage]= useState('UA')
    const [langPosition, setLangPosition] = useState()
    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(()=>{
        const langEl = JSON.parse(localStorage.getItem('language'))
        if(langEl === "en"){
           setLangPosition(css.engLng)
           setLanguage("EN")
        }else{
            setLangPosition(null)
            setLanguage("UA")
        }
        // Додаємо обробник подій прокручування при монтуванні компонента
        window.addEventListener('scroll', handleScroll);

        // Прибираємо обробник подій при розмонтовуванні компонента
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    },[])

    const handleScroll = () => {
        // Встановлюємо значення isScrolled в true, якщо відстань прокрутки більше 0
        setIsScrolled(window.scrollY > 0);

        const whyUsSection = document.getElementById("why-us");
        const stagesSection = document.getElementById("learning-stages");
        const quizSection = document.getElementById("quiz");
        const faqSection = document.getElementById("faq");
        const reviewsSection = document.getElementById("reviews");
        const priceSection = document.getElementById("price-list");
        const discountsSection = document.getElementById("discounts");
        const onlineRegSection = document.getElementById("online-registration")

        const scrollY = window.scrollY;

        if (scrollY+150 >= whyUsSection.offsetTop && scrollY+150 < stagesSection.offsetTop) {
            setActiveSection("why-us");
        } else if (scrollY+150 >= stagesSection.offsetTop && scrollY+150 < quizSection.offsetTop) {
            setActiveSection("learning-stages");
        } else if(scrollY+150 >= priceSection.offsetTop && scrollY+150 < discountsSection.offsetTop) {
            setActiveSection("more")
        } else if(scrollY+150 >= discountsSection.offsetTop && scrollY+150 < faqSection.offsetTop) {
            setActiveSection("more")
        } else if(scrollY+150 >= faqSection.offsetTop && scrollY+150 < onlineRegSection.offsetTop) {
            setActiveSection("faq")
        } else if(scrollY+150 >= onlineRegSection.offsetTop && scrollY+150 < reviewsSection.offsetTop) {
            setActiveSection("more")
        }
        else{
            setActiveSection(null);
        }

    };

    const toggleLanguage = () => {
        props.handleLanguageChange()
        const langEl = JSON.parse(localStorage.getItem('language'))
        if(langEl === "en"){
            setLangPosition(css.engLng)
            setLanguage("EN")
        }else{
            setLangPosition(null)
            setLanguage("UA")
        }
    }
    const toggleMenu = (e) => {
        setMenuOpen(!menuOpen);
    };

    const headerClass = `${css.headerSection} ${isScrolled ? css.fixedHeader : ''}`;

    return(
        <div className={headerClass}>
        <Container>
            <div className={css.headerContainer}>
                <img className={css.logoImg} src={logo} width={150} alt="logo" />
                <ul className={css.menuList}>
                    <li className={activeSection === "why-us" ? css.active : ""}><a href="automobilist/Automobilist/frontend/src/Components/Header#why-us">{t('whyUs')}</a></li>
                    <li className={activeSection === "learning-stages" ? css.active : ""}><a href="automobilist/Automobilist/frontend/src/Components/Header#learning-stages">{t('stagesOfLearn')}</a></li>
                    <li className={activeSection === "faq" ? css.active : ""}><a href="automobilist/Automobilist/frontend/src/Components/Header#faq">{t('askedQuestions')}</a></li>

                    <li onClick={toggleMenu} className={`${css.hasSubmenu} ${menuOpen ? css.open : ""} ${activeSection === "more" ? css.active : ""}`}>
                        <a href="automobilist/Automobilist/frontend/src/Components/Header#more">{t("more")}</a>
                        <ul className={css.submenuList}>
                            <li>
                                <a href="automobilist/Automobilist/frontend/src/Components/Header#price-list">{t("priceList")}</a>
                            </li>
                            <li>
                                <a href="automobilist/Automobilist/frontend/src/Components/Header#discounts">{t("discounts")}</a>
                            </li>
                            <li>
                                <a href="automobilist/Automobilist/frontend/src/Components/Header#online-registration">{t("onlineRegistration")}</a>
                            </li>
                            <li>
                                <a href="automobilist/Automobilist/frontend/src/Components/Header#reviews">{t("reviews")}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <div className={css.wrapRightHeader}>
                    <a className={css.contacts} href="automobilist/Automobilist/frontend/src/Components/Header#contact-us"> <div className={css.contactAnimation}></div> {t("contacts")}</a>
                    <div onClick={toggleLanguage} className={css.wrapLanguage}><div className={`${css.languagePoint} ${langPosition}`}>{language}</div></div>
                </div>
                    </div>
        </Container>
        </div>
    )
}

export default Header