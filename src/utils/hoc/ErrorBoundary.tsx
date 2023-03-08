import React from "react";
import { useRouteError } from "react-router";
import { Link } from "react-router-dom";

const ErrorBoundary = () => {
    const error = useRouteError();
    console.error(error);

    return (
        <div className="not--found">
            <h1>Ooops...</h1>
            <p className="tracking-widest	text-lg">- Something went wrong-</p>
            <Link to="/" className="my-6">
                <button type="button" className="btn">
                    Go back <strong>HOME</strong>
                </button>
            </Link>
        </div>
    );
};

export default ErrorBoundary;
