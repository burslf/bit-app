import "@ethersproject/shims";
import { ethers } from "ethers";

const generateRandomWallet = () => {
    return ethers.Wallet.createRandom()
};

export {
    generateRandomWallet
};