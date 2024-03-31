import { observer } from "mobx-react-lite";
import { ChangeEvent, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Context } from "..";
import { DataOrder, DataOrderPersonalInfo, schemaPaymentForm } from "../assets/entities/data";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Filter from "../utils/filter";
import stylesWrap from "./css/CartList.module.css";
import styles from "./css/Payment.module.css";
import { yupResolver } from "@hookform/resolvers/yup";
import Error from "../ui/Error";
import { useLocation, useNavigate } from "react-router-dom";
import { END_PAYMENT_PATH } from "../utils/constants";


const Payment: React.FC = observer(() => {
    const navigate = useNavigate();
    const location = useLocation();
    const {cartStore} = useContext(Context);
    const [typePay, setTypePay] = useState<string>("Онлайн");

    const formApi = useForm<DataOrderPersonalInfo>({
        mode: 'onChange',
        resolver: yupResolver(schemaPaymentForm)
    });

    const {
        handleSubmit,
        formState: { errors },
        clearErrors,
        register
    } = formApi;

    const btnPayHandler = (typePay: string) => {
        setTypePay(typePay);
    }

    const submitHandler = handleSubmit(
        (data) => {
            const dataOrder: DataOrder = {
                name: data.name,
                phone: data.phone,
                city: data.city,
                street: data.street,
                house: data.house,
                flat: data.flat,
                typePay: typePay,
                itemsOrder: cartStore.getItems(),
                cost: cartStore.getCost()
            };
            console.log(dataOrder);
            navigate(END_PAYMENT_PATH, {state: { previousLocation: location }});
        }
    );

    return (
        <div className={[stylesWrap.cartList_wrap, styles.payment_wrap].join(" ")}>

            <div className={styles.payment_wrapBlock}>
                <h2 className={styles.payment_content}>Данные покупателя</h2>
                <div className={styles.payment_wrapInputs}>
                    <div id={styles.payment_wrapName}>
                        <Input type="text" 
                                placeholder={"Ваше имя"} 
                                valueRegister={"name"}
                                register={register}/>
                        {errors?.name
                            &&
                                <div className={styles.payment_wrapError}>
                                    <Error content={(typeof errors.name.message == 'string') ? errors.name.message : ""}/>
                                </div>
                        }
                    </div>
                    <div id={styles.payment_wrapPhone}>
                        <Input type="text" 
                                placeholder={"+7(ХХХ)ХХХ-ХХ-ХХ"} 
                                valueRegister={"phone"}
                                register={register}/>
                        {errors?.phone
                            &&
                                <div className={styles.payment_wrapError}>
                                    <Error content={(typeof errors.phone.message == 'string') ? errors.phone.message : ""}/>
                                </div>
                        }
                    </div>
                </div>
            </div>

            <div className={styles.payment_wrapBlock}>
                <h2 className={styles.payment_content}>Адрес доставки</h2>
                <div className={styles.payment_wrapInputs}>
                    <div id={styles.payment_wrapCity}>
                        <Input type="text" 
                                placeholder={"Город"} 
                                valueRegister={"city"}
                                register={register}/>
                        {errors?.city
                            &&
                                <div className={styles.payment_wrapError}>
                                    <Error content={(typeof errors.city.message == 'string') ? errors.city.message : ""}/>
                                </div>
                        }
                    </div>
                    
                    <div id={styles.payment_wrapStreet}>
                        <Input type="text" 
                                placeholder={"Улица"} 
                                register={register}
                                valueRegister={"street"}/>
                        {errors?.street
                            &&
                                <div className={styles.payment_wrapError}>
                                    <Error content={(typeof errors.street.message == 'string') ? errors.street.message : ""}/>
                                </div>
                        }
                    </div>

                    <div id={styles.payment_wrapHouse}>
                        <Input type="text" 
                                placeholder={"Дом"} 
                                register={register}
                                valueRegister={"house"}/>
                        {errors?.house
                            &&
                                <div className={styles.payment_wrapError}>
                                    <Error content={(typeof errors.house.message == 'string') ? errors.house.message : ""}/>
                                </div>
                        }
                    </div>

                    <div id={styles.payment_wrapFlat}>
                        <Input type="text" 
                                placeholder={"Квартира"} 
                                register={register}
                                valueRegister={"flat"}/>
                        {errors?.flat
                            &&
                                <div className={styles.payment_wrapError}>
                                    <Error content={(typeof errors.flat.message == 'string') ? errors.flat.message : ""}/>
                                </div>
                        }
                    </div>
                </div>
            </div>

            <div className={styles.payment_wrapBlock}>
                <h2 className={styles.payment_content}>Способ оплаты</h2>
                <div className={styles.payment_wrapInputs}>
                    <button className={[styles.payment_buttonPay, typePay === "Онлайн" ? styles.payment_buttonPayActive : ""].join(" ")} 
                            onClick={() => btnPayHandler("Онлайн")}>Онлайн</button>
                    <button className={[styles.payment_buttonPay, typePay === "При получении" ? styles.payment_buttonPayActive : ""].join(" ")}
                            onClick={() => btnPayHandler("При получении")}>При получении</button>
                </div>
            </div>

            <p className={styles.payment_content}>Оформляем {cartStore.getItems().length} {Filter.filterName(cartStore.getItems().length)} за {cartStore.getCost()} ₽</p>

            <div className={styles.payment_wrapButton}>
                <Button content={"Подтвердить заказ"} onCLick={submitHandler} isDisable={false} />
            </div>
        </div>
    )
})

export default Payment;