import React from "react";
import css from "../Testimonial.module.css"
import Logo from "../../../img/onlyLogo.png"

const TestinomialCard = ({ author, color,  quote }) => (
    <figure className={css.card}>
        <div className={css.author}>
            <div className={css.circle}>
                <img width={60} height={60} src={Logo} alt="logo"/>
            </div>
            <h5>{author}</h5>
        </div>
        <blockquote>{quote}</blockquote>
    </figure>
);

export default TestinomialCard;