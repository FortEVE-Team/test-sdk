
export const NODE_URL = {
    MATIC: "https://rpc-mainnet.matic.network",
    MUMBAI: "https://matic-mumbai.chainstacklabs.com",
    LOCALHOST: "http://localhost:8545"
}

export const CONTRACTS = {
    MATIC: {
        COLLATERAL_TOKEN: process.env.REACT_APP_COLLATERAL_TOKEN_ADDRESS,
        PERPETUAL: process.env.REACT_APP_PERPETUAL_ADDRESS,
        AMM: process.env.REACT_APP_AMM_ADDRESS
    },
    MUMBAI :{
        COLLATERAL_TOKEN: "0xb594DE5537A28F317f159af080953a3fEef69781", // Fake Matic USD || MUSD
        PERPETUAL: "0x151fEF90Be8ffacBED3A59982a0D08A4b87F2409",
        AMM: "0xF355914676752C250B431bA68EB125a86364B7d4"
    },
    LOCALHOST: {
        COLLATERAL_TOKEN: process.env.REACT_APP_COLLATERAL_TOKEN_ADDRESS,
        PERPETUAL: process.env.REACT_APP_PERPETUAL_ADDRESS,
        AMM: process.env.REACT_APP_AMM_ADDRESS
    }
}