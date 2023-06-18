const mongoose = require('mongoose');
 
// Mongoose schema using new mongoose.Schema( command create userSchema and define name, email and all other fields required) ***** 

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNo: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    confirmpassword: {
        type: String,
        required: true
    }
})

// Mongoose schema using new mongoose.Schema( command create userSchema and define name, email and all other fields required) *****

// Exporting part of the schema in other fields using mongoose.model and module.exports = ( the part define in const part) ********

const User = mongoose.model('USER', userSchema);

module.exports = User;

// Exporting part of the schema in other fields using mongoose.model and module.exports = ( the part define in const part) ********
//  use (* const User = require('./model/userSchema'); *) for import file userSchema in anyother file *****************************