import { count } from "console";
import Minus from "../assets/icons/minus.svg";
import Plus from "../assets/icons/plus.svg";
import styles from "./css/Counter.module.css";

interface CounterProps{
    count: number;
    decreaseClick: () => void;
    increaseClick: () => void;
}

const Counter: React.FC<CounterProps> = ({count, decreaseClick, increaseClick}) => {
    return(
        <div className={styles.counter_wrap}>
            <img className={styles.counter_image} src={Minus} alt="minus" onClick={decreaseClick}/>
            <p className={styles.counter_content}>{count}</p>
            <img className={styles.counter_image} src={Plus} alt="plus" onClick={increaseClick}/>
        </div>    
    )
}

export default Counter;