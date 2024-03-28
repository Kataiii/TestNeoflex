import { Item, items } from "../assets/entities/items";
import { makeAutoObservable } from "mobx";


class CatalogStore{
    private items: Item[] = [];

    constructor(){
        this.items = items;
        makeAutoObservable(this);
    }

    getItems = (): Item[] => {
        return this.items;
    }

    setItems = (items: Item[]) => {
        this.items = items;
    }
}

export default CatalogStore;