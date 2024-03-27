import { useState } from "react";
import { ItemCart } from "../assets/entities/items";
import Counter from "./Counter";
import Delete from "../assets/icons/delete.svg";
import styles from "./css/CardCartItem.module.css";

interface CardCartItemProps {
    item: ItemCart;
}

const CardCartItem: React.FC<CardCartItemProps> = ({ item }) => {
    const [count, setCount] = useState<number>(item.count);

    const decreaseClick = () => {
        if (count > 1) setCount(count => count -= 1);
    }

    const increaseClick = () => {
        setCount(count => count += 1);
    }

    return (
        <div className={styles.cardCart_wrap}>
            <img className={styles.cardCart_delete} src={Delete} alt="delete"/>
            <div className={styles.cardCart_wrapInfo}>
                <img className={styles.cardCart_image} src={require(`../assets/images/${item.img}`)} alt={item.title} />
                <div className={styles.cardCart_wrapTitle}>
                    <h2 className={styles.cardCart_title}>{item.title}</h2>
                    <p className={[styles.cardCart_content, styles.cardCart_secondaryColor].join(" ")}>{item.cell !== 0 ? Math.ceil(item.price * item.cell) : item.price} ₽</p>
                </div>
            </div>
            <div className={styles.cardCart_wrapCost}>
                <div className={styles.cardCart_wrapCounter}>
                    <Counter count={count} decreaseClick={decreaseClick} increaseClick={increaseClick} />
                </div>
                <p className={[styles.cardCart_content, styles.cardCart_primaryColor].join(" ")}>{count * (item.cell !== 0 ? Math.ceil(item.price * item.cell) : item.price)} ₽</p>
            </div>
        </div>
    )
}

export default CardCartItem;