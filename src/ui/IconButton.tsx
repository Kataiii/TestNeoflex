
interface IconButtonProps{
    image: any;
    onClick: () => void;
    alt: string;
}

const IconButton: React.FC<IconButtonProps> = ({image, alt, onClick}) => {
    return(
        <img src={image} alt={alt} onClick={onClick}/>
    )
}

export default IconButton;