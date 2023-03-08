import React, { useEffect, useState } from "react";
import { NFTCard, NFTCardSkeleton, SideNav } from "../components";
// import { nft } from "../utils";
import { NFTDataType } from "../types";
import ProductDetail from "./ProductDetail";
import { getAssetsApi } from "../services";

const Home = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [nfts, setNfts] = useState<NFTDataType[]>([]);
    const [selectedNft, setSelectedNft] =
        useState<Readonly<NFTDataType> | null>(null);

    const showDetail = (data: Readonly<NFTDataType>) => {
        setSelectedNft(data);
    };

    const closeDetail = () => {
        setSelectedNft(null);
    };

    const fetchAllAssets = async () => {
        setLoading(true);
        try {
            const res = await getAssetsApi();

            setNfts(res.assets);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        let mounted = true;

        if (mounted) fetchAllAssets();
        return () => {
            mounted = false;
        };
    }, []);

    return (
        <>
            <div className="flex items-start relative container mx-auto">
                <aside className="border hidden sm:block w-2/12 p-4">
                    <SideNav />
                </aside>
                <main className="w-full sm:w-10/12 p-4 overflow-y-scroll h-screen pb-44 ">
                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {loading ? (
                            <NFTCardSkeleton />
                        ) : (
                            nfts.map(nft => (
                                <NFTCard
                                    nft={nft}
                                    showDetail={showDetail}
                                    key={nft.id}
                                />
                            ))
                        )}
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
