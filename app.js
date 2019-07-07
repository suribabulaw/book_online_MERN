const express = require('express');
const mongoose = require('mongoose')

// import routers

const route = require('./routers/user')


// configartion  //
const app = express();

require('dotenv').config();

// database 
mongoose.connect( process.env.DATABASE , {
    useNewUrlParser : true ,
    useCreateIndex : true
}).then(() => console.log('db connected'))


// routes 
app.use('/api',route)


// port 
const port = process.env.PORT || 8000

app.listen(port,()=>console.log('server running successfully ' + port))