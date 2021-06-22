require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');


const expapp = express();
expapp.use(express.json());
expapp.use(express.urlencoded({ extended: true }));

const port = process.env.PORT || 3000;

dotenv.config();

//connecting mongodb

mongoose.connect(process.env.DATABASE_URL, 
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log("connected to db"))
    .catch((err) => console.log(err))

expapp.use(express.json())

const userRouter = require('../routes/userRouter')
const authRouter = require('../routes/authRouter')
const PostRouter = require('../routes/PostRouter')
expapp.use('/userRouter', userRouter)
expapp.use('/authRouter', authRouter)
expapp.use('/PostRouter', PostRouter)

expapp.listen(port, () => 
console.log('Server has started.. with port: '+port )
);