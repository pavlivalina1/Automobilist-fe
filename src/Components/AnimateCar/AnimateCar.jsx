import React, {useEffect} from "react";
import { motion, useAnimation } from "framer-motion";
import animateCarIcon from "../../img/animateCarIcon.png";
import css from './AnimateCar.module.css'

const AnimateCar = () => {
    const controls = useAnimation();

    useEffect(() => {
        const animate = async () => {
            await controls.start({ x: "100vw" }, { duration: 9 });
            await controls.start({ scaleX: -1 }, { duration: 3 });
            await controls.start({ x: 0, scaleX: 1 }, { duration: 3 });
            animate();
        };

        animate();
    }, [controls]);

    return (
        <div className={css.animateSection}>
            <motion.img
                animate={controls}
                src={animateCarIcon} // Вставте шлях до свого зображення
                alt="Your Alt Text" // Замініть на власний текст альтернативного опису
                transition={{duration: 2}}
                style={{
                    width: "45px", // Задайте ширину вашого зображення
                    height: "45px", // Задайте висоту вашого зображення
                }}
            />
        </div>
    );
};

export default AnimateCar;
