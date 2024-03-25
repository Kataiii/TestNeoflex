import Logo from "../ui/Logo";
import styles from "./css/Header.module.css";
import Favorites from "../assets/icons/favorites.svg";
import Cart from "../assets/icons/cart.svg";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
    const navigate = useNavigate();

    return(
        <div className={styles.header_wrap}>
            <Logo/>
            <div className={styles.header_wrapIcons}>
                <div className={styles.header_wrapIcon}>
                    <img src={Favorites} alt="favoriets"/>
                    <p className={styles.header_iconContent}>2</p>
                </div>
                <div className={styles.header_wrapIcon} onClick={() => navigate("/shop_cart")}>
                    <img src={Cart} alt="cart"/>
                    <p className={styles.header_iconContent}>1</p>
                </div>
            </div>
        </div>
    )
}

export default Header;