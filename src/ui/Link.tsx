import styles from "./css/Link.module.css";


interface LinkProps{
    content: string;
    onClick: () => void;
}

const Link:React.FC<LinkProps> = ({content, onClick}) => {
    return(
        <p className={styles.link_content} onClick={onClick}>{content}</p>
    )
}

export default Link;