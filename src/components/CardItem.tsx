import { runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import { useContext, useState } from "react";
import { Context } from "..";
import { Item, ItemCart } from "../assets/entities/items";
import PrimaryButton from "../ui/PrimaryButton";
import Counter from "./Counter";
import styles from "./css/CardItem.module.css";
import PriceLabel from "./PriceLabel";
import Rating from "./Rating";

interface CardItemProps {
    item: Item;
}

const CardItem: React.FC<CardItemProps> = observer(({ item }) => {
    const { cartStore } = useContext(Context);
    const [count, setCount] = useState<number>(cartStore.getItems().find(el => el.id === item.id)?.count ?? 0);

    const decreaseClick = () => {
        runInAction(() => {
            let items = cartStore.getItems();

            if (items.find(el => el.id === item.id)?.count === 1) {
                cartStore.setItems(items.filter(el => el.id !== item.id));
            }
            else {
                cartStore.setItems(items.map(el => {
                    if (el.id === item.id) el.count = count - 1;
                    return el;
                }));
            }
    
            setCount(count => count -= 1);
        })
    }

    const increaseClick = () => {
        runInAction(() => {
            if ((count + 1) <= item.all_count) {
                let items = cartStore.getItems();
                cartStore.setItems(items.map(el => {
                    if (el.id === item.id) el.count = count + 1;
                    return el;
                }));
                setCount(count => count += 1);
            }
        })
    }

    const buyHandler = () => {
        const itemCart: ItemCart = {
            id: item.id,
            img: item.img,
            title: item.title,
            price: item.price,
            cell: item.cell,
            count: 1
        }
        setCount(count => count += 1);
        cartStore.setItems([...cartStore.getItems(), itemCart]);
    }

    return (
        <div className={styles.card_wrap}>
            <img className={styles.card_image} src={require(`../assets/images/${item.img}`)} alt={item.title} />
            <div className={styles.card_wrapContent}>
                <div className={[styles.card_wrapTitle, styles.card_priceHeight].join(" ")}>
                    <p className={styles.card_title}>{item.title}</p>
                    <PriceLabel price={item.price} cell={item.cell} />
                </div>
                <div className={styles.card_wrapTitle}>
                    <Rating rate={item.rate} />
                    {
                        count <= 0
                            ? <PrimaryButton content={"Купить"} onClick={buyHandler} />
                            : <Counter increaseDisable={!((count + 1) <= item.all_count)} decreaseDisable={false} count={count} decreaseClick={decreaseClick} increaseClick={increaseClick} />
                    }
                </div>
            </div>
        </div>
    )
})

export default CardItem;