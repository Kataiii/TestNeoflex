import { ItemCart } from "../assets/entities/items";

class Counter{
    public static countItemsInCart(items: ItemCart[]){
        let count = 0;
        items.forEach(item => {
            count += item.count;
        });
        return count;
    }

    public static countTotalCost(items: ItemCart[]){
        let sum = 0;
        items.forEach(item => {
            sum += (item.cell === 0 ? item.price : Math.ceil(item.price * item.cell)) * item.count;
        });
        return sum;
    }
}

export default Counter;