const mongoose =require('mongoose');

const crypto = require('crypto');
const uuid = require('uuid/v1');
const UserSchema  = new mongoose.Schema({
    name : {
        type : String,
        trim:true,
        required:true,
        maxlength:32
    },
    email : {
        type: String,
        trim:true,
        required:true,
        unique:32
    },
    hashed_password : {
        type : String,
        required:true
    },
    about : {
        type : String,
        trim :true,
    },
    salt :String ,
    role : {
        type : String,
        default : 0
    },
    history : {
        type : Array ,
        default : []
    }
},
{ timestamps :true}
);


// virtual fields 


UserSchema.virtual('password')
         .set(function(password){
               this._password = password 
               this.salt = uuid()
               this.hashed_password = this.encrypt(password)
})
        .get(function(){
              return this._password
         })

UserSchema.methods = {
    encrypt :function(password){
        if(!password) return '' ;
        try {
            return crypto.createHmac('sha256', this,salt)
                          .update(password)
                          .digest('hex');
                 
        }catch(err){
            return ''
        }
    }
}

module.exports =mongoose.model("User",UserSchema)