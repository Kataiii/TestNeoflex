import { useNavigate } from "react-router";
import { ItemCart } from "../assets/entities/items";
import CardCartItem from "../components/CardCartItem";
import Button from "../ui/Button";
import styles from "./css/CartList.module.css";

interface CartListProps{
    items: ItemCart[];
}

const CartList: React.FC<CartListProps> = ({items}) => {
    const navigate = useNavigate();

    return(
        <div className={[styles.cartList_wrap, styles.cartList_padding, styles.cartList_overflow].join(" ")}>
            <>
            {
                items.length === 0
                ? 
                    <div className={styles.cartList_modalWrap}>
                        <p className={styles.cartList_title}>Корзина пуста</p>
                        <p className={styles.cartList_content}>Загляните на главную, чтобы выбрать товары</p>
                        <div className={styles.cartList_wrapButton}>
                            <Button content={"Перейти на главную"} onCLick={() => navigate('/')}/>
                        </div>
                    </div>
                : items.map((item, index) => {
                    return <CardCartItem key={index} item={item}/>
                })
            }
            </>
        </div>
    )
}

export default CartList;