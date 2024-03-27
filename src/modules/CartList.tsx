import { ItemCart } from "../assets/entities/items";
import CardCartItem from "../components/CardCartItem";
import styles from "./css/CartList.module.css";

interface CartListProps{
    items: ItemCart[];
}

const CartList: React.FC<CartListProps> = ({items}) => {
    return(
        <div className={[styles.cartList_wrap, styles.cartList_padding, styles.cartList_overflow].join(" ")}>
            <>
            {
                items.length === 0
                ? <p>Корзина пуста</p>
                : items.map((item, index) => {
                    return <CardCartItem key={index} item={item}/>
                })
            }
            </>
        </div>
    )
}

export default CartList;