import {ethers} from 'ethers';

import CONTRACT_VALUES from '../constants/Contract';

export const readContract = async ({
  web3Provider,
  method,
})=> {
  if (!web3Provider) {
    throw new Error('web3Provider not connected');
  }

  const contract = new ethers.Contract(
    CONTRACT_VALUES.contractAddress,
    CONTRACT_VALUES.readContractAbi,
    web3Provider,
  );
  const [address] = await web3Provider.listAccounts();

  // Read contract information
  const name = await contract.name();
  const symbol = await contract.symbol();

  // Format the USDT for displaying to the user
  const balance = await contract.balanceOf(address);
  const formattedBalance = ethers.utils.formatUnits(balance, 6);

  return {
    method,
    address: CONTRACT_VALUES.contractAddress,
    valid: true,
    result: `name: ${name}, symbol: ${symbol}, balance: ${formattedBalance}`,
  };
};
