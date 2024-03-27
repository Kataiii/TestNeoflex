import { categories, items } from "../assets/entities/items";
import Category from "../modules/Category";
import styles from "./css/Page.module.css";

const CatalogPage: React.FC = () => {
    return (
        <div className={styles.catalogPage_wrap}>
            {
                categories.map((item, index) => {
                    return <Category key={index} name={item} items={items.filter(item => item.category_id === index)} />
                })
            }
        </div>
    )
}

export default CatalogPage;