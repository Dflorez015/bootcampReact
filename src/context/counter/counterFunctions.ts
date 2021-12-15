import { Dispatch } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { addCounter } from "./counterSlice";


/**
 * Suma el número ingresado
 * @returns 
 */
export const sumCont = () => (dispatch: Dispatch, getState: () => RootState) => {
    const { count } = getState().counter
    dispatch(addCounter(count + 1))
}

/**
 * Resta el número ingresado
 * @returns 
 */
export const restCont = () => (dispatch: Dispatch, getState: () => RootState) => {
    const { count } = getState().counter
    dispatch(addCounter(count - 1))
}