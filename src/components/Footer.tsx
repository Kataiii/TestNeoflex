import Link from "../ui/Link";
import Logo from "../ui/Logo";
import styles from "./css/Footer.module.css";
import Lang from "./Lang";
import Social from "./Social";

const Footer: React.FC = () => {
    return(
        <div className={styles.footer_wrap}>
            <Logo/>
            <div className={[styles.footer_wrapLinks, styles.footer_gapLinks].join(" ")}>
                <Link content="Избранное" onClick={() => console.log("Избранное")}/>
                <Link content={"Корзина"} onClick={() => console.log("Корзина")}/>
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