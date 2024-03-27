import styles from "./css/PrimaryButton.module.css";


interface ButtonProps{
    content: string;
    onCLick: () => void;
}

const Button: React.FC<ButtonProps> = ({content, onCLick}) => {
    return(
        <button className={styles.button} onClick={onCLick}>{content}</button>
    )
}

export default Button;