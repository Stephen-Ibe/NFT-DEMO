import React from "react";
import { Outlet } from "react-router";
import { Footer, Navbar } from "../blocks";

const WebLayout = () => (
    <div className="m">
        <Navbar />
        <section className="px-4 lg:px-10">
            <Outlet />
        </section>
        <Footer />
    </div>
);

export default WebLayout;
