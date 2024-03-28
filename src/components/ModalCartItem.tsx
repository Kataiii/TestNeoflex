import { categories, Item } from "../assets/entities/items";
import Button from "../ui/Button";
import PrimaryButton from "../ui/PrimaryButton";
import PriceLabel from "./PriceLabel";
import Rating from "./Rating";
import { useNavigate, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { useContext, useRef } from "react";
import styles from "./css/ModalCartItem.module.css";
import Favourite from "./Favourite";
import Close from "../assets/icons/close.svg";
import { fn } from "../utils/constants";
import { useOutsideClick } from "../utils/hooks/UseOutsideClick";


const ModalCartItem: React.FC = observer(() => {
    const {catalogStore} = useContext(Context);
    const { id } = useParams();
    const navigate = useNavigate();
    const ref = useRef(null);

    let item: Item | undefined;
    if(id)
    {
        item = catalogStore.getItems().find(el => el.id === Number(id));
    }

    const closeHandler = () => {
        navigate(-1);
        window.removeEventListener("wheel", fn);
        document.body.style.overflow = "auto";
    }

    useOutsideClick(ref, closeHandler);

    return(
        <div ref={ref} className={styles.modalCart_wrap}>
            <img className={styles.modalCart_close} src={Close} alt="закрыть" onClick={closeHandler}/>
            <img src={require(`../assets/images/${item?.img}`)} alt={item?.title} />
            <div className={styles.modalCart_wrapInfo}>
                <h2 className={styles.modalCart_title}>{item?.title}</h2>
                <div className={styles.modalCart_wrapRating}>
                    <p className={styles.modalCart_content}>Категория: {categories[item?.category_id ?? 0]}</p>
                    <Rating rate={item?.rate ?? 5.0}/>
                </div>
                
                <p className={styles.modalCart_content}>Доступно для заказа: {item?.all_count}</p>
                <div className={styles.modalCart_wrapPrice}>
                    <PriceLabel price={item?.price ?? 0} cell={item?.cell ?? 0}/>
                </div>
                
                <div className={styles.modalCart_wrapButtons}>
                    <div className={styles.modalCart_wrapBtns}>
                        <Button content={"Добавить в корзину"} onCLick={() => console.log("Добавить в корзину")}/>
                        <PrimaryButton content={"Купить сейчас"} onClick={() => console.log("Купить сейчас")}/>
                    </div>
                    <div className={styles.modalCart_wrapImage}>
                        <Favourite isFavourite={item?.isFavourite ?? false} item={item ?? catalogStore.getItems()[0]}/>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default ModalCartItem;