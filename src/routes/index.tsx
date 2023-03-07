import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import WebLayout from "../components/layout/WebLayout";

const Home = lazy(() => import("../pages/Home"));

const router = createBrowserRouter([
    {
        path: "/",
        children: [
            {
                element: <WebLayout />,
                children: [
                    {
                        element: <Home />,
                        index: true,
                    },
                ],
            },
        ],
    },
]);

export default router;
