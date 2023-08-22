const contractAddress = '0xF575B36985f4077Ca4a61295F7e3474a673118DA';


const readContractAbi =[
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "initialSupply",
              "type": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "owner",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "spender",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
          }
      ],
      "name": "Approval",
      "type": "event"
  },
  {
      "anonymous": false,
      "inputs": [
          {
              "indexed": true,
              "internalType": "address",
              "name": "from",
              "type": "address"
          },
          {
              "indexed": true,
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "indexed": false,
              "internalType": "uint256",
              "name": "value",
              "type": "uint256"
          }
      ],
      "name": "Transfer",
      "type": "event"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "owner",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "spender",
              "type": "address"
          }
      ],
      "name": "allowance",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "applications",
      "outputs": [
          {
              "internalType": "bool",
              "name": "openApp",
              "type": "bool"
          },
          {
              "internalType": "uint256",
              "name": "applicationId",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "borrower",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "credit_amount",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "interest_rate",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "otherData",
              "type": "string"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "spender",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "approve",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "account",
              "type": "address"
          }
      ],
      "name": "balanceOf",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "name": "borrowers",
      "outputs": [
          {
              "internalType": "address",
              "name": "borrower_public_key",
              "type": "address"
          },
          {
              "internalType": "string",
              "name": "name",
              "type": "string"
          },
          {
              "internalType": "bool",
              "name": "EXISTS",
              "type": "bool"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "interest_rate",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "credit_amount",
              "type": "uint256"
          },
          {
              "internalType": "string",
              "name": "otherData",
              "type": "string"
          }
      ],
      "name": "createApplication",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "string",
              "name": "name",
              "type": "string"
          }
      ],
      "name": "createBorrower",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "decimals",
      "outputs": [
          {
              "internalType": "uint8",
              "name": "",
              "type": "uint8"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "spender",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "subtractedValue",
              "type": "uint256"
          }
      ],
      "name": "decreaseAllowance",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "deposit",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
          }
      ],
      "name": "getApplicationData",
      "outputs": [
          {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
          },
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          },
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
          }
      ],
      "name": "getLoanData",
      "outputs": [
          {
              "internalType": "uint256[]",
              "name": "",
              "type": "uint256[]"
          },
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "",
              "type": "address"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "getNumApplications",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "getNumLoans",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "getTime",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "appId",
              "type": "uint256"
          }
      ],
      "name": "grantLoan",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "spender",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "addedValue",
              "type": "uint256"
          }
      ],
      "name": "increaseAllowance",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
          }
      ],
      "name": "isApplicationOpen",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "account",
              "type": "address"
          }
      ],
      "name": "isBorrower",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "index",
              "type": "uint256"
          }
      ],
      "name": "isLoanOpen",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "lendingPool",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "name": "loans",
      "outputs": [
          {
              "internalType": "bool",
              "name": "openLoan",
              "type": "bool"
          },
          {
              "internalType": "uint256",
              "name": "loanId",
              "type": "uint256"
          },
          {
              "internalType": "address",
              "name": "borrower",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "Lender",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "interest_rate",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "duration",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "principal_amount",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "original_amount",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "amount_paid",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "startTime",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "monthlyCheckPoint",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "appId",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "name",
      "outputs": [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "estimatedInterest",
              "type": "uint256"
          },
          {
              "internalType": "uint256",
              "name": "timeSinceLastPayment",
              "type": "uint256"
          }
      ],
      "name": "repayLoan",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "symbol",
      "outputs": [
          {
              "internalType": "string",
              "name": "",
              "type": "string"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "view",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "transfer",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "sender",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "reciever",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "transfer",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "address",
              "name": "from",
              "type": "address"
          },
          {
              "internalType": "address",
              "name": "to",
              "type": "address"
          },
          {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "transferFrom",
      "outputs": [
          {
              "internalType": "bool",
              "name": "",
              "type": "bool"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [],
      "name": "viewBalance",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
  },
  {
      "inputs": [
          {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
          }
      ],
      "name": "withdraw",
      "outputs": [
          {
              "internalType": "uint256",
              "name": "",
              "type": "uint256"
          }
      ],
      "stateMutability": "payable",
      "type": "function"
  }
]
const getFilterChangesAbi = [
  'event Transfer(address indexed from, address indexed to, uint amount)',
];

export default {
  contractAddress,
  readContractAbi,
  getFilterChangesAbi,
};