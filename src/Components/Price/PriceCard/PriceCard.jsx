import css from "../Price.module.css"
import React from "react";
import Label from "../../../img/discount-label.png"
import {useTranslation} from "react-i18next";

const PriceCard = ({category, price, img , price_Discount , names}) => {

    const {t}=useTranslation();

    return (
        <div className={css.card}>
            <div className={`${css.face} ${css.face1}`}>
                <div className={css.discounts}>
                    <div className={css.discContainer}>
                        <img src={Label}/>
                        <div className={css.discountsText}>
                            {names.length > 0 ? names.map(el=>{
                                return <div className={css.veteran}>{`${el.name}: ${price_Discount}%`}</div>
                            }) :<div className={css.veteran}>{t('discount2')}: -10%</div>}
                            {/*<div className={css.christmas}>{t('discount1')}: -20%</div>*/}

                        </div>
                    </div>

                </div>
                <div className={css.content}>
                    <img src={img} className={css.cardImg}/>
                    <h3>{category}</h3>
                </div>
            </div>
            <div className={`${css.face} ${css.face2}`}>
                <div className={css.content}>
                    <p>{t('price')}<br/>{price}₴</p>
                    {/*<a href="#">Read More</a>*/}
                </div>
                <div className={css.btnContainer}>
                    <a href="automobilist/Automobilist/frontend/src/Components/Price/PriceCard#online-registration" className={css.pulseButton}>{t('register')}</a>
                </div>
            </div>
        </div>
    );
};

export default PriceCard