import css from './WhyWeCard.module.css';

const AboutUsCard = ({ imgSrc, title, description }) => {
    return (
        <div className={css.card}>
            <div className={`${css.face} ${css.face1}`}>
                <div className={`${css.content} ${css.faceContent}`}>
                    <img width={100} src={imgSrc} alt="Card Image" />
                    <h3>{title}</h3>
                </div>
            </div>
            <div className={`${css.face} ${css.face2}`}>
                <div className={css.content}>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default AboutUsCard;