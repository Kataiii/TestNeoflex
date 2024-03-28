import { Item } from "../assets/entities/items";

class Filter{
    public static filterItems(items: Item[], tab: string){
        return items.filter(item => {
            if(tab === "favourites") return item.isFavourite;
            else return true;
        });
    }
}

export default Filter;