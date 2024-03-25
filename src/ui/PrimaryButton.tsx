import styles from "./css/PrimaryButton.module.css";

interface PrimaryButtonProps{
    content: string;
    onClick: () => void;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({content, onClick}) => {
    return(
        <button className={styles.primary_button} onClick={onClick}>{content}</button>
    )
}

export default PrimaryButton;