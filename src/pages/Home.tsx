import React, { FC } from "react";
import { NFTCard, SideNav } from "../components";

const Home: FC = () => (
    <div className="my-10  flex">
        <aside className="border w-3/12">
            <SideNav />
        </aside>
        <main className="border w-9/12">
            <NFTCard />
        </main>
    </div>
);

export default Home;
