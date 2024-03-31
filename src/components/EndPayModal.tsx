import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";
import { HOME_PATH } from "../utils/constants";
import CompleteOrder from "../assets/icons/completeOrder.svg";
import styles from "./css/EndPayModal.module.css";

const EndPayModal: React.FC = () => {
    const navigate = useNavigate();

    return(
        <div className={styles.modal_wrap}>
            <img className={styles.modal_img} src={CompleteOrder} alt="зеленая галочка"/>
            <p className={styles.modal_content}>Заказ успешно оформлен</p>
            <div className={styles.modal_wrapButton}>
                <Button content={"Вернуться на главную"} onCLick={() => navigate(HOME_PATH)} isDisable={false}/>
            </div>
        </div>
    )
}

export default EndPayModal;