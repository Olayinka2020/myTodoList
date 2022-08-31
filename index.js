const express = require('express');
const app = express();
require('dotenv').config()
const mongoose = require('mongoose');
// const connect = require('./')

// Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources.
const cors = require('cors')
const todoRoute = require('./routes/todoRouter')

// middleware
app.use(cors());
app.use(express.json())
app.use(todoRoute);
// app.use('/todo', todoRoute);

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    app.listen(8000, ()=>{
        console.log(`Listening on port 8000`);
    })  
})

// app.listen(3000, ()=>{
//     console.log(`Listening on port 3000`);
// })


// console.log('working');