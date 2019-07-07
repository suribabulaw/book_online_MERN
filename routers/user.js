const express = require('express');
const router  = express.Router();

// import controllers 
 const {singup} = require('../controllers/user')

router.post('/singup', singup)

module.exports = router