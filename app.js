const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cookeParser = require('cookie-parser');
const morgan = require('morgan')


// import routers

const route = require('./routers/user')


// configartion api  //
const app = express();


// middleware 
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cookeParser())

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