import { Dispatch } from "@reduxjs/toolkit";
import { IRegister } from "../../components/Forms/inputs/interface";
import { addRegForm } from "./formSlice";
import { formRegister } from "./initialState";

function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * 
 * @param data - datos del formulario
 * @returns 
 */
export const addRegData = (data: IRegister, reset: (data: IRegister) => void) => async (dispatch: Dispatch) => {
    await sleep(2000).then(res => {
        dispatch(addRegForm(data))
        reset(formRegister)
        alert("Enviado")
    }).catch(err => {
        alert("Error")
    })
}