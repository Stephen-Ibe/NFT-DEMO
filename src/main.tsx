import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { MantineProvider } from "@mantine/core";
import "./assets/css/index.css";
import router from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <RouterProvider router={router} />
        </MantineProvider>
    </React.StrictMode>
);
