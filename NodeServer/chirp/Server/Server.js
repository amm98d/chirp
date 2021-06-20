require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

const expapp = express();
expapp.use(express.json());
expapp.use(express.urlencoded({ extended: true }));
const path = require('path');
const port = process.env.PORT || 8000;

dotenv.config();

//connecting mongodb
//console.writeline(process.env.DATABASE_URL);
mongoose.connect(process.env.DATABASE_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
    .then(() => console.log("connected to db"))
    .catch((err) => console.log(err))

expapp.use(express.json())

const userRouter = require('../routes/userRouter')
const authRouter = require('../routes/authRouter')
const PostRouter = require('../routes/PostRouter')
expapp.use('/userRouter', userRouter)
expapp.use('/authRouter', authRouter)
expapp.use('/PostRouter', PostRouter)
expapp.listen(3000, () => console.log('Server has started..'))