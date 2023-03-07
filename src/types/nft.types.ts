type ASSETCONTRACTTYPE = {
    only_proxied_transfers: boolean;
    opensea_version: null;
    created_date: string;
    total_supply: null;
    owner: null;
    external_link: string;
    address: string;
    description: string;
    image_url: string;
    default_to_fiat: boolean;
    payout_address: null;
    name: string;
    dev_buyer_fee_basis_points: number;
    seller_fee_basis_points: number;
    opensea_buyer_fee_basis_points: number;
    nft_version: string;
    asset_contract_type: string;
    symbol: string;
    dev_seller_fee_basis_points: number;
    buyer_fee_basis_points: number;
    schema_name: string;
    opensea_seller_fee_basis_points: number;
};

type NFTTraitType = {
    value: string;
    trait_count: number;
    order: null;
    trait_type: string;
    display_type: null;
    max_value: null;
};

type NFTCreatorType = {
    profile_img_url: string;
    user: null;
    config: string;
    address: string;
};

type NFTCollectionType = {
    only_proxied_transfers: boolean;
    large_image_url: string;
    chat_url: null;
    featured: boolean;
    discord_url: string;
    default_to_fiat: boolean;
    hidden: boolean;
    name: string;
    telegram_url: null;
    external_url: string;
    banner_image_url: string;
    opensea_seller_fee_basis_points: number;
    require_email: boolean;
    safelist_request_status: string;
    medium_username: null;
    fees: {
        opensea_fees: {
            "0x0000a26b00c1f0df003000390027140000faa719": number;
        };
        seller_fees: {};
    };
    short_description: null;
    featured_image_url: string;
    slug: string;
    image_url: string;
    wiki_url: null;
    is_rarity_enabled: boolean;
    is_creator_fees_enforced: boolean;
    dev_buyer_fee_basis_points: string;
    display_data: {
        card_display_style: string;
    };
    created_date: string;
    twitter_username: string;
    payout_address: null;
    opensea_buyer_fee_basis_points: string;
    dev_seller_fee_basis_points: string;
    instagram_username: null;
    is_subject_to_whitelist: boolean;
    is_nsfw: boolean;
};

export type NFTDataType = {
    decimals: null;
    id: number;
    transfer_fee_payment_token: null;
    permalink: string;
    image_original_url: string;
    transfer_fee: null;
    external_link: string;
    image_thumbnail_url: string;
    animation_original_url: null;
    description: null;
    token_metadata: null;
    rarity_data: null;
    supports_wyvern: boolean;
    image_url: string;
    asset_contract: ASSETCONTRACTTYPE;
    listing_date: null;
    seaport_sell_orders: null;
    top_bid: null;
    animation_url: null;
    name: string;
    image_preview_url: string;
    traits: NFTTraitType[];
    creator: NFTCreatorType;
    num_sales: number;
    owner: null;
    is_nsfw: boolean;
    collection: NFTCollectionType;
    last_sale: null;
    token_id: string;
    background_color: null;
};
