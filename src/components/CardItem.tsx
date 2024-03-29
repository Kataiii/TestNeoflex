import { runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import { useContext, useEffect, useState } from "react";
import { Context } from "..";
import { Item, ItemCart, items } from "../assets/entities/items";
import PrimaryButton from "../ui/PrimaryButton";
import Counter from "./Counter";
import styles from "./css/CardItem.module.css";
import PriceLabel from "./PriceLabel";
import Rating from "./Rating"
import { useLocation, useNavigate } from "react-router-dom";
import { ITEM_DETAILS } from "../utils/constants";
import Favourite from "./Favourite";
import Info from "../assets/icons/info.svg";

interface CardItemProps {
    item: Item;
}

const CardItem: React.FC<CardItemProps> = observer(({ item }) => {
    const { cartStore, catalogStore } = useContext(Context);
    const navigate = useNavigate();
    const location = useLocation();
    const [count, setCount] = useState<number>(cartStore.getItems().find(el => el.id === item.id)?.count ?? 0);

    useEffect(() => {
        setCount(cartStore.getItems().find(el => el.id === item.id)?.count ?? count);
    }, [cartStore.getItems()]);

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

    const modalOpenHandler = () => {
        navigate(`${ITEM_DETAILS}/${item.id}`, {state: { previousLocation: location }});
    }

    return (
        <div className={styles.card_wrap}>
            <div className={styles.card_imageFavorite}>
                <Favourite isFavourite={item.isFavourite} item={item}/>
                <img src={Info} alt="информация" onClick={modalOpenHandler}/>
            </div>
            <img className={styles.card_image} src={require(`../assets/images/${item.img}`)} alt={item.title} onClick={modalOpenHandler}/>
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