const express = require('express');
const expapp = express();
expapp.use( express.json() );       
expapp.use(express.urlencoded({ extended: true})); 
const path = require('path');
const port = process.env.PORT || 8000;


expapp.get("/",(req,res) =>{
   
    res.sendFile(path.join(__dirname + '/WelcomePage/welcome.html'));
});






expapp.listen(port, () =>{
    console.log(`Server is up on ${port}`);
});