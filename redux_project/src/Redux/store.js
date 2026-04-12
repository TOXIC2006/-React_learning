import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./feature/searchslice"
const store = configureStore({
    reducer: {
        search: searchReducer

    }
})

export default store