import {numberToHex, sanitizeHex} from '@walletconnect/encoding';
import {_TypedDataEncoder} from 'ethers/lib/utils';

import CONTRACT_VALUES from '../constants/Contract';
import {ethers} from 'ethers';

export const handelDeposit = async ({web3Provider, method}, amount) => {
  if (!web3Provider) {
    throw new Error('web3Provider not connected');
  }

  if (!amount) {
    throw new Error('No amount found');
  }
  console.log('amount ===>', amount);
  // Get the signer from the Provider
  const signer = web3Provider.getSigner();

  const contractAddress = CONTRACT_VALUES.contractAddress; // Replace with the actual contract address
  // Contract ABI and address
  const contract = new ethers.Contract(
    contractAddress,
    CONTRACT_VALUES.readContractAbi,
    signer,
  );

  const txResponse = await contract.deposit(amount);
  const transactionHash = txResponse.hash;

  console.log('transactionHash is ' + transactionHash);

  // Wait for the transaction to be mined (optional)
  const receipt = await txResponse.wait();
  console.log('Transaction was mined in block:', receipt.blockNumber);

  return {
    method,
    address,
    valid: true,
    result: transactionHash,
  };
};

export const handelBorrow = async ({web3Provider, method}, address) => {
  console.log('handelBorrow. ===>', address);
  if (!web3Provider) {
    throw new Error('web3Provider not connected');
  }

  // Get the signer from the Provider
  const signer = web3Provider.getSigner();

  if (!address) {
    throw new Error('No address found');
  }
  const contractAddress = CONTRACT_VALUES.contractAddress; // Replace with the actual contract address
  // Contract ABI and address
  const contract = new ethers.Contract(
    contractAddress,
    CONTRACT_VALUES.readContractAbi,
    signer,
  );

  const txResponse = await contract.isBorrower(address);
  const transactionHash = txResponse.hash;

  console.log('transactionHash is ' + transactionHash);

  // Wait for the transaction to be mined (optional)
  const receipt = await txResponse.wait();
  console.log('Transaction was mined in block:', receipt.blockNumber);

  return {
    method,
    address,
    valid: true,
    result: transactionHash,
  };
};
