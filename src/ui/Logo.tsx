import { useNavigate } from "react-router-dom";
import { HOME_PATH } from "../utils/constants";
import styles from "./css/Logo.module.css";

const Logo: React.FC = () => {
    const navigate = useNavigate();

    return(
        <p className={styles.logo} onClick={() => navigate(HOME_PATH)}>QPICK</p>
    )
}

export default Logo;