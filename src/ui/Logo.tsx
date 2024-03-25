import { useNavigate } from "react-router-dom";
import styles from "./css/Logo.module.css";

const Logo: React.FC = () => {
    const navigate = useNavigate();

    return(
        <p className={styles.logo} onClick={() => navigate("/")}>QPICK</p>
    )
}

export default Logo;