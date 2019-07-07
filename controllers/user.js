const User = require('../models/user')
exports.singup = (req,res) => {

    console.log('req.body' , req.body)
    try {const user = new User(req.body);
     user.save((err,user) =>{
         if(err){
             return res.status(400).json({
                 err
             })
         }
        res.status(200).json({user})
     })}
   catch(err){
       console.error(err.message)
   }
}
