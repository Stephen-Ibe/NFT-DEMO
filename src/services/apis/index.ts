import axios from "../axios";

export const getAssetsApi = async () => {
    try {
        const url = "/assets";
        const res = await axios.get(url);
        return res.data;
    } catch (err: unknown) {
        throw err;
    }
};

export const getSingleAssetApi = async (
    assetContractAddress: string,
    tokenId: string
) => {
    try {
        const url = `/asset/${assetContractAddress}/${tokenId}`;
        const res = await axios.get(url);
        return res.data;
    } catch (err: unknown) {
        throw err;
    }
};
