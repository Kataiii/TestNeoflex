import styles from "./css/PrimaryButton.module.css";


interface ButtonProps{
    content: string;
    onCLick: () => void;
    isDisable: boolean;
}

const Button: React.FC<ButtonProps> = ({content, onCLick, isDisable}) => {
    return(
        <button disabled={isDisable} className={styles.button} onClick={onCLick}>{content}</button>
    )
}

export default Button;