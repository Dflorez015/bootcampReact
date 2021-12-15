import { createSlice } from "@reduxjs/toolkit";
import { formsInitialState } from "./initialState";

export const formsSlice = createSlice({
    name: "forms",
    initialState: formsInitialState,
    reducers: {
        addRegForm: (state, action) => {
            state.register.push(action.payload)
        }
    }
})

export const { addRegForm } = formsSlice.actions

export default formsSlice.reducer