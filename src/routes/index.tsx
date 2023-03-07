import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "../utils";
import { WebLayout } from "../components";
import { NotFound } from "../pages";

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
        errorElement: <ErrorBoundary />,
        hasErrorBoundary: true,
    },
    { path: "*", element: <NotFound /> },
]);

export default router;
