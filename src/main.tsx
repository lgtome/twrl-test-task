import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { GlobalStyles } from './assets/styles/globalStyles.ts'
import { ThemeProvider } from 'styled-components'
import { THEME } from '@FE/theme'
import { App } from './App.tsx'
import '@fontsource-variable/pathway-extreme'
import '@fontsource/young-serif'

ReactDOM.createRoot(document.getElementById('root') as HTMLDivElement).render(
    <ThemeProvider theme={THEME}>
        <BrowserRouter>
            <GlobalStyles />
            <App />
        </BrowserRouter>
    </ThemeProvider>
)
