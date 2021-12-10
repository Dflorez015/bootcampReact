import { Dispatch } from "@reduxjs/toolkit";
import { addCounter } from "./counterSlice";


/**
 * Suma el número ingresado
 * @param {number} num 
 * @returns 
 */
export const sumCont = (num: number) => (dispatch: Dispatch) => {
    dispatch(addCounter(num + 1))
}

/**
 * Resta el número ingresado
 * @param {number} num 
 * @returns 
 */
export const restCont = (num: number) => (dispatch: Dispatch) => {
    dispatch(addCounter(num - 1))
}