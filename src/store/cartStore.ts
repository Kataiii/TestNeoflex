import { ItemCart } from "../assets/entities/items";
import { makeAutoObservable } from "mobx";


class CartStore{
    private items: ItemCart[] = [];
    private cost: number = 0;

    constructor(){
        makeAutoObservable(this);
    }

    getItems = (): ItemCart[] => {
        return this.items;
    }

    setItems = (items: ItemCart[]) => {
        this.items = items;
    }

    getCost = (): number => {
        return this.cost;
    }

    setCost = (cost: number) => {
        this.cost = cost;
    }
}

export default CartStore;