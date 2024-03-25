import { Item } from "../assets/entities/items";
import CardItem from "../components/CardItem";
import styles from "./css/Category.module.css";

interface CategoryProps {
    name: string;
    items: Item[];
}

const Category: React.FC<CategoryProps> = ({ name, items }) => {
    return (
        <div className={styles.category_wrap}>
            <h2 className={styles.category_title}>{name}</h2>
            <div className={styles.category_cardsWrap}>
                <>
                    {
                        items.map((item, index) => {
                            return <CardItem key={`${name} ${index}`} item={item} />
                        })
                    }
                </>
            </div>
        </div>
    )
}

export default Category;