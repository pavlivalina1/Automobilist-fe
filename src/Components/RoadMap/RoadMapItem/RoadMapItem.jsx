import css from './RoadMapItem.module.css'
import {useEffect, useState} from "react";

function RoadMapItem({ top, left, title, step, onClick, scale  }) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const handleClick = () => {
        onClick && onClick();
    };

    useEffect(() => {
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
        window.removeEventListener('resize', handleResize);
    };
}, []);

const handleDynamicStyles = () => {
    if (windowWidth < 754) {
        // Встановлюємо нові значення top і left для ширини екрану менше 673px
        switch (step) {
            case 1:
                return { top: -30, left: -15, transform: `scale(${0.5})` };
            case 2:
                return { top: 12, left: 40, transform: `scale(${0.5})` };
            case 3:
                return { top:10, left: 125, transform: `scale(${0.6})` };
            case 4:
                return { top: 10, left: 210, transform: `scale(${0.5})` };
            case 5:
                return { top: 135, left: -20, transform: `scale(${0.8})` };
            default:
                return { top: 0, left: 0, transform: `scale(${1})` };
        }
    } else {
        // Використовуємо існуючі значення top і left
        return { top, left, transform: `scale(${scale})` };
    }
};

    return(
        <div className={css.roadMapItem} style={handleDynamicStyles()}  onClick={handleClick}>
            <p className={css.roadMapBoxItem}>
                <h2>{step}</h2>
                <h3>крок</h3>
            </p>
            <h3 className={css.roadMapItemTitle}>{title}</h3>
        </div>
    )
}

export default RoadMapItem