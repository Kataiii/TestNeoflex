import styles from "./css/Error.module.css";


interface ErrorProps{
    content: string;
}

const Error: React.FC<ErrorProps> = ({content}) => {
    return(
        <p className={styles.error}>{content}</p>
    )
}

export default Error;