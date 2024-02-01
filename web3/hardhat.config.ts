import { HardhatUserConfig } from "hardhat/types/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.16",
    settings: {
      viaIR: true,
      optimizer: {
        enabled: true,
        runs: 100,
      },
    },
  },
  networks: {
    scrollSepolia: {
      gasPrice: 700000000,
      url: "https://sepolia-rpc.scroll.io" || "",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    skaleTest: {
      url: "https://staging-v3.skalenodes.com/v1/staging-fast-active-bellatrix",
      accounts: [process.env.PRIVATE_KEY ?? ""],
    },
    arbitrumSepolia: {
      url: "https://sepolia-rollup.arbitrum.io/rpc",
      accounts: [process.env.PRIVATE_KEY ?? ""],
    },
    helaTest: {
      url: "https://testnet-rpc.helachain.com",
      accounts: [process.env.PRIVATE_KEY ?? ""],
    },
  },
  etherscan: {
    apiKey: {
      scrollSepolia: "U83MHQBE237G23FPRTK5UK9GFUZ27BEE6E",
      helaTest: "",
      arbitrumSepolia: "DMC4ZTP2JEIYKEPKASY5G1DNM5BIPU8N73",
      skaleTest: "",
    },
    customChains: [
      {
        network: "scrollSepolia",
        chainId: 534351,
        urls: {
          apiURL: "https://api-sepolia.scrollscan.com/api",
          browserURL: "https://sepolia.scrollscan.io/",
        },
      },
      {
        network: "skaleTest",
        chainId: 1351057110,
        urls: {
          apiURL: "https://staging-fast-active-bellatrix.explorer.staging-v3.skalenodes.com/api",
          browserURL: "https://staging-fast-active-bellatrix.explorer.staging-v3.skalenodes.com",
        },
      },
      {
        network: "arbitrumSepolia",
        chainId: 421614,
        urls: {
          apiURL: "https://api-sepolia.arbiscan.io/api",
          browserURL: "https://sepolia.arbiscan.io/",
        },
      },
      {
        network: "helaTest",
        chainId: 666888,
        urls: {
          apiURL: "https://testnet-blockexplorer.helachain.com/api",
          browserURL: "https://testnet-blockexplorer.helachain.com/",
        },
      },
    ],
  },
};

export default config;
