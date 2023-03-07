import React from "react";
import { useRouteError } from "react-router";

const ErrorBoundary = () => {
    const error = useRouteError();
    console.error(error);

    return <div>Error</div>;
};

export default ErrorBoundary;
