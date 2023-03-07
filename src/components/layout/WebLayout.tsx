import React from "react";
import { Outlet } from "react-router";
import { Footer, Navbar } from "../blocks";

const WebLayout = () => (
    <div className="m">
        <Navbar />
        <section className="mt-24 mb-20 sm:mt-0 px-4 lg:px-10">
            <Outlet />
        </section>
        <Footer />
    </div>
);

export default WebLayout;
