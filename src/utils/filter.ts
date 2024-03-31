import { Item } from "../assets/entities/items";

class Filter{
    public static filterItems(items: Item[], tab: string){
        return items.filter(item => {
            if(tab === "favourites") return item.isFavourite;
            else return true;
        });
    }

    public static filterName(countItems: number){
        switch(countItems%10)
        {
            case 0:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                return "товаров";
            case 1:
                return "товар";
            case 2:
            case 3:
            case 4:
                return "товара";
        }
    }
}

export default Filter;