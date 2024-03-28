import { useEffect } from "react";
import { createPortal } from "react-dom";
import { fn } from "../utils/constants";
import styles from "./css/Portal.module.css";

interface PortalProps{
    children: JSX.Element;
}

const Portal: React.FC<PortalProps> = ({children}) => {

    useEffect(() => {
        window.addEventListener("wheel", fn, { passive:false });
        document.body.style.overflow = "hidden";
    }, [])

    return(
        <>
            {
                createPortal(
                    <div className={styles.portal_wrap}>
                        {children}
                    </div>, 
                    document.body
                )
            }
        </>
    )
}

export default Portal;