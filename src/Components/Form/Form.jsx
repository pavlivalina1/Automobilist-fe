import React, {useEffect, useState} from "react";
import css from "./Form.module.css";
import FormCar from "../../img/CarForm.svg";
import axios from "axios";
import {useTranslation} from "react-i18next";

const Form = () => {
    const {t} = useTranslation();
    const [surName, setSurName] = useState('')
    const [firstName, setFirstName] = useState('')
    const [patronymic, setPatronymic] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [isSuccess, setIsSuccess] = useState(false);
    const [lastSubmissionTime, setLastSubmissionTime] = useState(null);

    const botToken = '6423752938:AAHYZgGKThf-wr3Y0GKzEfR6lswDCOCzX0Y'
    const chatid = '-1002115353644'
    const submissionInterval = 3600000;

    useEffect(() => {
        const lastTime = localStorage.getItem('lastSubmissionTime');
        if (lastTime) {
            setLastSubmissionTime(parseInt(lastTime));
        }
    }, []);
    const preventDefaults = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };

    const highlight = () => {
        // Add your highlight logic here
    };

    const unhighlight = () => {
        // Add your unhighlight logic here
    };

    const handleOnChange =(e)=>{
        switch (e.target.name) {
            case 'name':
                setFirstName(e.target.value)
                break
            case 'surname':
                setSurName(e.target.value)
                break
            case 'patronymic':
                setPatronymic(e.target.value)
                break
            case 'email':
                setEmail(e.target.value)
                break
            case 'number':
                setPhoneNumber(e.target.value)
                break
            default:
                console.log('404')
        }
    }


    const handleDrop = (e) => {
        preventDefaults(e);
        const dt = e.dataTransfer;
        const files = dt.files;
        handleFiles(files);
    };
    const handleFiles = (files) => {
        const fileList = Array.from(files);

        const newFiles = fileList.map((file) => ({
            id: Math.random(),
            file,
        }));

        setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    };
    const removeFile = (id) => {
        setUploadedFiles((prevFiles) => prevFiles.filter((file) => file.id !== id));
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();

        const currentTime = Date.now();

        if (lastSubmissionTime && (currentTime - lastSubmissionTime) < submissionInterval) {
            setFirstName('');
            setSurName('');
            setPatronymic('');
            setEmail('');
            setPhoneNumber('');
            setUploadedFiles([]);
            return;
        }

        try {
            await axios.post(
                `https://api.telegram.org/bot${botToken}/sendMessage`,
                {
                    chat_id: chatid,
                    text:`Нова подача форми:\nПрізвище: ${surName}\nІм'я: ${firstName}\nПо-батькові: ${patronymic}\nНомер телефону: ${phoneNumber}\nE-mail: ${email}`,
                }
            );

            // await sendTextMessage();
            //
            // // Send photos
            // for (const uploadedFile of uploadedFiles) {
            //     await sendPhoto(uploadedFile.file);
            // }

            for (const uploadedFile of uploadedFiles) {
                const formData = new FormData();
                formData.append('chat_id', chatid);
                formData.append('photo', uploadedFile.file);

                await axios.post(
                    `https://api.telegram.org/bot${botToken}/sendPhoto`,
                    formData,
                    {
                        headers: {
                            'Content-Type': 'multipart/form-data',
                        },
                    }
                );
            }

            setLastSubmissionTime(currentTime);
            localStorage.setItem('lastSubmissionTime', String(currentTime));

            // Обробити відповідь за потреби
            console.log("Успішно відправлено в Telegram");
            setIsSuccess(true);

        } catch (error) {
            // Обробити помилки
            console.error("Помилка відправлення повідомлення в Telegram:", error);
        }

        // Очистити дані форми
        setFirstName('');
        setSurName('');
        setPatronymic('');
        setEmail('');
        setPhoneNumber('');
        setUploadedFiles([]);

    };

    // const sendTextMessage = async () => {
    //     // Your code to send text message to the server
    //     try {
    //         const response = await axios.post("http://localhost:3001/send_message", {
    //             surName,
    //             firstName,
    //             patronymic,
    //             phoneNumber,
    //             email,
    //         });
    //
    //         console.log("Text message sent to the server:", response.data);
    //     } catch (error) {
    //         console.error("Error sending text message:", error);
    //     }
    // };
    //
    // const sendPhoto = async (file) => {
    //     // Your code to send photo to the server
    //     try {
    //         const formData = new FormData();
    //         formData.append("file", file);
    //
    //         const response = await axios.post("http://localhost:3001/send_photo", formData, {
    //             headers: {
    //                 "Content-Type": "multipart/form-data",
    //             },
    //         });
    //
    //         console.log("Photo sent to the server:", response.data);
    //     } catch (error) {
    //         console.error("Error sending photo:", error);
    //     }
    // };

    return(

        <div id="online-registration" className={css.formSection}>
            <div className={css.imgBackground}>
                <img src={FormCar} alt={'fromImg'}/>
            </div>
            <div className={css.formBlock}>
                <div className={css.formTitle}>{t('online')}</div>
                <form onSubmit={handleOnSubmit} onChange={handleOnChange} className={css.form}>
                    <div className={css.formInputBlock}>
                        <span>{t('formTitle1')}</span>
                        <input value={surName} name={"surname"} type={"text"} className={css.formInput} required/>
                    </div>
                    <div className={css.formInputBlock}>
                        <span>{t('formTitle2')}</span>
                        <input value={firstName} name={"name"} type={"text"} className={css.formInput} required/>
                    </div>
                    <div className={css.formInputBlock}>
                        <span>{t('formTitle3')}</span>
                        <input value={patronymic} name={"patronymic"} type={"text"} className={css.formInput} required/>
                    </div>
                    <div className={css.formInputBlock}>
                        <span>{t('formTitle4')}</span>
                        <input value={phoneNumber} name={'number'} type={"number"} className={css.formInput} required/>
                    </div>
                    <div className={css.formInputBlock}>
                        <span>E-mail</span>
                        <input value={email} name={'email'} type={"email"} className={css.formInput} required/>
                    </div>
                    <div
                        className={css.dropArea}
                        onDragEnter={preventDefaults}
                        onDragOver={highlight}
                        onDragLeave={unhighlight}
                        onDrop={handleDrop}
                    >
                        <form className={css.uploadForm}>
                            <p>
                                <ul>
                                    <li>{t('passportData1')}</li>
                                    <li>{t('passportData2')}</li>
                                </ul>
                            </p>
                            <input
                                type="file"
                                id="fileElem"
                                className={css.fileElem}
                                multiple
                                accept="image/*"
                                onChange={(e) => handleFiles(e.target.files)}
                                required
                            />
                            <label className={css.button} htmlFor="fileElem">
                                {t('choose')}
                            </label>
                        </form>
                        <div className={css.gallery}>
                            {uploadedFiles.map((uploadedFile) => (
                                <div key={uploadedFile.id} className={css.filePreview}>
                                    <img
                                        src={URL.createObjectURL(uploadedFile.file)}
                                        alt="Preview"
                                    />
                                    <button onClick={() => removeFile(uploadedFile.id)} style={{fontSize: "17px"}}>
                                        {t('delete')}
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {isSuccess ? (
                        <button type="button" className={`${css.submitButton} ${css.inactiveButton}`} disabled>
                            {t('sent')}
                        </button>
                    ) : (
                        <button type={"submit"} className={css.submitButton}>{t('registerBtn')}</button>
                    )}
                </form>
            </div>
        </div>
    )
};

export default Form;