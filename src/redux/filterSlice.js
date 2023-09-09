import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
    name: 'filter',
    initialState: [],
    reducers: {
        insert: (state, action) => {
            state.length = 0
            state.push(...action.payload)
        },
        clear: (state) => {
            state.length = 0
        },
    },
})

export const { insert, clear } = filterSlice.actions
export default filterSlice.reducer
