import { createSlice } from "@reduxjs/toolkit"

const search = createSlice({
    name: "search",
    initialState: {
        query: "",
        activeTab: "photoes",
        result: [],
        loading: false,
        error: null

    },
    reducers: {
        setQuery: (state, action) => {
            state.query = action.payload
        },
        setActiveTab: (state, action) => {
            state.activeTab = action.payload

        },
        setResult: (state, action) => {
            state.result = action.payload
            state.loading = false

        },
        setLoading: (state, action) => {
            state.loading = true
            state.error = null

        },
        setError: (state, action) => {
            state.error = action.payload
            state.loading = false
        },
        clearresult(state) {
            state.result = []
            state.loading = false
            state.error = null

        }

    }
})


export const { setQuery,
    setActiveTab,
    setResult,
    setLoading,
    setError,
    clearresult } = search.actions
export default search.reducer