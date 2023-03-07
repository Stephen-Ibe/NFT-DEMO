import React from "react";
import { Outlet } from "react-router";
import { Navbar } from "../blocks";

const WebLayout = () => (
    <div className="body">
        <Navbar />
        <Outlet />
    </div>
);

export default WebLayout;
