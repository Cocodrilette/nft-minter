import { ERC721_ABI } from "./abi";

export const appConfig = {
  appName: "NFT Minter",
  walletConnectProjectID:
    process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID || "",
  contractAddress: (process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ||
    "") as `0x${string}`,
  contractABI: ERC721_ABI,
  rpcURL: process.env.NEXT_PUBLIC_RPC_URL || "",
};
