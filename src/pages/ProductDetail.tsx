import React from "react";
import { Modal } from "@mantine/core";

type Props = {
    close(): void;
};

const ProductDetail = ({ close }: Props) => (
    <Modal opened onClose={close} title="Authentication">
        Hello
    </Modal>
);

export default ProductDetail;
