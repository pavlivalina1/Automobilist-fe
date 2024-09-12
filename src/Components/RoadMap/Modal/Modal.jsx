import css from './Modal.module.css';
import {useEffect} from "react"; // Замініть шлях на свій файл стилів
import { IoCloseSharp } from "react-icons/io5";

function Modal ({ onClose, children }) {
    useEffect(() => {
        const body = document.body;
        if (onClose) {
            body.style.overflow = 'hidden';
        }

        return () => {
            body.style.overflow = 'auto';
        };
    }, [onClose]);

    return (
        <div className={css.modalOverlay} onClick={onClose}>
            <div className={css.modalContent} onClick={(e) => e.stopPropagation()}>
                <button className={css.closeButton} onClick={onClose}>
                    <IoCloseSharp />
                </button>
                {children}
            </div>
        </div>
    );
};


export default Modal