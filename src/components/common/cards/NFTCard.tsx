import React from "react";
import { NFTDataType } from "../../../types";

type Props = {
    nft: Readonly<NFTDataType>;
    showDetail(nft: Readonly<NFTDataType>): void;
};

const NFTCard = ({ nft, showDetail }: Props) => (
    <div className="nft--card" onClick={() => showDetail(nft)} role="button">
        <div className="nftcard--img-container">
            <img
                src={nft?.image_url}
                alt="nft__image"
                className="absolute w-full h-full object-cover rounded-t-lg"
            />
        </div>
        <div className="nft--card-details">
            <h3>{nft?.name}</h3>
            <p>{nft?.collection?.name}</p>
        </div>
    </div>
);

export default NFTCard;
