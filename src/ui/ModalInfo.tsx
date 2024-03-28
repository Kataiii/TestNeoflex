import Button from "./Button";
import styles from "./css/ModalInfo.module.css";

interface ModalInfoProps{
    title: string;
    content: string;
    buttonContent: string;
    buttonClick: () => void;
}

const ModalInfo: React.FC<ModalInfoProps> = ({title, content, buttonContent,  buttonClick}) => {
    return (
        <div className={styles.cartList_modalWrap}>
            <p className={styles.cartList_title}>{title}</p>
            <p className={styles.cartList_content}>{content}</p>
            <div className={styles.cartList_wrapButton}>
                <Button content={buttonContent} onCLick={buttonClick} />
            </div>
        </div>
    )
}

export default ModalInfo;