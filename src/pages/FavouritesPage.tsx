import { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Item, items } from "../assets/entities/items";
import Category from "../modules/Category";
import Button from "../ui/Button";
import ModalInfo from "../ui/ModalInfo";
import Filter from "../utils/filter";
import styles from "./css/Page.module.css";

const FavouritesPage: React.FC = () => {
    const navigate = useNavigate();
    const itemsCatalog: Item[] = useMemo(
        () => Filter.filterItems(items, "favourites"),
        [items]
    );

    return(
            <div className={styles.catalogPage_wrap}>
                <Category name={"Избранное"} items={itemsCatalog} />
                {
                    itemsCatalog.length === 0
                    ?   
                        <ModalInfo title={"Нет избранных товаров"} 
                                    content={"Загляните на главную, чтобы добавить товар в избранное"} 
                                    buttonContent={"Перейти на главную"} 
                                    buttonClick={() => navigate("/")}/>
                    : null
                }
            </div>
    )
}

export default FavouritesPage;