import { createSlice } from "@reduxjs/toolkit";

export const counterslice = createSlice({
    name: "Counter",
    initialState: {
        value: 0
    },
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },
        absoulte: (state) => {
            state.value = 0
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

export const { increment, decrement, absoulte, incrementByAmount } = counterslice.actions
export default counterslice.reducer