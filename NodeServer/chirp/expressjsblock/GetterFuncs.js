
const Transaction = require('../BlockchainConfig/TransactionExecution');
const contract = Transaction.contract;



const getNumberofUsers = async () => {
    const tx = await contract.methods.getNumberofUsers().call();
//    console.log(tx);
    return tx;

}

const GetRegisteredCNICs = async() =>{
    const tx = await contract.methods.GetRegisteredCNICs().call();
   // console.log(tx);
    return tx;
}

const GetUserAssetsValue = async(cnic) =>{
    const tx = await contract.methods.GetUserAssetsValue(cnic).call();
 //   console.log(tx);
    return tx;
}

const getUserIncome_M_Y = async(cnic) =>{
    const tx = await contract.methods.getUserIncome_M_Y(cnic).call();
  //  console.log(tx);
    return tx;
}

const getUserPayments = async(cnic,month,year) =>{
    const tx = await contract.methods.getUserPayments(cnic,month,year).call();
 //   console.log(tx);
    return tx;
}
const getUserTotalAssets = async(cnic) =>{
    const tx = await contract.methods.getUserTotalAssets(cnic).call();
 //   console.log(tx);
    return tx;
}



const UsergetCurrentTaxDue = async(cnic) =>{
    const tx = await contract.methods.UsergetCurrentTaxDue(cnic).call();
 //   console.log(tx);
    return tx;
}
const getUser = async(cnic) =>{
    const tx = await contract.methods.getUser(cnic).call();
 //   console.log(tx);
    return tx;
}



module.exports ={getNumberofUsers,GetRegisteredCNICs,GetUserAssetsValue,
    getUserIncome_M_Y,getUserPayments,getUserTotalAssets,
    UsergetCurrentTaxDue,getUser
}
