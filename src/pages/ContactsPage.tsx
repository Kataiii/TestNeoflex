import Contacts from "../modules/Contacts";
import styles from "./css/Page.module.css";

const ContactsPage: React.FC = () => {
    return(
        <>
            <h1 className={styles.page_title}>Контакты</h1>
            <Contacts/>
        </>
        
    )
}

export default ContactsPage;