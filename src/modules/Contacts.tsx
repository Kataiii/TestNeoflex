import Social from "../components/Social";
import stylesWrap from "./css/CartList.module.css";
import styles from "./css/Contacts.module.css";

const Contacts: React.FC = () => {
    return(
        <div className={[stylesWrap.cartList_wrap, styles.contacts_wrap].join(" ")}>
            <div className={styles.contacts_wrapContent}>
                <p className={styles.contacts_content}>Наш телефон:&emsp; <a className={styles.contacts_a} href="tel:+79601111111">+79601111111</a></p>
                <p className={styles.contacts_content}>Наш email:&emsp; <a target="_blank" className={styles.contacts_a} href="https://mail.ru/">email@mail.ru</a></p>
            </div>
            <div className={styles.contacts_wrapContent}>
                <p className={styles.contacts_content}>Мы в социальных сетях:</p>
                <Social/>
            </div>
        </div>
    )
}

export default Contacts;