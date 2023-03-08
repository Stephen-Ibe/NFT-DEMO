import React, { memo } from "react";
import { Modal, Tooltip, useMantineTheme } from "@mantine/core";
import { FaExternalLinkAlt } from "react-icons/fa";
import { NFTDataType } from "../types";
import { FallbackImg } from "../assets";

type Props = {
    close(): void;
    nft: Readonly<NFTDataType>;
};

const ProductDetail = ({ close, nft }: Props) => {
    const theme = useMantineTheme();

    return (
        <Modal
            opened
            onClose={close}
            size="55rem"
            withCloseButton={false}
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
                <div className="img w-4/12">
                    <div className="relative h-[250px] w-full">
                        <img
                            src={nft?.image_url ?? FallbackImg}
                            alt="nft__image"
                            className="absolute w-full h-full object-cover rounded-t-lg"
                        />
                        <Tooltip label="View original media" withArrow>
                            <div className="absolute top-2 right-2 rounded-full p-2 bg-slate-300 cursor-pointer">
                                <FaExternalLinkAlt size={12} />
                            </div>
                        </Tooltip>
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
                    <p className="text-justify text-sm">{nft?.description}</p>
                    {nft?.traits.length > 0 && (
                        <div className="my-4">
                            <h4 className="font-semibold text-lg">Traits</h4>
                            <div className="grid grid-cols-3 gap-4 my-2">
                                {nft?.traits.map(trait => (
                                    <div
                                        className="border text-center p-4 rounded-lg"
                                        key={trait.value}
                                    >
                                        <p className="uppercase text-xs">
                                            {trait.trait_type}
                                        </p>
                                        <h5 className="capitalize font-semibold">
                                            {trait.value}
                                        </h5>
                                        <p className="text-xs">
                                            <span className="font-semibold">
                                                {trait.trait_count}
                                            </span>{" "}
                                            people have this trait
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </Modal>
    );
};

export default memo(ProductDetail);
