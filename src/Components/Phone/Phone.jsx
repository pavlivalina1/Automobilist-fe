import React, { useState } from "react";
import css from "./Phone.module.css";

const Phone = () =>{

    const [isModalVisible, setIsModalVisible] = useState(false);

    // Event listener for modal icon click
    const handleModalIconClick = () => {
        setIsModalVisible(!isModalVisible);
    };

    // Event listener for modal close icon click
    const handleModalCloseIconClick = () => {
        setIsModalVisible(false);
    };


    return(
        <div className={css.phone__modal}>
            <div className={css.phone__modal__wrapper}>

                <div className={`${css.phone__modal__number} ${isModalVisible ? css.show : ''}`}>
                    <svg onClick={handleModalCloseIconClick} className={css.phone__modal__close__icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="50px" height="50px" >
                        <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
                    </svg>
                    <p><a className={css.phoneLink} href="tel:+380674019401">+380 (67) 401-9-401</a> </p>
                </div>
                <div className={css.phone__modal__icon} onClick={handleModalIconClick}>
                    <svg  xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="0 0 512 512">
                        <path fill="#545454" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                    </svg>
                </div>
            </div>
            <div className={`${css.phone__modal__wrapper} ${css.mobile}`}>
                <a href="tel:+380674019401">
                    <div className={css.phone__modal__icon} onClick={handleModalIconClick}>
                        <svg  xmlns="http://www.w3.org/2000/svg" height="35" width="35" viewBox="0 0 512 512">
                            <path fill="#545454" d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
                        </svg>
                    </div>
                </a>

            </div>
        </div>
    )
}

export default Phone;