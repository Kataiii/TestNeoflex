import { observer } from "mobx-react-lite";
import { useContext, useMemo } from "react";
import { Context } from "..";
import { categories } from "../assets/entities/items";
import Category from "../modules/Category";
import Filter from "../utils/filter";
import styles from "./css/Page.module.css";

const CatalogPage: React.FC = observer(() => {
    const {catalogStore} = useContext(Context);

    const itemsCatalog = useMemo(
        () => Filter.filterItems(catalogStore.getItems(), "all"),
        [catalogStore.getItems()]
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
})

export default CatalogPage;