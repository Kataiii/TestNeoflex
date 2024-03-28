import { useMemo } from "react";
import { redirect, useNavigate } from "react-router-dom";
import IconButton from "../ui/IconButton";
import styles from "./css/Social.module.css";

interface SocialItem{
    image: string;
    alt: string;
    link:string;
}

const Social: React.FC = () => {
    const navigate = useNavigate();

    const socialItems = useMemo<SocialItem[]>(() => [
        {
            image: "vk.svg",
            alt: "vk",
            link: "https://vk.com/"
        },
        {
            image: "telegram.svg",
            alt: "telegram",
            link: "https://t.me/telegram"
        },
        {
            image: "whatsapp.svg",
            alt: "whatsapp",
            link: "https://www.whatsapp.com/"
        }
    ],[]);

    return(
        <div className={styles.social_wrap}>
            <>
            {
                socialItems.map((item, index) => {
                    return <IconButton key={index} image={item.image} link={item.link} alt={item.alt}/>
                })
            }
            </>
        </div>
    )
}

export default Social;