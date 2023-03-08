import React, { memo } from "react";
import {
    Button,
    Divider,
    Modal,
    Tooltip,
    useMantineTheme,
} from "@mantine/core";
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
            title="NFT Details Page"
            overlayProps={{
                color:
                    theme.colorScheme === "dark"
                        ? theme.colors.dark[9]
                        : theme.colors.gray[2],
                opacity: 0.55,
                blur: 5,
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
                        <p className="text-xs mt-2">
                            Owned by{" "}
                            <a
                                href={nft?.collection?.external_url}
                                className="text-blue-600"
                            >
                                {nft?.collection?.name}
                            </a>
                        </p>
                        <p className="text-xs">
                            Created by{" "}
                            <a
                                href={nft?.creator?.profile_img_url}
                                className="text-blue-600"
                            >
                                {nft?.creator?.user?.username ?? "Anonymous"}
                            </a>
                        </p>
                    </div>
                </div>
                <div className="w-8/12 px-2  flex flex-col justify-between">
                    <div>
                        <p className="text-justify text-base">
                            {nft?.description ??
                                "This NFT has no description attached to it."}
                        </p>

                        <div className="my-4">
                            <h4 className="font-semibold text-lg">Traits</h4>
                            {nft?.traits.length > 0 ? (
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
                            ) : (
                                <p>No traits available for this NFT.</p>
                            )}
                        </div>
                        <Divider my="sm" />
                        <div className="my-4">
                            <h4 className="font-semibold text-lg my-2">
                                Collection - ({nft?.collection?.name})
                            </h4>
                            <div>
                                <p className="text-justify capitalize text-sm">
                                    {(nft?.collection?.description ??
                                        "No Collection Description") ||
                                        (nft?.collection?.description === "" &&
                                            "No Collection Description")}
                                </p>
                            </div>
                        </div>
                        <Divider my="sm" />
                        <div className="my-4">
                            <h4 className="font-semibold text-lg my-2">
                                Asset Details
                            </h4>
                            <div className="flex flex-col gap-y-2">
                                <section className="flex justify-between items-center text-sm">
                                    <h6>Address</h6>
                                    <p className="tt">
                                        {nft?.asset_contract?.address}
                                    </p>
                                </section>
                                <section className="flex justify-between items-center text-sm">
                                    <h6>Contract Type</h6>
                                    <p className="tt justify-self-end">
                                        {
                                            nft?.asset_contract
                                                ?.asset_contract_type
                                        }
                                    </p>
                                </section>
                                <section className="flex justify-between items-center text-sm">
                                    <h6>Name</h6>
                                    <p className="justify-self-end">
                                        {nft?.asset_contract?.name}
                                    </p>
                                </section>
                            </div>
                        </div>
                    </div>
                    <div className="self-end space-x-4 mt-4">
                        <Button variant="outline" color="green">
                            Purchase NFT
                        </Button>
                    </div>
                </div>
            </section>
        </Modal>
    );
};

export default memo(ProductDetail);
