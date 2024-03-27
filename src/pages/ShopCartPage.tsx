import { ItemCart } from "../assets/entities/items";
import CartInfo from "../modules/CartInfo";
import CartList from "../modules/CartList";
import styles from "./css/Page.module.css";

const items: ItemCart[] = [
    {
        img: "Apple BYZ S852I.png",
        title: "Apple BYZ S852I",
        price: 3527,
        rate: 4.7,
        category_id: 0,
        cell: 0.829,
        count: 2
    }
]

const ShopCartPage: React.FC = () =>{

    return(
        <div>
            <h1 className={styles.page_title}>Корзина</h1>
            <div className={styles.cart_wrap}>
                <CartList items={items}/>
                <CartInfo/>
            </div>
        </div>
    )
}

export default ShopCartPage;