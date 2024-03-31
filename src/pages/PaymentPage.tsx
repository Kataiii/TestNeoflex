import Payment from "../modules/Payment";
import styles from "./css/Page.module.css";


const PaymentPage: React.FC = () => {
    return(
        <div>
            <h1 className={styles.page_title}>Способ оплаты</h1>
            <Payment/>
        </div>
    )
}

export default PaymentPage;