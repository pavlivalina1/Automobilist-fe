import React, { useState } from 'react';
import css from '../FAQ.module.css';

const FAQItem = ({ title, content }) => {
    const [isExpanded, setExpanded] = useState(false);

    const toggleAccordion = () => {
        setExpanded(!isExpanded);
    };

    return (
        <button className={css.accordionItem}>
            <div
                aria-expanded={isExpanded}
                onClick={toggleAccordion}
            >
                <span style={{whiteSpace: "pre"}} className={css.accordionTitle}>{title}</span>
                <span className={css.icon} aria-hidden="true"></span>
            </div>
            <div className={`${css.accordionContent} ${isExpanded ? css.expanded : ""}`}>
                <p>{content}</p>
            </div>
        </button>
    );
};

export default FAQItem;