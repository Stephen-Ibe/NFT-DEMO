import React from "react";
import { NFTCard, NFTCardSkeleton, SideNav } from "../components";
import { nft } from "../utils";

const Home = () => (
    <div className="flex items-start relative container mx-auto">
        <aside className="border hidden sm:block w-2/12 p-4">
            <SideNav />
        </aside>
        <main className="w-full sm:w-10/12 p-4 overflow-y-scroll h-[1000px] pb-44 ">
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {[1, 2, 3, 4, 2, 3, 4, 5, 1].map(() => (
                    <NFTCard nft={nft} />
                ))}
                <NFTCardSkeleton />
            </section>
        </main>
    </div>
);

export default Home;
