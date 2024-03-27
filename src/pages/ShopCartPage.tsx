import CartInfo from "../modules/CartInfo";
import CartList from "../modules/CartList";
import styles from "./css/Page.module.css";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";


const ShopCartPage: React.FC = observer(() =>{
    const {cartStore} = useContext(Context);

    return(
        <div>
            <h1 className={styles.page_title}>Корзина</h1>
            <div className={styles.cart_wrap}>
                <CartList items={cartStore.getItems()}/>
                <CartInfo/>
            </div>
        </div>
    )
})

export default ShopCartPage;