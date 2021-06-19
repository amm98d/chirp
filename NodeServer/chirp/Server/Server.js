require('dotenv').config()


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



//connecting mongodb
//console.writeline(process.env.DATABASE_URL);
mongoose.connect(process.env.DATABASE_URL,{useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
.then(()=>console.log("connected to db"))
.catch((err)=>console.log(err))

expapp.use(express.json())

const userRouter=require('../routes/userRouter')
const authRouter=require('../routes/authRouter')
expapp.use('/userRouter',userRouter)
expapp.use('/authRouter',authRouter)

expapp.listen(3000,()=>console.log('Server has started..'))

/*
expapp.get("/",(req,res) =>{
   npm
    res.sendFile(path.join(__dirname + '/WelcomePage/welcome.html'));
});



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



expapp.listen(port, () =>{
    console.log(`Server is up on ${port}`);
});*/