import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
    <div className="not--found">
        <h1>404</h1>
        <p className="tracking-widest	text-lg">- Page Not Found -</p>
        <Link to="/" className="my-6">
            <button type="button" className="btn">
                Go back <strong>HOME</strong>
            </button>
        </Link>
    </div>
);

export default NotFound;
