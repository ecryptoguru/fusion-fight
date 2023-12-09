import { HardhatUserConfig } from "hardhat/types/config";
import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
      viaIR: true,
      optimizer: {
        enabled: true,
        runs: 100,
      },
    },
  },
  defaultNetwork: "scrollSepolia", // chosen by default when the network isn't specified while running Hardhat
  networks: {
    scrollSepolia: {
      url: process.env.RPC_URL || "https://sepolia-rpc.scroll.io",
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    sepolia: {
      url: process.env.RPC_URL,
      accounts: [process.env.PRIVATE_KEY ?? ""],
    },
    polygonzkEVM: {
      url: "https://rpc.public.zkevm-test.net",
      accounts: [process.env.PRIVATE_KEY ?? ""],
    },
    arbitrumSepolia: {
      url: "https://sepolia-rollup.arbitrum.io/rpc",
      accounts: [process.env.PRIVATE_KEY ?? ""],
    },
    Mumbai: {
      url: "https://polygon-mumbai.infura.io/v3/bb5b40a66d904b65815f65a3fe29fd25",
      accounts: [process.env.PRIVATE_KEY ?? ""],
    },
  },
  etherscan: {
    apiKey: {
      scrollSepolia: "U83MHQBE237G23FPRTK5UK9GFUZ27BEE6E",
      polygonzkEVM: "J4M7CG4GUP9SSARK668CEZ8HKT8NNCXUGM",
      arbitrumSepolia: "DMC4ZTP2JEIYKEPKASY5G1DNM5BIPU8N73",
    },
    customChains: [
      {
        network: "scrollSepolia",
        chainId: 534351,
        urls: {
          apiURL: "https://sepolia-blockscout.scroll.io/api",
          browserURL: "https://sepolia-blockscout.scroll.io/",
        },
      },
      {
        network: "polygonzkEVM",
        chainId: 1442,
        urls: {
          apiURL: "https://api-testnet-zkevm.polygonscan.com/api",
          browserURL: "https://testnet-zkevm.polygonscan.com/",
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
        network: "Mumbai",
        chainId: 80001,
        urls: {
          apiURL: "https://api-testnet.polygonscan.com/api",
          browserURL: "https://mumbai.polygonscan.com/",
        },
      },
    ],
  },
};

export default config;
