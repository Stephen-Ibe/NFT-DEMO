import React, { memo, useEffect, useState } from "react";
import { Modal, useMantineTheme } from "@mantine/core";
import { NFTDataType } from "../types";

type Props = {
    close(): void;
    nft: Readonly<NFTDataType>;
};

const ProductDetail = ({ close, nft }: Props) => {
    const [name, setName] = useState<string>("");

    const theme = useMantineTheme();

    useEffect(() => {
        setName(nft.name);
        return () => setName("");
    });

    return (
        <Modal
            opened
            onClose={close}
            title={name}
            size="55rem"
            overlayProps={{
                color:
                    theme.colorScheme === "dark"
                        ? theme.colors.dark[9]
                        : theme.colors.gray[2],
                opacity: 0.55,
                blur: 3,
            }}
        >
            <section className="flex h-full space-x-4">
                <div className="img w-4/12 ">
                    <div className="relative h-[250px] w-full">
                        <img
                            src={nft?.image_original_url}
                            alt="nft__image"
                            className="absolute w-full h-full object-cover rounded-t-lg"
                        />
                    </div>
                    <div className="my-2 py-2">
                        <h3 className="font-semibold text-base">{nft?.name}</h3>
                        <p className="text-sm">
                            Owned by{" "}
                            <a
                                href={nft?.collection?.external_url}
                                className="text-blue-600"
                            >
                                {nft?.collection?.name}
                            </a>
                        </p>
                    </div>
                </div>
                <div className="w-8/12 px-2">
                    <p className="text-justify text-sm">
                        {nft?.asset_contract?.description}
                    </p>
                    <div className="my-4">
                        <h4 className="font-semibold text-lg">Traits</h4>
                        <div className="grid grid-cols-3 gap-4 my-2">
                            {nft?.traits.map(trait => (
                                <div className="border text-center p-4 rounded-lg">
                                    <p className="uppercase text-xs">
                                        {trait.trait_type}
                                    </p>
                                    <h5 className="capitalize font-semibold">
                                        {trait.value}
                                    </h5>
                                    <p className="text-xs">
                                        {trait.trait_count} people have this
                                        trait
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </Modal>
    );
};

export default memo(ProductDetail);
