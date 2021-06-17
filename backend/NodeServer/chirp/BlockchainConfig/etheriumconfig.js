var Web3js =require( './etheriumcredentials');
var web3 = Web3js.Web3;


const address = "0xd7381897a5be5a770a2ff29c3193f09d5605419c";
const Useraddress = "0xD0f2e537D336ef5a71af1aEf2Ba5173910aAf8aa";
const privateAddress = "2157e7d273aa1c1bd643fa915726d86478374d05cdb682b1250e53edc603a3b1"

const ABI =[
	{
		"constant": false,
		"inputs": [
			{
				"name": "CNIC",
				"type": "uint256"
			},
			{
				"name": "inc",
				"type": "uint256"
			}
		],
		"name": "AddUserIncome",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "CNIC",
				"type": "uint256"
			}
		],
		"name": "RemoveUser",
		"outputs": [
			{
				"name": "",
				"type": "bool"
			}
		],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "CNIC",
				"type": "uint256"
			},
			{
				"name": "month",
				"type": "uint8"
			},
			{
				"name": "year",
				"type": "uint8"
			}
		],
		"name": "getUserPayments",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "CNIC",
				"type": "uint256"
			}
		],
		"name": "UsergetCurrentTaxDue",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getNumberofUsers",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "GetRegisteredCNICs",
		"outputs": [
			{
				"name": "",
				"type": "uint256[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "CNIC",
				"type": "uint256"
			},
			{
				"name": "payment",
				"type": "uint256"
			}
		],
		"name": "AddUserPayment",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "CNIC",
				"type": "uint256"
			},
			{
				"name": "Val",
				"type": "uint256"
			}
		],
		"name": "AddUserAssetsValue",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "CNIC",
				"type": "uint256"
			}
		],
		"name": "getUser",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "CNIC",
				"type": "uint256"
			}
		],
		"name": "getUserTotalAssets",
		"outputs": [
			{
				"components": [
					{
						"name": "currentValue",
						"type": "uint256"
					},
					{
						"name": "TaxApplicable",
						"type": "uint256"
					},
					{
						"name": "PropertyType",
						"type": "string"
					},
					{
						"name": "TaxRate",
						"type": "uint256"
					}
				],
				"name": "",
				"type": "tuple[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "CNIC",
				"type": "uint256"
			},
			{
				"name": "cval",
				"type": "uint256"
			},
			{
				"name": "Taxapp",
				"type": "uint256"
			},
			{
				"name": "PropertyType",
				"type": "string"
			}
		],
		"name": "AddUserAsset",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "CNIC",
				"type": "uint256"
			}
		],
		"name": "GetUserAssetsValue",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "CNIC",
				"type": "uint256"
			},
			{
				"name": "TaxDue",
				"type": "uint256"
			}
		],
		"name": "UsersetCurrentTaxDue",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": false,
		"inputs": [
			{
				"name": "CNIC",
				"type": "uint256"
			},
			{
				"name": "name",
				"type": "string"
			}
		],
		"name": "addUser",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "CNIC",
				"type": "uint256"
			},
			{
				"name": "month",
				"type": "uint8"
			},
			{
				"name": "year",
				"type": "uint8"
			}
		],
		"name": "getUserIncome_M_Y",
		"outputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "constructor"
	}
]
const contract = new web3.eth.Contract(ABI,address); 

 module.exports ={contract,address,Useraddress,privateAddress}

