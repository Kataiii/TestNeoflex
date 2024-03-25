import { useState } from "react";
import { Item } from "../assets/entities/items";
import PrimaryButton from "../ui/PrimaryButton";
import Counter from "./Counter";
import styles from "./css/CardItem.module.css";
import PriceLabel from "./PriceLabel";
import Rating from "./Rating";

interface CardItemProps{
    item: Item;
}

const CardItem: React.FC<CardItemProps> = ({item}) => {
    const [count, setCount] = useState<number>(0);

    const decreaseClick = () => {
        setCount(count => count-=1);
    }

    const increaseClick = () => {
        setCount(count => count+=1);
    }

    return(
        <div className={styles.card_wrap}>
            <img className={styles.card_image} src={require(`../assets/images/${item.img}`)} alt={item.title}/>
            <div className={styles.card_wrapContent}>
                <div className={[styles.card_wrapTitle, styles.card_priceHeight].join(" ")}>
                    <p className={styles.card_title}>{item.title}</p>
                    <PriceLabel price={item.price} cell={item.cell}/>
                </div>
                <div className={styles.card_wrapTitle}>
                    <Rating rate={item.rate}/>
                    {
                        count <= 0
                        ? <PrimaryButton content={"Купить"} onClick={increaseClick}/>
                        : <Counter count={count} decreaseClick={decreaseClick} increaseClick={increaseClick}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default CardItem;