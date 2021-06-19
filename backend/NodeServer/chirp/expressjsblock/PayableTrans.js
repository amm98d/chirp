
const Transaction = require('../BlockchainConfig/TransactionExecution');
const executeTransaction  = Transaction.executeTransaction;
const contract = Transaction.contract;




const AddUser = async (cnic,name) => {
    const tx = contract.methods.addUser(cnic,name);
    return await executeTransaction(tx);
}
const AddUserAsset = async(cnic,cval,taxapp,ptype) =>{
  

    const tx = contract.methods.AddUserAsset(cnic,cval,taxapp,ptype);
    return await executeTransaction(tx);
}
const AddUserAssetsValue = async(cnic,val) =>{
    const tx = contract.methods.AddUserAssetsValue(cnic,val);
    return await executeTransaction(tx);
}
const AddUserIncome = async(cnic,inc) =>{
    const tx = contract.methods.AddUserIncome(cnic,inc);
    return await executeTransaction(tx);
}
const AddUserPayment = async(cnic,pay) =>{
    const tx = contract.methods.AddUserPayment(cnic,pay);
    return await executeTransaction(tx);
}
const RemoveUser = async(cnic) =>{
    const tx = contract.methods.RemoveUser(cnic);
    return await executeTransaction(tx);
}

const UsersetCurrentTaxDue= async(cnic,tax) =>{
    const tx = contract.methods.UsersetCurrentTaxDue(cnic,tax);
    
    return await executeTransaction(tx);
}


module.exports ={AddUser,AddUserAsset,AddUserAssetsValue,
    AddUserIncome,AddUserPayment,RemoveUser,
    UsersetCurrentTaxDue

}
