const { Alchemy, Network, NftFilters } = require("alchemy-sdk");
require('dotenv').config()
const { Quoter } = require("sudo-defined-quoter");

const config = {
    apiKey: process.env.ALCHEMY_API_KEY,
    network: Network.ETH_MAINNET,
};

// Create a new Quoter instance
const q = new Quoter(process.env.DEFINE_API_KEY, 1);

const alchemy = new Alchemy(config);
const collections = {
    "DickButts": "0x42069ABFE407C60cf4ae4112bEDEaD391dBa1cdB",
    "Remilio": "0xD3D9ddd0CF0A5F0BFB8f7fcEAe075DF687eAEBaB",
    "Shiboshis": "0x11450058d796B02EB53e65374be59cFf65d3FE7f",
    "Cyber_KongzBABY": "0x57a204AA1042f6E66DD7730813f4024114d74f37"
    };
const main = async () => {

    // Get floor price
    const price = await alchemy.nft.getFloorPrice(collections["Cyber_KongzBABY"]);
    const askQuotes = await q.getAskQuotes(collections["Cyber_KongzBABY"]);
    console.log("------------------------------------------")
    console.log(`OpenSea Floor price: ${price.openSea.floorPrice}`);
    console.log(`SudoSwap price: ${askQuotes[0].pool.spotPrice}`)
    console.log(`LooksRare Floor Price: ${price.looksRare.floorPrice}`);
    
    console.log("------------------------------------------")
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

runMain();
