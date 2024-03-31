import { array, number, object, string } from "yup";
import { REQUIRED_FIELD_MESSAGE } from "../../utils/constants";
import { ItemCart } from "./items";

export interface DataOrder{
    name: string;
    phone: string;
    city: string;
    street: string;
    house: string;
    flat: string;
    typePay: string;
    itemsOrder: ItemCart[];
    cost: number;
}

export interface DataOrderPersonalInfo{
    name: string;
    phone: string;
    city: string;
    street: string;
    house: string;
    flat: string;
}

export const schemaPaymentForm = object().shape({
    name: string().required(REQUIRED_FIELD_MESSAGE),
    phone: string().matches(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/, "Неверный формат телефона").required(REQUIRED_FIELD_MESSAGE),
    city: string().matches(/[a-zа-яё ]/gui, "Неверный формат").required(REQUIRED_FIELD_MESSAGE),
    street: string().required(REQUIRED_FIELD_MESSAGE),
    house: string().matches(/\d+\w?/gui, "Неверный формат").required(REQUIRED_FIELD_MESSAGE),
    flat: string().matches(/\d+\w?/gui, "Неверный формат").required(REQUIRED_FIELD_MESSAGE),
})