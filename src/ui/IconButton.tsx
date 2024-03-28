import { Link } from "react-router-dom";
import styles from "./css/PrimaryButton.module.css";


interface IconButtonProps{
    image: string;
    link: string;
    alt: string;
}

const IconButton: React.FC<IconButtonProps> = ({image, alt, link}) => {
    return(
        <a target="_blank" href={link}>
            <img className={styles.iconButton_image} src={require(`../assets/icons/${image}`)} alt={alt} />
        </a>
    )
}

export default IconButton;