/* eslint-disable prefer-destructuring */
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

async function handleConnection(accounts) {
  if (accounts.length === 0) {
    const fetchedAccounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    return fetchedAccounts;
  }

  return accounts;
}

async function requestAccount() {
  let currentAccount = 0x0;
  if (isEthereum() && getChainID() !== 0) {
    let accounts = await window.ethereum.request({ method: "eth_accounts" });
    accounts = await handleConnection(accounts);
    currentAccount = accounts[0];
  }
  return currentAccount;
}

async function requestBalance(currentAccount) {
  let currentBalance = 0;
  if (isEthereum()) {
    try {
      currentBalance = await window.ethereum.request({
        method: "eth_getBalance",
        params: [currentAccount, "latest"],
      });

      currentBalance = parseInt(currentBalance, 16) / 1e18;

      return { currentBalance, err: false };
    } catch (err) {
      return { currentBalance, err: true };
    }
  }
  return { currentBalance, err: true };
}

export const GetParams = async () => {
  const response = {
    isError: false,
    message: "",
    step: -1,
    balance: 0,
    account: "0x0",
  };

  if (!isEthereum()) {
    response.step = 0;
    return response;
  }

  const currentAccount = await requestAccount();
  if (currentAccount === 0x0) {
    response.step = 1;
    return response;
  }

  response.account = currentAccount;

  if (
    getChainID() !== 534351 &&
    getChainID() !== 666888 &&
    getChainID() !== 421614 &&
    getChainID() !== 1351057110
  ) {
    response.step = 2;
    return response;
  }

  const { currentBalance, err } = await requestBalance(currentAccount);
  if (err) {
    response.isError = true;
    response.message = "Error fetching balance!";
    return response;
  }
  response.balance = currentBalance;

  if (currentBalance < 0.00001) {
    response.step = 3;
    return response;
  }

  return response;
};

export async function SwitchNetwork() {
  await window?.ethereum
    ?.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          chainId: "0x8274f",
          chainName: "scrollSepolia",
          nativeCurrency: {
            name: "ETH",
            symbol: "ETH",
            decimals: 18,
          },
          rpcUrls: ["https://sepolia-rpc.scroll.io"],
          blockExplorerUrls: ["https://sepolia-blockscout.scroll.io/"],
        },
      ],
    })
    .catch((error) => {
      console.log(error);
    });
}
