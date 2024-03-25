import Link from "../ui/Link";
import Logo from "../ui/Logo";
import styles from "./css/Footer.module.css";

const Footer: React.FC = () => {
    return(
        <div className={styles.footer_wrap}>
            <Logo/>
            <div>
                <Link content="Избранное" onClick={() => console.log("Избранное")}/>
                <Link content={"Корзина"} onClick={() => console.log("Корзина")}/>
                <Link content={"Контакты"} onClick={() => console.log("Контакты")}/>
            </div>
            <div>
                <Link content={"Условия сервиса"} onClick={() => console.log("Условия сервиса")}/>
            </div>
        </div>
    )
}

export default Footer;