import { UseFormRegister } from "react-hook-form";
import { DataOrderPersonalInfo } from "../assets/entities/data";
import styles from "./css/Input.module.css";


interface InputProps{
    type: string;
    placeholder: string;
    register: UseFormRegister<DataOrderPersonalInfo>,
    valueRegister:  Parameters<UseFormRegister<DataOrderPersonalInfo>>['0']
}

const Input: React.FC<InputProps> = ({type, placeholder, register, valueRegister}) => {
    return(
        <input className={styles.input} type={type} {...register(valueRegister)} placeholder={placeholder}/>
    )
}

export default Input;