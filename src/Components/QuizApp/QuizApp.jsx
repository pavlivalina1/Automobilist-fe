import {useState} from "react";
import Container from "../Container/Container";
import css from './QuizApp.module.css'
import Checklist from "../../img/Checklist.svg";
import { useTranslation } from "react-i18next";


function QuizApp() {
    const {t} = useTranslation();
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [questionHistory, setQuestionHistory] = useState([]);


    const questions = [
        {
            text: t('quizQuestion1'),
            options: [
                { text: t('quizOption1.1'), nextQuestion: 1 },
                { text: t('quizOption1.2'), nextQuestion: 2 },
            ],
        },
        {
            text: t('quizQuestion2'),
            options: [
                { text: t('quizOption2.1'), nextQuestion: 4 },
                { text: t('quizOption2.2'), nextQuestion: 15 },
            ],
        },
        {
            text: t('quizQuestion3'),
            options: [
                { text: t('quizOption3.1'), nextQuestion: 4 },
                { text: t('quizOption3.2'), nextQuestion: 15 },
            ],
        },
        {
            text: t('quizQuestion4'),
            options: [
                { text: t('quizOption4.1'), nextQuestion: 8 },
                { text: t('quizOption4.2'), nextQuestion: 0 },
            ],
        },
        {
            text: t('quizQuestion5'),
            options: [
                { text: t('quizOption5.1'), nextQuestion: 5 },
                { text: t('quizOption5.2'), nextQuestion: 6 },
            ],
        },
        {
            text: t('quizQuestion6'),
            options: [
                { text: t('quizOption6.1'), nextQuestion: 11 },
                { text: `${t('quizOption6.2')}  \n${t('quizOption6.2.1')}` ,  nextQuestion: 8 },
                { text: `${t('quizOption6.3')}  \n${t('quizOption6.3.1')} \n${t('quizOption6.3.2')}`, nextQuestion: 8 },
                { text: `${t('quizOption6.4')}  \n${t('quizOption6.4.1')} \n${t('quizOption6.4.2')}`, nextQuestion: 14 },
            ],
        },
        {
            text: t('quizQuestion7'),
            options: [
                { text: `${t('quizOption7.1')}  \n${t('quizOption7.2')} \n${t('quizOption7.3')}`, nextQuestion: 16 },
                { text: t('quizOption7.4'), nextQuestion: 7 },
            ],
        },
        {
            text:  `${t('quizQuestion8')}  \n${t('quizQuestion8.1')}`,
            options: [
                { text: t('quizOption8.1'), nextQuestion: 3 },
                { text: t('quizOption8.2'), nextQuestion: 8 },
            ],
        },
        {
            text: t('quizQuestion9'),
            options: [
                { text: t('quizOption9.1'), nextQuestion: 13 },
                { text: t('quizOption9.2'), nextQuestion: 10 },
            ],
        },
        {
            text: t('quizQuestion10'),
            options: [
                { text: t('quizOption10.1'), nextQuestion: 12 },
                { text: t('quizOption10.2'), nextQuestion: 13 },
            ],
        },
        {
            text: t('quizQuestion10'),
            options: [
                { text: t('quizOption10.1'), nextQuestion: 11 },
                { text: t('quizOption10.2'), nextQuestion: 13 },
            ],
        },
        {
            text: 'Блок 4',
            title: t('quizRecommended'),
            options: [
                { text: t('recommendedOption1'), nextQuestion: 0 },
                { text: t('recommendedOption2'), nextQuestion: 0 },
                { text: t('recommendedOption3'), nextQuestion: 0 },
                { text: t('recommendedOption4'), nextQuestion: 0 },
            ],
        },
        {
            text: 'Успішно',
            title: t('quizRecommended'),
            options: [
                { text: t('recommendedOption5'), nextQuestion: 0 },
                { text: t('recommendedOption6'), nextQuestion: 0 },
                { text: t('recommendedOption7'), nextQuestion: 0 },
            ],
        },
        {
            text: 'Блок 1',
            title: t('quizRecommended'),
            options: [
                { text: t('recommendedOption8'), nextQuestion: 0 },
                { text: t('recommendedOption9'), nextQuestion: 0 },
                { text: t('recommendedOption10'), nextQuestion: 0 },
                { text: t('recommendedOption11'), nextQuestion: 0 },
                { text: t('recommendedOption12'), nextQuestion: 0 },
            ],
        },
        {
            text: 'стаж більше 1 року',
            title: t('quizRecommended'),
            options: [
                { text: t('recommendedOption13'), nextQuestion: 0 },
                { text: t('recommendedOption14'), nextQuestion: 0 },
                { text: t('recommendedOption15'), nextQuestion: 0 },
            ],
        },
        {
            text: 'зачекати',
            title: t('recommendedOption16'),
        },
        {
            text: 'нажаль',
            title: t('recommendedOption17'),
        },
        // Додайте інші питання за потребою
    ];

    const handleBack = () => {
        if (questionHistory.length > 0) {
            const previousQuestion = questionHistory.pop();
            setCurrentQuestion(previousQuestion);
            setQuestionHistory([...questionHistory]);
        }
    };

    const renderQuestion = () => {
        switch (questions[currentQuestion].text) {
            case 'Блок 4':
                return (
                    <div>
                        <p className={css.resultTitile}>{questions[currentQuestion].title}</p>
                        <ul className={css.resultList}>
                            {questions[currentQuestion].options.map((el, index) => (
                                <li key={index}>{el.text}</li>
                            ))}
                        </ul>
                    </div>
                );
            case 'Блок 1':
                return (
                    <div>
                        <p  className={css.resultTitile}>{questions[currentQuestion].title}</p>
                        <ul className={css.resultList}>
                            {questions[currentQuestion].options.map((el, index) => (
                                <li key={index}>{el.text}</li>
                            ))}
                        </ul>
                    </div>
                )
            case 'Успішно':
                return (
                    <div>
                        <p  className={css.resultTitile}>{questions[currentQuestion].title}</p>
                        <ul className={css.resultList}>
                            {questions[currentQuestion].options.map((el, index) => (
                                <li key={index}>{el.text}</li>
                            ))}
                        </ul>
                    </div>
                )
            case 'стаж більше 1 року':
                return (
                    <div>
                        <p  className={css.resultTitile}>{questions[currentQuestion].title}</p>
                        <ul className={css.resultList}>
                            {questions[currentQuestion].options.map((el, index) => (
                                <li key={index}>{el.text}</li>
                            ))}
                        </ul>
                    </div>
                )
            case 'зачекати':
                return (
                    <div>
                        <p  className={css.resultTitile}>{questions[currentQuestion].title}</p>
                    </div>
                )
            case 'нажаль':
                return (
                    <div>
                        <p  className={css.resultTitile}>{questions[currentQuestion].title}</p>
                    </div>
                )
            default:
                return '404';
        }
    };

    const handleAnswer = (nextQuestion) => {
        setAnswers([...answers, questions[currentQuestion].options.find(option => option.nextQuestion === nextQuestion).text]);

        setQuestionHistory([...questionHistory, currentQuestion]);

        // Перехід до наступного питання або завершення опитування
        if (nextQuestion !== undefined) {
            setCurrentQuestion(nextQuestion);
        } else {
            console.log('all')
        }
    };

    const renderBackButton = () => {
        if (questionHistory.length > 0) {
            return (
                <button className={css.backButton} onClick={handleBack}>
                    {t('back')}
                </button>
            );
        }
        return null; // Don't render the button if there's no history
    };

    return (
        <div id="quiz" className={css.quizSection}>
        <Container>
            <div className={css.quizWrap}>
                {renderBackButton()}
                {currentQuestion <= 10 && (<h1 className={css.quizTitle}>{t('quizTitle')}</h1>)}
                <img src={Checklist} alt={"checkList"}/>
                {currentQuestion < questions.length && currentQuestion <= 10 ?(
                    <div className={css.questionBox}>

                        <p>{questions[currentQuestion].text}</p>
                        <ul className={css.questionList}>
                            {questions[currentQuestion].options.map((option, index) => (
                                <li className={css.questionItem} key={index}>
                                    <button className={css.questionBtn} onClick={() => handleAnswer(option.nextQuestion)}>
                                        {option.text}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                ):(renderQuestion())}
            </div>
        </Container>
        </div>
    );
}


export default QuizApp;