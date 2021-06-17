var contracts = require('../BlockchainConfig/etheriumconfig');
var Web3js = require('../BlockchainConfig/etheriumcredentials');
var web3 = Web3js.Web3;

const mprivateKey = contracts.privateAddress;
const Contractaddress = contracts.address;
const contract = contracts.contract;
const useraddress = contracts.Useraddress;


const executeTransaction = async(tx) =>{
    const gas = await tx.estimateGas({from: useraddress});
    const gasPrice = await web3.eth.getGasPrice();
    const data = tx.encodeABI();
    const nonce = await web3.eth.getTransactionCount(useraddress);
    var transsuccess = false;


    const signedTx = await web3.eth.accounts.signTransaction(
    {
        to: Contractaddress, 
        data,
        gas,
        gasPrice,
        nonce, 
    },
    mprivateKey
    );
    const receipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
    console.log(`Transaction Successfull hash: ${receipt.transactionHash}`);
    
    while(!transsuccess){
        var rec = await web3.eth.getTransactionReceipt(receipt.transactionHash);
        transsuccess = rec.status;
        console.log(transsuccess);
    }
    console.log(`Transaction Successfull Status: ${transsuccess}`);
    return receipt.transactionHash;
}

module.exports ={executeTransaction,contract}
