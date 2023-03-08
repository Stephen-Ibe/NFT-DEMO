import React, { useState } from "react";
import { NFTCard, NFTCardSkeleton, SideNav } from "../components";
import { nft } from "../utils";
import { NFTDataType } from "../types";
import ProductDetail from "./ProductDetail";

const Home = () => {
    const [selectedNft, setSelectedNft] =
        useState<Readonly<NFTDataType> | null>(null);

    const showDetail = (data: Readonly<NFTDataType>) => {
        setSelectedNft(data);
    };

    const closeDetail = () => {
        setSelectedNft(null);
    };

    return (
        <>
            <div className="flex items-start relative container mx-auto">
                <aside className="border hidden sm:block w-2/12 p-4">
                    <SideNav />
                </aside>
                <main className="w-full sm:w-10/12 p-4 overflow-y-scroll h-screen pb-44 ">
                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            1, 2, 3, 4, 2, 3, 2, 6, 7, 2, 1, 2, 3, 4, 5, 6, 7,
                            8, 6, 4, 3, 4, 5, 1,
                        ].map(() => (
                            <NFTCard nft={nft} showDetail={showDetail} />
                        ))}
                        <NFTCardSkeleton />
                    </section>
                </main>
            </div>
            {selectedNft !== null && (
                <ProductDetail close={closeDetail} nft={selectedNft} />
            )}
        </>
    );
};

export default Home;
