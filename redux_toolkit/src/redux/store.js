import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feature"
export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})

export default store
