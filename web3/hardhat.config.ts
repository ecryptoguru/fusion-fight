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
  defaultNetwork: "scrollSepolia", // chosen by default when the network isn't specified while running Hardhat
  networks: {
    scrollSepolia: {
      url: "https://sepolia-rpc.scroll.io",
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
    mantleTest: {
      url: "https://rpc.testnet.mantle.xyz",
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
        network: "mantleTest",
        chainId: 5001,
        urls: {
          apiURL: "https://explorer.testnet.mantle.xyz/api",
          browserURL: "https://explorer.testnet.mantle.xyz",
        },
      },
    ],
  },
};

export default config;
