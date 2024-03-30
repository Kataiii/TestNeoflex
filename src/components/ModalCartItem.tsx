import { categories, Item, ItemCart } from "../assets/entities/items";
import Button from "../ui/Button";
import PrimaryButton from "../ui/PrimaryButton";
import PriceLabel from "./PriceLabel";
import Rating from "./Rating";
import { useNavigate, useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { Context } from "..";
import { useContext, useRef, useState } from "react";
import styles from "./css/ModalCartItem.module.css";
import Favourite from "./Favourite";
import Close from "../assets/icons/close.svg";
import { fn, PAYMENT_PATH } from "../utils/constants";
import { useOutsideClick } from "../utils/hooks/UseOutsideClick";
import { CART_PATH } from "../utils/constants";
import { runInAction } from "mobx";


const ModalCartItem: React.FC = observer(() => {
    const {catalogStore, cartStore} = useContext(Context);
    const { id } = useParams();
    const navigate = useNavigate();
    const ref = useRef(null);

    let item: Item | undefined;
    if(id)
    {
        item = catalogStore.getItems().find(el => el.id === Number(id));
    }

    const [inCart, setInCart] = useState<boolean>(cartStore.getItems().find(el => el.id === Number(id)) !== undefined ? true : false);

    const closeHandler = () => {
        navigate(-1);
        window.removeEventListener("wheel", fn);
        document.body.style.overflow = "auto";
    }

    useOutsideClick(ref, closeHandler);

    const addCartHandler = () => {
        runInAction(() => {
            if(inCart)
            {
                navigate(CART_PATH);
            }
            else 
            {
                const itemCart: ItemCart = {
                    id: item?.id ?? 0,
                    img: item?.img ?? "",
                    title: item?.title ?? "",
                    price: item?.price ?? 0,
                    cell: item?.cell ?? 0,
                    count: 1
                }
                setInCart(inCart => !inCart);
                cartStore.setItems([...cartStore.getItems(), itemCart]);
                closeHandler();
            }
        })
    }

    const buyNowHandler = () => {
        if(inCart)
        {
            navigate(PAYMENT_PATH);
        }
        else 
        {
            const itemCart: ItemCart = {
                id: item?.id ?? 0,
                img: item?.img ?? "",
                title: item?.title ?? "",
                price: item?.price ?? 0,
                cell: item?.cell ?? 0,
                count: 1
            }
            setInCart(true);
            cartStore.setItems([...cartStore.getItems(), itemCart]);
            navigate(CART_PATH);
        }
    }

    return(
        <div ref={ref} className={styles.modalCart_wrap}>
            <img className={styles.modalCart_close} src={Close} alt="закрыть" onClick={closeHandler}/>
            <img className={styles.modalCart_imageItem} src={require(`../assets/images/${item?.img}`)} alt={item?.title} />
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
                        <Button content={ inCart ? "Перейти в корзину" : "Добавить в корзину"} onCLick={addCartHandler}/>
                        <PrimaryButton content={inCart ? "Перейти к оплате" : "Купить сейчас"} onClick={buyNowHandler}/>
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