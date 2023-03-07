import React, { memo, useEffect, useState } from "react";
import { Modal } from "@mantine/core";
import { NFTDataType } from "../types";

type Props = {
    close(): void;
    nft: Readonly<NFTDataType>;
};

const ProductDetail = ({ close, nft }: Props) => {
    const [name, setName] = useState<string>("");

    useEffect(() => {
        setName(nft.name);
        return () => setName("");
    });

    return (
        <Modal opened onClose={close} title={name} size="lg">
            Hello
        </Modal>
    );
};

export default memo(ProductDetail);
