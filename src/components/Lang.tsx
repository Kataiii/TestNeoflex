import { useState } from "react";
import LangIcon from "../assets/icons/lang.svg";
import styles from "./css/Lang.module.css";


const Lang: React.FC = () => {
    const [isRussian, setIsRussian] = useState<boolean>(true);

    return(
        <div className={styles.lang_wrap}>
            <img src={LangIcon} alt="lang"/>
            <button className={[styles.lang_content, isRussian?styles.lang_activeContent:""].join(" ")} onClick={() => setIsRussian(true)}>Рус</button>
            <button className={[styles.lang_content, isRussian?"":styles.lang_activeContent].join(" ")} onClick={() => setIsRussian(false)}>Eng</button>
        </div>
    )
}

export default Lang;