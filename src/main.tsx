import React from "react";
import ReactDOM from "react-dom/client";
import { MantineProvider } from "@mantine/core";
import App from "./App";
import "./assets/css/index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <App />
        </MantineProvider>
    </React.StrictMode>
);
