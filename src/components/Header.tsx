import Logo from "../ui/Logo";
import styles from "./css/Header.module.css";
import Favorites from "../assets/icons/favorites.svg";
import Cart from "../assets/icons/cart.svg";
import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";
import Counter from "../utils/counter";

const Header: React.FC = observer(() => {
    const navigate = useNavigate();
    const {cartStore, catalogStore} = useContext(Context);

    return(
        <div className={styles.header_wrap}>
            <Logo/>
            <div className={styles.header_wrapIcons}>
                <div className={styles.header_wrapIcon} onClick={() => navigate("/favourites")}>
                    <img src={Favorites} alt="favoriets"/>
                    {
                        catalogStore.getItems().filter(item => item.isFavourite).length === 0
                        ? null
                        : <p className={styles.header_iconContent}>{catalogStore.getItems().filter(item => item.isFavourite).length}</p>
                    }
                </div>
                <div className={styles.header_wrapIcon} onClick={() => navigate("/shop_cart")}>
                    <img src={Cart} alt="cart"/>
                    {
                        cartStore.getItems().length === 0
                        ? null
                        : <p className={styles.header_iconContent}>{Counter.countItemsInCart(cartStore.getItems())}</p>
                    }
                </div>
            </div>
        </div>
    )
})

export default Header;