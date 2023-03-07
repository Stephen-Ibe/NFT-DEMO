import React from "react";
import { NFTDataType } from "../../../types";

type Props = {
    nft: NFTDataType;
};

const NFTCard = ({ nft }: Props) => (
    <div className="nft--card">
        <div className="nftcard--img-container">
            <img
                src={nft?.image_original_url}
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
