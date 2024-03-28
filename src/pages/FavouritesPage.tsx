import { observer } from "mobx-react-lite";
import { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "..";
import { Item, items } from "../assets/entities/items";
import Category from "../modules/Category";
import ModalInfo from "../ui/ModalInfo";
import { HOME_PATH } from "../utils/constants";
import Filter from "../utils/filter";
import styles from "./css/Page.module.css";

const FavouritesPage: React.FC = observer(() => {
    const {catalogStore} = useContext(Context);
    const navigate = useNavigate();
    
    const itemsCatalog: Item[] = useMemo(
        () => Filter.filterItems(catalogStore.getItems(), "favourites"),
        [catalogStore.getItems()]
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
                                    buttonClick={() => navigate(HOME_PATH)}/>
                    : null
                }
            </div>
    )
})

export default FavouritesPage;