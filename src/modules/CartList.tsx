import { useNavigate } from "react-router";
import { ItemCart } from "../assets/entities/items";
import CardCartItem from "../components/CardCartItem";
import Button from "../ui/Button";
import ModalInfo from "../ui/ModalInfo";
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
                    <ModalInfo title={"Корзина пуста"} 
                                content={"Загляните на главную, чтобы выбрать товары"} 
                                buttonContent={"Перейти на главную"} 
                                buttonClick={() => navigate('/')}/>
                : items.map((item, index) => {
                    return <CardCartItem key={index} item={item}/>
                })
            }
            </>
        </div>
    )
}

export default CartList;