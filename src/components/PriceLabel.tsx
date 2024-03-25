import styles from "./css/PriceLabel.module.css";


interface PriceLabelProps {
    price: number;
    cell: number;
}

const PriceLabel: React.FC<PriceLabelProps> = ({ price, cell }) => {
    return (
        <div>
            <p className={styles.price_content}>{cell !== 0 ? Math.ceil(price * cell) : price} ₽</p>
            <>
                {
                    cell!==0
                    ? <p className={styles.price_contentLast}>{price} ₽</p>
                    : null
                }
            </>
        </div>
    )
}

export default PriceLabel;