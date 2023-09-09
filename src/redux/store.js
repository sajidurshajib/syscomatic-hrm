import { configureStore, combineReducers } from '@reduxjs/toolkit'
import employeeReducer from './employeeSlice'
import designationReducer from './designationSlice'
import filterSliceReducer from './filterSlice'

// set data
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem('syscomaticState', serializedState)
    } catch {}
}

// get data
const loadState = () => {
    try {
        const serializedState = localStorage.getItem('syscomaticState')
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (err) {
        return undefined
    }
}

const persistedState = loadState()

const rootReducer = combineReducers({
    employee: employeeReducer,
    designation: designationReducer,
    filter: filterSliceReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: persistedState,
})

store.subscribe(() => {
    saveState(store.getState())
})

export default store
