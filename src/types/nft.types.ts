type NFTAttributeType = {
    trait_type: string;
    value: string;
};

type NFTMetaDataType = {
    image: string;
    attributes: NFTAttributeType[];
};

export type NFTDataType = {
    chain: string;
    contract_address: string;
    token_id: string;
    metadata_url: string;
    metadata: NFTMetaDataType;
    file_url: string;
    animation_url: null;
    cached_file_url: string;
    cached_animation_url: null;
    creator_address: string;
    updated_date: string;
    owner: null;
};
