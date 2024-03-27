import { ItemCart } from "../assets/entities/items";
import { makeAutoObservable } from "mobx";


class CartStore{
    private items: ItemCart[] = [];

    constructor(){
        makeAutoObservable(this);
    }

    getItems = (): ItemCart[] => {
        return this.items;
    }

    setItems = (items: ItemCart[]) => {
        this.items = items;
    }
}

export default CartStore;