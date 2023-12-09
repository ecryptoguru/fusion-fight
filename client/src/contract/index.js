import contract from "./FusionFight.json";

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
    case 1442:
      return "0x0f2C0A451488e87E849B11459146775046Fcf3a4";

    case 421614:
      return "0xcd9153aD5C981e30D560dE93454e590E476891A5";

    case 534351:
      return "0x60E5f0084C98e4eF498386B95f4e5dc70d1A233c";

    default:
      return null; // Return null for unknown chain IDs
  }
}

const chainID = getChainID();
const contractAddress = getContractAddress(chainID);

export const { abi: ABI } = contract;
export const ADDRESS = contractAddress;