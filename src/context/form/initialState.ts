import { IRegister } from "../../components/Forms/inputs/interface";
import { IForms } from "../interface";

export const formsInitialState: IForms = {
    register: []
}

export const formRegister: IRegister = {
    name: "",
    lname: "",
    cel: "",
    tel: "",
    email: "",
    password: "",
}