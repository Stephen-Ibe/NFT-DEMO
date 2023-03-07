import React from "react";
import { NFTCard, NFTCardSkeleton, SideNav } from "../components";
import { nft } from "../utils";

const Home = () => (
    <div className="flex items-start relative">
        <aside className="border hidden sm:block w-3/12 p-4">
            <SideNav />
        </aside>
        <main className="w-full sm:w-9/12 p-4 overflow-y-scroll lg:h-[1235px]">
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[1, 2, 3, 4].map(() => (
                    <NFTCard nft={nft} />
                ))}
                <NFTCardSkeleton />
            </section>
        </main>
    </div>
);

export default Home;
