import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
    <div className="not_found">
        <h1 className="text-8xl">404</h1>
        <p className="tracking-widest	text-lg">- Page Not Found -</p>
        <Link to="/" className="my-4">
            <button type="button" className="py-2  border px-10">
                Go back <strong>HOME</strong>
            </button>
        </Link>
    </div>
);

export default NotFound;
