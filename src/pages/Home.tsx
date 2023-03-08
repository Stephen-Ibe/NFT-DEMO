import React, { useEffect, useState } from "react";
import { Alert } from "@mantine/core";
import { NFTCard, NFTCardSkeleton, SideNav } from "../components";
import { NFTDataType } from "../types";
import ProductDetail from "./ProductDetail";
import { getAssetsApi } from "../services";
import { useMockData } from "../hooks";

const Home = () => {
    const mockData = useMockData(12);
    const [loading, setLoading] = useState<boolean>(false);
    const [hasError, setHasError] = useState<Record<
        string,
        string | boolean
    > | null>({
        state: false,
        errMessage: "",
    });
    const [nfts, setNfts] = useState<NFTDataType[]>([]);
    const [selectedNft, setSelectedNft] =
        useState<Readonly<NFTDataType> | null>(null);

    const showDetail = (data: Readonly<NFTDataType>) => {
        setSelectedNft(data);
    };

    const closeDetail = () => {
        setSelectedNft(null);
    };

    const clearError = () => {
        setHasError(null);
    };

    const fetchAllAssets = async () => {
        setLoading(true);
        try {
            const res = await getAssetsApi();

            setNfts(res.assets);
        } catch (err: any) {
            setHasError({
                state: true,
                error: err.message,
                errMessage: err.response.data.message,
            });
        } finally {
            setLoading(false);
            clearError();
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
            {hasError?.state && (
                <div className="nft--container my-6">
                    <Alert
                        color="red"
                        title={hasError?.error}
                        withCloseButton
                        onClose={clearError}
                    >
                        {hasError?.errMessage}
                    </Alert>
                </div>
            )}
            <div className="flex items-start relative container mx-auto overflow-hidden">
                <aside className="hidden lg:block w-2/12 p-4">
                    <SideNav />
                </aside>
                <main className="w-full lg:w-10/12 p-4 overflow-y-scroll h-screen pb-44 ">
                    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {loading ? (
                            mockData.map(({ id }) => (
                                <NFTCardSkeleton key={id} />
                            ))
                        ) : nfts.length > 0 ? (
                            nfts.map(nft => (
                                <NFTCard
                                    nft={nft}
                                    showDetail={showDetail}
                                    key={nft.id}
                                />
                            ))
                        ) : (
                            <p>No Items Found</p>
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
