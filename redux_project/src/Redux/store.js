import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./feature/searchslice"
import setdarkmode from "./feature/Darknode"

const store = configureStore({
    reducer: {
        search: searchReducer,
        setdarkmode: setdarkmode

    }
})

export default store