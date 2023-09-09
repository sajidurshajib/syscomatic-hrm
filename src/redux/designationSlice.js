import { createSlice } from '@reduxjs/toolkit'

const designationSlice = createSlice({
    name: 'designation',
    initialState: [],
    reducer: {
        add: (state, action) => {
            state.push(action.payload)
        },
    },
})

export const { add } = designationSlice.actions
export default designationSlice.reducer
