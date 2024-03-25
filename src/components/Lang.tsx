import LangIcon from "../assets/icons/lang.svg";


const Lang: React.FC = () => {
    return(
        <div>
            <img src={LangIcon} alt="lang"/>
            <button>Рус</button>
            <button>Eng</button>
        </div>
    )
}

export default Lang;