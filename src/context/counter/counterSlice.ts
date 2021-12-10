import { createSlice } from "@reduxjs/toolkit";
import { counterInitialState } from "./initialState";

export const counterSlice = createSlice({
    name: "counter",
    initialState: counterInitialState,
    reducers: {
        addCounter: (state, action) => {
            state.count = action.payload
        }
    }

})
export const { addCounter } = counterSlice.actions

export default counterSlice.reducer