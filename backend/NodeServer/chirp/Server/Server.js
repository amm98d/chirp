<<<<<<< HEAD
//const PayableTrans = require('../expressjsblock/PayableTrans');
//const GetterFunctions = require('../expressjsblock/GetterFuncs');
//const express = require('express');
//const expapp = express();
//expapp.use( express.json() );       
//expapp.use(express.urlencoded({ extended: true})); 
//const path = require('path');
//const port = process.env.PORT || 8000;
//const {MongoClient} = require('mongodb');

require('dotenv').config()
const express=require('express');
const expapp=express();
=======
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

const expapp = express();
expapp.use( express.json() );       
expapp.use(express.urlencoded({ extended: true})); 
const path = require('path');
const port = process.env.PORT || 8000;

dotenv.config();

>>>>>>> ba0e98fb5d3361e1bcbce4e0ab474121c0a6b1c9

//connecting mongodb
const mongoose=require('mongoose');
mongoose.connect(process.env.DATABASE_URL,{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
.then(()=>console.log("connected to db"))
.catch((err)=>console.log(err))

expapp.use(express.json())

const userRouter=require('./routes/userRouter')

expapp.use('/userRouter',userRouter)


expapp.listen(3000,()=>console.log('Server has started..'))

/*
expapp.get("/",(req,res) =>{
   npm
    res.sendFile(path.join(__dirname + '/WelcomePage/welcome.html'));
});



<<<<<<< HEAD
//Server Making Transactions
expapp.post("/AddUser", async(req,res) =>{
     console.log(" Request Recieved for adding User: ");
     console.log(req.body);const userRouter=require('./routes/userRouter')
const adminRouter=require('./routes/adminRouter')
const categoryRouter=require('./routes/categoryRouter')
const productRouter=require('./routes/productRouter')
const orderRouter=require('./routes/orderRouter')
//middleware
app.use('/userRouter',userRouter)
app.use('/adminRouter',adminRouter)
app.use('/categoryRouter',categoryRouter)
app.use('/productRouter',productRouter)
app.use('/orderRouter',orderRouter)

app.listen(3000,()=>console.log('Server has started..'))
     var trans = await PayableTrans.AddUser(req.body.cnic,req.body.name);
     console.log(trans);
     res.send(trans);
 
 });
=======
>>>>>>> ba0e98fb5d3361e1bcbce4e0ab474121c0a6b1c9



expapp.listen(port, () =>{
    console.log(`Server is up on ${port}`);
});*/