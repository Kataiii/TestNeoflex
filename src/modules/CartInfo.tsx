import Button from "../ui/Button";
import stylesWrap from "./css/CartList.module.css";
import styles from "./css/CartInfo.module.css";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { useContext } from "react";
import Counter from "../utils/counter";


const CartInfo: React.FC = observer(() => {
    const {cartStore} = useContext(Context);

    return(
        <div className={[stylesWrap.cartList_wrap, styles.cartInfo_wrap]. join(" ")}>
            <div className={[styles.cartInfo_wrapTitle, stylesWrap.cartList_padding].join(" ")}>
                <p className={styles.cartInfo_title}>ИТОГО</p>
                <p className={styles.cartInfo_title}>₽ {Counter.countTotalCost(cartStore.getItems())}</p>
            </div>
            <div className={styles.cartInfo_wrapButton}>
                <Button content={"Перейти к оформлению"} onCLick={() => console.log("Перейти к оформлению")}/>
            </div>
        </div>
    )
})

export default CartInfo;