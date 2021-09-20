import { configureStore } from "@reduxjs/toolkit"

const initialState = {
    user: "Piu Paul",
    age: 30
}

export const store = configureStore({
    reducer: (state) => {
        return state
    },
    preloadedState: initialState,
})