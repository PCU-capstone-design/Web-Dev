import { createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./component/reportWebVitals";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

let theme = createTheme({
    typography: {
        fontSize: 15,
        fontFamily: "Do Hyeon",
    },
    palette: {
        primary: {
            main: "#D4DFE6",
        },
        secondary: {
            main: "#8EC0E4",
        },
    },
});

root.render(
    // <React.StrictMode>

    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </BrowserRouter>

    // </React.StrictMode>
);

reportWebVitals();
