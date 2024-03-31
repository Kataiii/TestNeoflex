import Button from "../ui/Button";
import stylesWrap from "./css/CartList.module.css";
import styles from "./css/CartInfo.module.css";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { useContext, useEffect, useState } from "react";
import Counter from "../utils/counter";
import { useNavigate } from "react-router-dom";
import { PAYMENT_PATH } from "../utils/constants";
import { runInAction } from "mobx";


const CartInfo: React.FC = observer(() => {
    const {cartStore} = useContext(Context);
    const navigate = useNavigate();

    useEffect(() => {
        runInAction(() => {
            cartStore.setCost(Counter.countTotalCost(cartStore.getItems()));
        });
    }, [cartStore.getItems()])

    return(
        <div className={[stylesWrap.cartList_wrap, styles.cartInfo_wrap]. join(" ")}>
            <div className={[styles.cartInfo_wrapTitle, stylesWrap.cartList_padding].join(" ")}>
                <p className={styles.cartInfo_title}>ИТОГО</p>
                <p className={styles.cartInfo_title}>₽ {cartStore.getCost()}</p>
            </div>
            <div className={styles.cartInfo_wrapButton}>
                <Button isDisable={cartStore.getItems().length === 0} content={"Перейти к оформлению"} onCLick={() => navigate(PAYMENT_PATH)}/>
            </div>
        </div>
    )
})

export default CartInfo;