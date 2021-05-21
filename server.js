const express = require('express');
const cookiePaser = require('cookie-parser');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const routes = require('./src/routes');


const app = express();
const port = process.env.PORT ||  5000;
const url_mongo = process.env.URL ||  "mongodb://192.168.1.111:27017/desafio-uizzy"

mongoose.connect(url_mongo, {
  useUnifiedTopology:true,
  useNewUrlParser: true,
  useFindAndModify: false
}, function(err){
  if(err){
    console.log(err)
  }else{
    console.log("Mongoose connected as successfully.")
  }
  
});

app.use(cors());
app.use(cookiePaser());
app.use(express.json());

app.use(routes);

app.listen(port, function(){
  console.log(`server open at port ${port}`);
});