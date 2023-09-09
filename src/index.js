import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { ThemeProvider, createTheme } from '@mui/material'
import { store } from './redux/store'
import { Provider } from 'react-redux'

const theme = createTheme({
    palette: {
        primary: {
            main: '#0046FF',
        },
        secondary: {
            main: '#ABABAB',
        },
        error: {
            main: '#FF0000',
        },
    },
    typography: {
        h1: {
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '4rem',
            fontWeight: 600,
        },
        p: {
            fontFamily: 'Montserrat, sans-serif',
        },
        a: {
            fontFamily: 'Montserrat, sans-serif',
        },
    },
})

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <App />
            </Provider>
        </ThemeProvider>
    </React.StrictMode>,
)
