const PayableTrans = require('../expressjsblock/PayableTrans');
const GetterFunctions = require('../expressjsblock/GetterFuncs');
const express = require('express');
const expapp = express();
expapp.use( express.json() );       
expapp.use(express.urlencoded({ extended: true})); 
const path = require('path');
const port = process.env.PORT || 8000;
const {MongoClient} = require('mongodb');

expapp.get("/",(req,res) =>{
   npm
    res.sendFile(path.join(__dirname + '/WelcomePage/welcome.html'));
});



//Server Making Transactions
expapp.post("/AddUser", async(req,res) =>{
     console.log(" Request Recieved for adding User: ");
     console.log(req.body);
     var trans = await PayableTrans.AddUser(req.body.cnic,req.body.name);
     console.log(trans);
     res.send(trans);
 
 });


 expapp.post("/AddUserAsset", async(req,res) =>{
     console.log("Requestrd Recieved for adding User Asset: ");
     console.log(req.body);

     var trans = await PayableTrans.AddUserAsset(req.body.cnic,req.body.cval,req.body.taxapp,req.body.ptype);
     console.log(trans);
     res.send(trans);

 
 });
 expapp.post("/AddUserAssetsValue", async(req,res) =>{
    // console.log(req.body);
     console.log(req.body);
     var trans = await PayableTrans.AddUserAssetsValue(req.body.cnic,req.body.val);
     console.log(trans);
     res.send(trans);
 
 });
 expapp.post("/AddUserIncome", async(req,res) =>{
    // console.log(req.body);
     console.log(req.body);
     var trans = await PayableTrans.AddUserIncome(req.body.cnic,req.body.inc);
     console.log(trans);
     res.send(trans);
 
 });
 expapp.post("/AddUserPayment", async(req,res) =>{
    // console.log(req.body);
     console.log(req.body);
     var trans = await PayableTrans.AddUserPayment(req.body.cnic,req.body.pay);
     console.log(trans);
     res.send(trans);
 
 });
 expapp.post("/RemoveUser", async(req,res) =>{
    // console.log(req.body);
     console.log(req.body);
     var trans = await PayableTrans.RemoveUser(req.body.cnic);
     console.log(trans);
     res.send(trans);
 
 });
 expapp.post("/UsersetCurrentTaxDue", async(req,res) =>{
    // console.log(req.body);
     console.log(req.body);
     var trans = await PayableTrans.UsersetCurrentTaxDue(req.body.cnic,req.body.tax);
     console.log(trans);
     res.send(trans);
 
 });
 
// Getter responses
 expapp.post("/getNumberofUsers", async(req,res) =>{
    
     console.log(req.body);
     var bal = await GetterFunctions.getNumberofUsers();
     res.send(bal);
 
 });
 expapp.post("/GetRegisteredCNICs", async(req,res) =>{
   
    console.log("Getcnics");
    
     var comp = await GetterFunctions.GetRegisteredCNICs();
     res.send(comp);
 
 });
 expapp.post("/GetUserAssetsValue", async(req,res) =>{
    // console.log(req.body);
     console.log(req.body);
     var bal = await GetterFunctions.GetUserAssetsValue(req.body.cnic);
     res.send(bal);
 
 });
 expapp.post("/getUserIncome_M_Y", async(req,res) =>{
    // console.log(req.body);
     console.log(req.body);
     var bal = await GetterFunctions.getCompanyName(req.body.cnic);
     res.send(bal);
 
 });
 expapp.post("/getUserPayments", async(req,res) =>{
    // console.log(req.body);
     console.log(req.body);
     var bal = await GetterFunctions.getUserName(req.body.cnic,req.body.month,req.body.year);
     res.send(bal);
 
 });
 expapp.post("/getUserTotalAssets", async(req,res) =>{
    // console.log(req.body);
     console.log(req.body);
     var bal = await GetterFunctions.getUserTotalAssets(req.body.cnic);
     res.send(bal);
 
 });
 expapp.post("/UsergetCurrentTaxDue", async(req,res) =>{
    // console.log(req.body);
     console.log(req.body);
     var bal = await GetterFunctions.getCompamnyUsers(req.body.cnic);
     res.send(bal);
 
 });
 expapp.post("/getUser", async(req,res) =>{
    // console.log(req.body);
     console.log(req.body);
     var bal = await GetterFunctions.getTrustedListOfUser(req.body.cnic);
     res.send(bal);
 
 });
 
expapp.listen(port, () =>{
    console.log(`Server is up on ${port}`);
});