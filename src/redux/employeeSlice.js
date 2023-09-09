import { createSlice } from '@reduxjs/toolkit'

const employeeSlice = createSlice({
    name: 'employee',
    initialState: [],
    reducers: {
        append: (state, action) => {
            const newEmployee = { ...action.payload }
            state.push(newEmployee)
        },
    },
})

export const { append } = employeeSlice.actions
export default employeeSlice.reducer
