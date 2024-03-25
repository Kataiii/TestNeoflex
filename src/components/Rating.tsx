import Rate from "../assets/icons/rating.svg";
import styles from "./css/Rating.module.css";


interface RatingProps{
    rate: number;
}

const Rating: React.FC<RatingProps> = ({rate}) => {
    return(
        <div className={styles.rating_wrap}>
            <img src={Rate} alt="star"/>
            <p className={styles.rating_content}>{rate}</p>
        </div>
    )
}

export default Rating;