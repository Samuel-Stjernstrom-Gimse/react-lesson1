import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import {ThemeProvider} from "@mui/material";
import {theme} from "./themes/theme";

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
    <ThemeProvider theme={theme}>
        <App/>
    </ThemeProvider>
);
