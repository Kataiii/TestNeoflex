import { runInAction } from "mobx";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "..";
import { Item } from "../assets/entities/items";
import FavouriteImg from "../assets/icons/favorites.svg";
import IsFavourite from "../assets/icons/isFavourites.svg";


interface FavouriteProps{
    isFavourite: boolean;
    item: Item;
}

const Favourite: React.FC<FavouriteProps> = observer(({isFavourite, item}) => {
    const {catalogStore} = useContext(Context);

    const favouriteHandler = () => {
        runInAction(() => {
            let items = catalogStore.getItems();
            let element: Item = items.find(el => el.id === item.id) ?? item;
            element.isFavourite = !element.isFavourite;
            items = items.map(el => {
                if(el.id === item.id) el = element;
                return el;
            })
            catalogStore.setItems(items);
        })
    }

    return(
        <img style={{cursor: "pointer"}} src={item.isFavourite? IsFavourite : FavouriteImg} alt="добавить в избранное" onClick={favouriteHandler}/>
    )
})

export default Favourite;