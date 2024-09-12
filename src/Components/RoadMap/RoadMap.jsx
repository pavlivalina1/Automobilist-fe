import Container from "../Container/Container";
import css from './RoadMap.module.css'
import roadMapImg from '../../img/roadMapDesktop.png'
import RoadMapItem from "./RoadMapItem/RoadMapItem";
import Modal from "./Modal/Modal.jsx";
import {useState} from "react";
import carIcon from '../../img/animationCarRoadMap.gif'
import smoke from '../../img/smoke.gif'
import trafickLight from '../../img/trafickLight.gif'
import {useTranslation} from "react-i18next";

function RoadMap(props) {
    const {t} = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    const handleRoadMapItemClick = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    return(
       <>
           <Container>
               <div id="learning-stages" className={css.roadMapWrapImg}>
                   <figure className={css.figureImg}>
                       <RoadMapItem
                           top="5px"
                           left="30px"
                           title={props?.data?.road_map_ua?.[0]?.roadMapTitle1 ||props?.data?.road_map_eng?.[0]?.roadMapTitle1 ||t('roadMapTitle1')}
                           step={1}
                           scale={0.8}
                           onClick={() => handleRoadMapItemClick(props?.data?.road_map_ua?.[0]?.roadMapModal1 ||props?.data?.road_map_eng?.[0]?.roadMapModal1 || t('roadMapModal1'))}
                       />
                       {/*<RoadMapItem*/}
                       {/*    top="20px"*/}
                       {/*    left="250px"*/}
                       {/*    title="Теоретична частина"*/}
                       {/*    step={2}*/}
                       {/*    scale={0.75}*/}
                       {/*    onClick={() => handleRoadMapItemClick('Контент для другого кроку')}*/}
                       {/*/>*/}
                       <RoadMapItem
                           top="70px"
                           left="150px"
                           title={props?.data?.road_map_ua?.[0]?.roadMapTitle2 ||props?.data?.road_map_eng?.[0]?.roadMapTitle2 || t('roadMapTitle2')}
                           step={2}
                           scale={0.8}
                           onClick={() => handleRoadMapItemClick(props?.data?.road_map_ua?.[0]?.roadMapModal2 ||props?.data?.road_map_eng?.[0]?.roadMapModal2 || t('roadMapModal2'))}
                       />
                       <RoadMapItem
                           top="80px"
                           left="350px"
                           title={props?.data?.road_map_ua?.[0]?.roadMapTitle3 ||props?.data?.road_map_eng?.[0]?.roadMapTitle3 || t('roadMapTitle3')}
                           step={3}
                           scale={0.9}
                           onClick={() => handleRoadMapItemClick(props?.data?.road_map_ua?.[0]?.roadMapModal3 ||props?.data?.road_map_eng?.[0]?.roadMapModal3 ||t('roadMapModal3'))}
                       />
                       <RoadMapItem
                           top="45px"
                           left="600px"
                           title={props?.data?.road_map_ua?.[0]?.roadMapTitle4 ||props?.data?.road_map_eng?.[0]?.roadMapTitle4 || t('roadMapTitle4')}
                           step={4}
                           scale={1}
                           onClick={() => handleRoadMapItemClick(props?.data?.road_map_ua?.[0]?.roadMapModal4 ||props?.data?.road_map_eng?.[0]?.roadMapModal4 ||t('roadMapModal4'))}
                               />
                       <img className={css.roadImg} width={700} src={roadMapImg} alt="road"/>
                       <figure className={css.carIcon} >
                           <img className={css.carImg} width={200} src={carIcon} alt="car"/>
                           {/*<img className={css.carSmoke} width={100} src={smoke} alt="smoke"/>*/}
                           <img className={css.trafickLight} width={50} src={trafickLight} alt="trafickLight"/>
                       </figure>
                   </figure>
               </div>
           </Container>
           {isModalOpen && (
               <Modal onClose={handleCloseModal}>
                   {modalContent}
               </Modal>)}
       </>
    )
}

export default RoadMap