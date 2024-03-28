import { useMemo } from "react";
import { categories, ItemCart, items } from "../assets/entities/items";
import Category from "../modules/Category";
import Filter from "../utils/filter";
import styles from "./css/Page.module.css";

const CatalogPage: React.FC = () => {
    const itemsCatalog = useMemo(
        () => Filter.filterItems(items, "all"),
        [items]
    );

    return (
        <div className={styles.catalogPage_wrap}>
            {
                categories.map((item, index) => {
                    return <Category key={index} name={item} items={itemsCatalog.filter(item => item.category_id === index)} />
                })
            }
        </div>
    )
}

export default CatalogPage;