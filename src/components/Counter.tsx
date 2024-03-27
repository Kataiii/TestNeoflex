import { count } from "console";
import Minus from "../assets/icons/minus.svg";
import Plus from "../assets/icons/plus.svg";
import styles from "./css/Counter.module.css";

interface CounterProps{
    count: number;
    decreaseClick: () => void;
    increaseClick: () => void;
    decreaseDisable: boolean;
    increaseDisable: boolean;
}

const Counter: React.FC<CounterProps> = ({count, decreaseClick, increaseClick, decreaseDisable, increaseDisable}) => {
    return(
        <div className={styles.counter_wrap}>
            <img className={[styles.counter_image, decreaseDisable ? styles.counter_disable : ""].join(" ")} src={Minus} alt="minus" onClick={decreaseClick}/>
            <p className={styles.counter_content}>{count}</p>
            <img className={[styles.counter_image, increaseDisable ? styles.counter_disable : ""].join(" ")} src={Plus} alt="plus" onClick={increaseClick}/>
        </div>    
    )
}

export default Counter;