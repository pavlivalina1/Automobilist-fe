import React from "react";
import Container from "../Container/Container";
import css from "./Discounts.module.css";
import Soldier from "../../img/soldier.png";
import Sock from "../../img/Christmas-sock.svg"
import {useTranslation} from "react-i18next";

const Discounts = (props) => {

    const {t}=useTranslation();
    return(
        <Container>
            <h2 id="discounts" className={css.discountsTitle}>{t('discounts')}</h2>
            <div className={`${css.discountCard} ${css.discountCardAnimation}`}>
                <input type="radio" name="discount" id="tab1" className={css.tabContent1} checked/>
                <label htmlFor="tab1">{t('discount2')}</label>
                {/*<input type="radio" name="discount" id="tab2" className={css.tabContent2}/>*/}
                {/*<label htmlFor="tab2">{t('discount3')}</label>*/}

                <ul>
                    <li className={css.tabContent1}>
                        <div className={css.textBlock}>
                            <h1>{t('discount2')}</h1>
                            <p>{t('discount')} {props?.data?.discount?.[0]?.price_discount ||-10}%</p>
                            <ul>
                                <li>
                                    <span className={css.category}>A, A1</span>
                                    <span className={css.crossed}>{props?.data?.discount?.[0]?.price_old_A_A1||"5200"}₴</span>
                                    <div>{props?.data?.discount?.[0]?.price_new_A_A1||"4680"}₴</div>
                                </li>
                                <li>
                                    <span className={css.category}>B</span>
                                    <span className={css.crossed}>{props?.data?.discount?.[0]?.price_old_B || "7000"}₴</span>
                                    <div>{props?.data?.discount?.[0]?.price_new_B ||"6300"}₴</div>
                                </li>
                                <li>
                                    <span className={css.category}>C</span>
                                    <span className={css.crossed}>{props?.data?.discount?.[0]?.price_old_C ||"7300"}₴</span>
                                    <div>{props?.data?.discount?.[0]?.price_new_C || "6570"}₴</div>
                                </li>
                                <li>
                                    <span className={css.category}>C <span className={css.retrain}>{t('retraining')}</span></span>
                                    <span className={css.crossed}>{props?.data?.discount?.[0]?.price_old_C_preparation || "5200"}₴</span>
                                    <div>{props?.data?.discount?.[0]?.price_new_C_preparation || "4680"}₴</div>
                                </li>
                                <li>
                                    <span className={css.category}>BE</span>
                                    <span className={css.crossed}>{props?.data?.discount?.[0]?.price_old_BE || "6000"}₴</span>
                                    <div>{props?.data?.discount?.[0]?.price_new_BE || "5400"}₴</div>
                                </li>
                                <li>
                                    <span className={css.category}>CE, C1E</span>
                                    <span className={css.crossed}>{props?.data?.discount?.[0]?.price_old_CE_C1E || "6000"}₴</span>
                                    <div>{props?.data?.discount?.[0]?.price_new_CE_C1E || "5400"}₴</div>
                                </li>
                                <li>
                                    <span className={css.category}>D, D1</span>
                                    <span className={css.crossed}>{props?.data?.discount?.[0]?.price_old_D_D1 || "6600"}₴</span>
                                    <div>{props?.data?.discount?.[0]?.price_new_D_D1 || "5940"}₴</div>
                                </li>
                            </ul>
                        </div>
                        <img src={Soldier} alt="" className={css.discountImage}/>
                    </li>

                    {/*<li className={css.tabContent2}>*/}
                    {/*    <img src={Sock} alt="" className={css.discountImage} />*/}
                    {/*    <div className={css.textBlock}>*/}
                    {/*        <h1>{t('discount3')} </h1>*/}
                    {/*        <p>{t('discount')} - 20%</p>*/}
                    {/*        <ul>*/}
                    {/*            <li>*/}
                    {/*                <span className={css.category}>A, A1</span>*/}
                    {/*                <span className={css.crossed}>5200₴</span>*/}
                    {/*                <div>4160₴</div>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <span className={css.category}>B</span>*/}
                    {/*                <span className={css.crossed}>6600₴</span>*/}
                    {/*                <div>5280₴</div>*/}
                    {/*            </li>*/}
                    {/*            <li>*/}
                    {/*                <span className={css.category}>C {t('retraining')}</span>*/}
                    {/*                <span className={css.crossed}>5200₴</span>*/}
                    {/*                <div>4160₴</div>*/}
                    {/*            </li>*/}
                    {/*        </ul>*/}
                    {/*    </div>*/}
                    {/*</li>*/}
                </ul>
            </div>

        </Container>
    )
};

export default Discounts;
