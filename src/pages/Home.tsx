import React, { FC } from "react";
import { NFTCard, SideNav } from "../components";

const nft = {
    chain: "ethereum",
    contract_address: "0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
    token_id: "0",
    metadata_url: "ipfs://QmeSjSinHpPnmXmspMjwiXyN6zS4E9zccariGR3jxcaWtq/0",
    metadata: {
        image: "ipfs://QmRRPWG96cmgTn2qSzjwr2qvfNEuhunv6FNeMFGa9bx6mQ",
        attributes: [
            {
                trait_type: "Earring",
                value: "Silver Hoop",
            },
            {
                trait_type: "Background",
                value: "Orange",
            },
            {
                trait_type: "Fur",
                value: "Robot",
            },
            {
                trait_type: "Clothes",
                value: "Striped Tee",
            },
            {
                trait_type: "Mouth",
                value: "Discomfort",
            },
            {
                trait_type: "Eyes",
                value: "X Eyes",
            },
        ],
    },
    file_url: "ipfs://QmRRPWG96cmgTn2qSzjwr2qvfNEuhunv6FNeMFGa9bx6mQ",
    animation_url: null,
    cached_file_url:
        "https://storage.googleapis.com/sentinel-nft/raw-assets/e45a1f6f4ce083f0718409066b9dce1c7003c72c514e8552cf33515ac103bcea.png",
    cached_animation_url: null,
    creator_address: "0xaba7161a7fb69c88e16ed9f455ce62b791ee4d03",
    updated_date: "2023-02-23T16:04:29.021619",
    owner: null,
};

const Home: FC = () => (
    <div className="my-10 flex items-start h-screen">
        <aside className="border w-3/12">
            <SideNav />
        </aside>
        <main className="border w-9/12 h-full p-4">
            <NFTCard nft={nft} />
        </main>
    </div>
);

export default Home;
