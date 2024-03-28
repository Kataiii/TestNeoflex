import { useNavigate } from "react-router-dom";
import Link from "../ui/Link";
import Logo from "../ui/Logo";
import styles from "./css/Footer.module.css";
import Lang from "./Lang";
import Social from "./Social";

const Footer: React.FC = () => {
    const navigate = useNavigate();

    return(
        <div className={styles.footer_wrap}>
            <Logo/>
            <div className={[styles.footer_wrapLinks, styles.footer_gapLinks].join(" ")}>
                <Link content="Избранное" onClick={() => navigate('/favourites')}/>
                <Link content={"Корзина"} onClick={() => navigate('/shop_cart')}/>
                <Link content={"Контакты"} onClick={() => console.log("Контакты")}/>
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