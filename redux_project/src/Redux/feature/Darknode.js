import { createSlice } from "@reduxjs/toolkit"

const setdarkmode = createSlice({
    name: "theme",
    initialState: {
        theme: "light"
    },
    reducers: {
        settheme: (state, action) => {
            state.theme = action.payload
        }
    }
})
export const { settheme } = setdarkmode.actions
export default setdarkmode.reducer