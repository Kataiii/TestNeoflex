import styles from "./css/Link.module.css";


interface LinkProps{
    content: string;
    onClick: () => void;
}

const Link:React.FC<LinkProps> = ({content, onClick}) => {
    return(
        <div className={styles.link_wrapContent}>
            <p className={styles.link_content} onClick={onClick}>{content}</p>
        </div>
       
    )
}

export default Link;