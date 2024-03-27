
interface IconButtonProps{
    image: string;
    onClick: () => void;
    alt: string;
}

const IconButton: React.FC<IconButtonProps> = ({image, alt, onClick}) => {
    return(
        <img src={require(`../assets/icons/${image}`)} alt={alt} onClick={onClick}/>
    )
}

export default IconButton;