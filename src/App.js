import './App.css';
import Header from "./Components/Header/Header";
import {useTranslation} from "react-i18next";
import useLocalStorage from "./hooks/use-localstorage";
import i18n from "./i18n";
import Hero from "./Components/Hero/Hero";
import WhyWe from "./Components/WhyWe/WhyWe";
import FAQ from "./Components/FAQ/FAQ";
import RoadBg from "./Components/RoadBg/RoadBg";
import AnimateCar from "./Components/AnimateCar/AnimateCar";
import Price from "./Components/Price/Price";
import Discounts from "./Components/Discounts/Discounts";
import Testimonial from "./Components/Testimonial/Testimonial";
import Form from "./Components/Form/Form";
import Footer from "./Components/Footer/Footer";
import Contacts from "./Components/Contacts/Contacts";
import RoadMap from "./Components/RoadMap/RoadMap";
import QuizApp from "./Components/QuizApp/QuizApp";
import Phone from "./Components/Phone/Phone";
import LeadMagnet from "./Components/LeadMagnet/LeadMagnet";
import {useEffect, useState} from "react";
import axios from "axios";
import host from "./Config/config";


function App() {
  const {t} = useTranslation();
  const [language, setLanguage] = useLocalStorage('language', 'ua');
  const [data,setData] = useState()

   useEffect(()=>{
       if(language == 'ua'){
           const apiUrl = `${host}api/data_ua/`;

           axios.get(apiUrl)
               .then(response => {
                   // Обновлення стану компонента з отриманими даними
                   setData(response.data)
                   console.log(response.data);
               })
               .catch(error => {
                   console.error('Помилка при отриманні даних:', error);
               });
       }else{
           const apiUrl = `${host}api/data_eng/`;

           axios.get(apiUrl)
               .then(response => {
                   // Обновлення стану компонента з отриманими даними
                   setData(response.data)
                   console.log(response.data);
               })
               .catch(error => {
                   console.error('Помилка при отриманні даних:', error);
               });
       }
   },[language])


  const handleLanguageChange = () =>{
    if (language === 'en'){
      i18n.changeLanguage('ua');
      setLanguage('ua')
    }else if(language === 'ua'){
      i18n.changeLanguage('en');
      setLanguage('en')
    }
  }

    useEffect(() => {
        if(language == 'ua'){
            const apiUrl = `${host}api/data_ua/`;

            axios.get(apiUrl)
                .then(response => {
                    // Обновлення стану компонента з отриманими даними
                    setData(response.data)
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('Помилка при отриманні даних:', error);
                });
        }else{
            const apiUrl = `${host}api/data_eng/`;

            axios.get(apiUrl)
                .then(response => {
                    // Обновлення стану компонента з отриманими даними
                    setData(response.data)
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('Помилка при отриманні даних:', error);
                });
        }
    }, []);

  return (
      <div>
          <div className="heroBg">
              <Header handleLanguageChange={handleLanguageChange}/>
              <Hero/>
          </div>
          <Phone/>
          <LeadMagnet/>
          {/*<RoadBg/>*/}
          <AnimateCar/>
          <WhyWe data={data}/>
          <RoadBg/>
          <RoadMap data={data}/>
          <RoadBg/>
          <QuizApp />
          <RoadBg/>
          <Price data={data}/>
          <RoadBg/>
          <Discounts data={data}/>
          <RoadBg/>
          <FAQ data={data}/>
          <RoadBg/>
          <Form/>
          <RoadBg/>
          <Testimonial/>
          <RoadBg/>
          <Contacts/>
          <RoadBg/>
          <Footer/>
        {/*{t('text')}*/}
        {/*<button onClick={handleLanguageChange}>Змінити</button>*/}
      </div>
  );
}


export default App;
