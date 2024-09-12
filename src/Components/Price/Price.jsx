import React from "react";
import Container from "../Container/Container";
import css from "./Price.module.css";
import PriceCard from "./PriceCard/PriceCard";
import Moto from "../../img/motorcycle.svg"
import Car from "../../img/car.svg"
import Truck from "../../img/truck.svg"
import Bus from "../../img/bus.svg"
import Repreparation from "../../img/repreparation.svg"
import MiniTruck from "../../img/mini-truck.svg"
import { useTranslation} from "react-i18next";


const Price = (props) => {

    const {t} = useTranslation()

    const data = [
        {
            category: props?.data?.price_category_ua?.[0]?.category_name || props?.data?.price_category_eng?.[0]?.category_name || "A, A1",
            price: props?.data?.price_category_ua?.[0]?.price || props?.data?.price_category_eng?.[0]?.price || "5200",
            img_url: Moto,
            price_Discount: props?.data?.price_category_ua?.[0]?.price_discount || props?.data?.price_category_eng?.[0]?.price_discount || 0,
            names: props?.data?.price_category_ua?.[0]?.names ||  props?.data?.price_category_eng?.[0]?.names || []
        },
        {
            category: props?.data?.price_category_ua?.[1]?.category_name || props?.data?.price_category_eng?.[1]?.category_name || "B",
            price: props?.data?.price_category_ua?.[1]?.price || props?.data?.price_category_eng?.[1]?.price || "7000",
            img_url: Car,
            price_Discount: props?.data?.price_category_ua?.[1]?.price_discount || props?.data?.price_category_eng?.[1]?.price_discount || 0,
            names: props?.data?.price_category_ua?.[1]?.names ||  props?.data?.price_category_eng?.[1]?.names || []
        },
        {
            category: props?.data?.price_category_ua?.[2]?.category_name || props?.data?.price_category_eng?.[2]?.category_name || "C",
            price: props?.data?.price_category_ua?.[2]?.price || props?.data?.price_category_eng?.[2]?.price || "7300",
            img_url: Truck,
            price_Discount: props?.data?.price_category_ua?.[2]?.price_discount || props?.data?.price_category_eng?.[2]?.price_discount || 0,
            names: props?.data?.price_category_ua?.[2]?.names ||  props?.data?.price_category_eng?.[2]?.names || []
        },
        {
            category: `${t('category')}  \n${t('category2')} \n${t('category3')}`,
            price: props?.data?.price_category_ua?.[3]?.price || props?.data?.price_category_eng?.[3]?.price || "5200",
            img_url: Truck,
            price_Discount: props?.data?.price_category_ua?.[3]?.price_discount || props?.data?.price_category_eng?.[3]?.price_discount || 0,
            names: props?.data?.price_category_ua?.[3]?.names ||  props?.data?.price_category_eng?.[3]?.names || []
        },
        {
            category: props?.data?.price_category_ua?.[4]?.category_name || props?.data?.price_category_eng?.[4]?.category_name || "CE, C1E",
            price: props?.data?.price_category_ua?.[4]?.price || props?.data?.price_category_eng?.[4]?.price || "6000",
            img_url: MiniTruck,
            price_Discount: props?.data?.price_category_ua?.[4]?.price_discount || props?.data?.price_category_eng?.[4]?.price_discount || 0,
            names: props?.data?.price_category_ua?.[4]?.names ||  props?.data?.price_category_eng?.[4]?.names || []
        },
        {
            category: props?.data?.price_category_ua?.[5]?.category_name || props?.data?.price_category_eng?.[5]?.category_name || "BE",
            price: props?.data?.price_category_ua?.[5]?.price || props?.data?.price_category_eng?.[5]?.price || "6600",
            img_url: MiniTruck,
            price_Discount: props?.data?.price_category_ua?.[5]?.price_discount || props?.data?.price_category_eng?.[5]?.price_discount || 0,
            names: props?.data?.price_category_ua?.[5]?.names ||  props?.data?.price_category_eng?.[5]?.names || []
        },
        {
            category: props?.data?.price_category_ua?.[6]?.category_name || props?.data?.price_category_eng?.[6]?.category_name || "D, D1",
            price: props?.data?.price_category_ua?.[6]?.price || props?.data?.price_category_eng?.[6]?.price || "6600",
            img_url: Bus,
            price_Discount: props?.data?.price_category_ua?.[6]?.price_discount || props?.data?.price_category_eng?.[6]?.price_discount || 0,
            names: props?.data?.price_category_ua?.[6]?.names ||  props?.data?.price_category_eng?.[6]?.names || []
        },


    ]

    return(
        <Container>
            <h2 id="price-list" className={css.priceTitle}>{t('priceList')}</h2>
            <div className={css.container}>
                {
                    data.map((item) => (
                        <PriceCard price_Discount={item.price_Discount} names={item.names} category={item.category} price={item.price} img={item.img_url}/>
                    ))
                }
            </div>

        </Container>
    )
};

export default Price;
