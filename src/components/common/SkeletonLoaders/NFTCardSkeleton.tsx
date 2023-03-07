import React from "react";
import { Skeleton } from "@mantine/core";

const NFTCardSkeleton = () => (
    <div className="nft--card">
        <div className="nftcard--img-container">
            <Skeleton className="h-full" />
        </div>
        <div className="nft--card-details space-y-2 pt-4">
            <Skeleton height={20} width={150} />
            <Skeleton height={20} width={100} />
        </div>
    </div>
);

export default NFTCardSkeleton;
