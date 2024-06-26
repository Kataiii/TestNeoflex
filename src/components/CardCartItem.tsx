import { useContext, useState } from "react";
import { ItemCart, items } from "../assets/entities/items";
import Counter from "./Counter";
import Delete from "../assets/icons/delete.svg";
import styles from "./css/CardCartItem.module.css";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { runInAction } from "mobx";

interface CardCartItemProps {
    item: ItemCart;
}

const CardCartItem: React.FC<CardCartItemProps> = observer(({ item }) => {
    const { cartStore } = useContext(Context);
    const [count, setCount] = useState<number>(item.count);

    const decreaseClick = () => {
        if (count > 1) {
            let items = cartStore.getItems();

            cartStore.setItems(items.map(el => {
                if (el.id === item.id) el.count = count - 1;
                return el;
            }));

            setCount(count => count -= 1);
        }
    }

    const increaseClick = () => {
        runInAction(() => {
            if (count + 1 <= (items.find(el => el.id === item.id)?.all_count ?? 0)) {
                let items = cartStore.getItems();
                cartStore.setItems(items.map(el => {
                    if (el.id === item.id) el.count = count + 1;
                    return el;
                }));
                setCount(count => count += 1);
            }
        })
    }

    const deleteHandler = () => {
        cartStore.setItems(cartStore.getItems().filter(el => el.id !== item.id));
    }

    return (
        <div className={styles.cardCart_wrap}>
            <img className={styles.cardCart_delete} src={Delete} alt="delete" onClick={deleteHandler} />
            <div className={styles.cardCart_wrapInfo}>
                <img className={styles.cardCart_image} src={require(`../assets/images/${item.img}`)} alt={item.title} />
                <div className={styles.cardCart_wrapTitle}>
                    <h2 className={styles.cardCart_title}>{item.title}</h2>
                    <p className={[styles.cardCart_content, styles.cardCart_secondaryColor].join(" ")}>{item.cell !== 0 ? Math.ceil(item.price * item.cell) : item.price} ₽</p>
                </div>
            </div>
            <div className={styles.cardCart_wrapCost}>
                <div className={styles.cardCart_wrapCounter}>
                    <Counter increaseDisable={!(item.count + 1 <= (items.find(el => el.id === item.id)?.all_count ?? 0))}
                        decreaseDisable={!(count > 1)}
                        count={count}
                        decreaseClick={decreaseClick}
                        increaseClick={increaseClick} />
                </div>
                <p className={[styles.cardCart_content, styles.cardCart_primaryColor].join(" ")}>{count * (item.cell !== 0 ? Math.ceil(item.price * item.cell) : item.price)} ₽</p>
            </div>
        </div>
    )
})

export default CardCartItem;