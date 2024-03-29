import { useNavigate } from "react-router-dom";
import Link from "../ui/Link";
import Logo from "../ui/Logo";
import { CART_PATH, CONTACTS_PATH, FAVOURITES_PATH } from "../utils/constants";
import styles from "./css/Footer.module.css";
import Lang from "./Lang";
import Social from "./Social";

const Footer: React.FC = () => {
    const navigate = useNavigate();

    return(
        <div className={styles.footer_wrap}>
            <Logo/>
            <div className={[styles.footer_wrapLinks, styles.footer_gapLinks].join(" ")}>
                <Link content="Избранное" onClick={() => navigate(FAVOURITES_PATH)}/>
                <Link content={"Корзина"} onClick={() => navigate(CART_PATH)}/>
                <Link content={"Контакты"} onClick={() => navigate(CONTACTS_PATH)}/>
            </div>
            <div className={[styles.footer_wrapLinks, styles.footer_gapLang].join(" ")}>
                <Link content={"Условия сервиса"} onClick={() => console.log("Условия сервиса")}/>
                <Lang/>
            </div>
            <Social/>
        </div>
    )
}

export default Footer;