import contract from "./FusionwaveFight.json";

function isEthereum() {
  if (window.ethereum) {
    return true;
  }
  return false;
}

function getChainID() {
  if (isEthereum()) {
    return parseInt(window.ethereum.chainId, 16);
  }
  return 0;
}

function getContractAddress(chainID) {
  switch (chainID) {
    case 666888:
      return "0x0f2C0A451488e87E849B11459146775046Fcf3a4"; //Hela

    case 421614:
      return "0xcd9153aD5C981e30D560dE93454e590E476891A5"; //Arbitrum

    case 534351:
      return "0x3E0D77A8a83a5ed416E30ab691eb3DaB0a0D9Cb5"; //Scroll

    case 1351057110:
      return "0x0f2C0A451488e87E849B11459146775046Fcf3a4"; //Skale
    default:
      return null; // Return null for unknown chain IDs
  }
}

const chainID = getChainID();
const contractAddress = getContractAddress(chainID);

export const { abi: ABI } = contract;
export const ADDRESS = contractAddress;
