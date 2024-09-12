import React, {useEffect, useState} from 'react';
import css from './Testimonial.module.css';
import TestinomialCard from "./TestimonialCard/TestimonialCard";
import Container from "../Container/Container";
import {useTranslation} from "react-i18next";
import {Swiper, SwiperSlide} from 'swiper/react';
import {FreeMode, Navigation, Autoplay} from 'swiper/modules';
import 'swiper/css';
import {Pagination} from 'swiper/modules';
import { IoIosArrowRoundForward } from "react-icons/io";
import 'swiper/css/pagination';
import axios from "axios";
import host from "../../Config/config";


const Testimonial = () => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [slidesCount ,setSlidesCount] = useState(4);
    const {t} = useTranslation();
    const [firstName, setFirstName] = useState('')
    const [review, setReview] = useState('')
    const [feedbackData,setFeedbackData] = useState([])
    const data = [
        {
            id: 0,
            author: t('reviewAuthor1'),
            quote: t('review1')

        },
        {
            id: 1,
            author: t('reviewAuthor2'),
            quote: t('review2')

        },
        {
            id: 2,
            author: t('reviewAuthor3'),
            quote: t('review3')

        },
        {
            id: 3,
            author: t('reviewAuthor3'),
            quote: t('review3')

        }
    ]

    useEffect(()=>{
        const apiUrl = `${host}api/user_feedback/`;

        axios.get(apiUrl)
            .then(response => {
                setFeedbackData([...response.data])
            })
            .catch(error => {
                console.error('Помилка при отриманні даних:', error);
            });
    },[])

    const breakpoints = {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        585: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        965: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        // 1024: {
        //     slidesPerView: 4,
        //     spaceBetween: 40,
        // },
    };

    const onFeedbackChange = (e)=>{
        switch (e.target.name) {
            case "name":
                setFirstName(e.target.value)
                break
            case "feedback":
                setReview(e.target.value)
                break
            default:
                break
        }
    }

    const onSubmitFeedBack = (e) =>{
        e.preventDefault()

        const url =     `${host}api/user_feedback/`;

        const data = {
            full_name: firstName,
            user_feedback: review
        };

        axios.post(url, data)
            .then(response => {
                setFeedbackData([...response.data])
                setReview("")
                setFirstName("")
            })
            .catch(error => {
                console.error('Помилка при відправці:', error);
            });
    }



    return (
        <Container>
            <h2 id="reviews" className={css.testimonialTitle}>{t('reviews')}</h2>
            <div className={css.testimonial}>

                <Swiper

                    style={{
                        '--swiper-navigation-color': '#000000',
                        '--swiper-pagination-color': '#000000',
                    }}
                    navigation={true}
                    modules={[FreeMode, Navigation, Autoplay]}
                    breakpoints={breakpoints}
                    pagination={{
                        clickable: true,
                    }}
                    loop={true}
                    speed={1000}
                    autoplay={{ delay: 3000 }}
                    parallax={true}
                    // centeredSlides={true}
                    centerInsufficientSlides={true}
                    className="mySwiper storefront__swiper">
                    {
                      feedbackData.length > 0  ? feedbackData.map(item =>{
                          return   item?.display_on_the_main &&  <SwiperSlide className="storefront__swiper__slide" key={item.id}>
                                        <TestinomialCard author={item.full_name} color={item.color} quote={item.user_feedback} />
                                    </SwiperSlide>
                        }): data && data.map(item =>
                          <SwiperSlide className="storefront__swiper__slide" key={item.id}>
                              <TestinomialCard author={item.author} color={item.color} quote={item.quote} />
                          </SwiperSlide>
                      )
                    }
                </Swiper>
                {/*{*/}
                {/*    data.map((item) => (*/}
                {/*        <TestinomialCard author={item.author} color={item.color} quote={item.quote} />*/}
                {/*    ))*/}
                {/*}*/}
            </div>

            <div className={css.reviewFormBlock}>
                <div className={css.reviewFormTitle}>{t("FeedbackFormTitle")}</div>
                <form className={css.reviewForm} onSubmit={onSubmitFeedBack} onChange={onFeedbackChange}>
                    <div className={css.formInputBlock}>
                        <span>{t('formTitle2')}</span>
                        <input value={firstName} name={"name"} type={"text"} className={css.formInput} required/>
                    </div>
                    <div className={css.formInputBlock}>
                        <span>{t("formReview")}</span>
                        <textarea value={review} name={"feedback"} type={"text"} className={css.formInputTextArea} required/>
                    </div>
                    <button className={css.btn} type={"submit"}>{t("FeedbackFormBtn")}</button>
                </form>
            </div>


        </Container>

    );
};

export default Testimonial;
