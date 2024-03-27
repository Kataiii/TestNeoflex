import { useMemo } from "react";
import IconButton from "../ui/IconButton";
import styles from "./css/Social.module.css";

interface SocialItem{
    image: string;
    alt: string;
    onClick: () => void;
}

const Social: React.FC = () => {
    const socialItems = useMemo<SocialItem[]>(() => [
        {
            image: "vk.svg",
            alt: "vk",
            onClick: () => console.log("vk")
        },
        {
            image: "telegram.svg",
            alt: "telegram",
            onClick: () => console.log("telegram")
        },
        {
            image: "whatsapp.svg",
            alt: "whatsapp",
            onClick: () => console.log("whatsapp")
        }
    ],[]);

    return(
        <div className={styles.social_wrap}>
            <>
            {
                socialItems.map((item, index) => {
                    return <IconButton key={index} image={item.image} onClick={item.onClick} alt={item.alt}/>
                })
            }
            </>
        </div>
    )
}

export default Social;