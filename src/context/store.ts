import { configureStore } from "@reduxjs/toolkit";
import counter from "./counter/counterSlice"
import forms from "./form/formSlice"

export const store = configureStore({
    reducer: {
        counter,
        forms
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch