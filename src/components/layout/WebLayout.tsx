import React from "react";
import { Outlet } from "react-router";
import { Navbar } from "../blocks";

const WebLayout = () => (
    <div className="body">
        <Navbar />
        <section className="px-4 lg:px-10">
            <Outlet />
        </section>
    </div>
);

export default WebLayout;
