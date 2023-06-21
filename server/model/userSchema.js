const mongoose = require('mongoose');
const bcryptjs = require('bcryptjs');
 
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

// Bcryptjs ka use krke password hash kr rkha hai jaki koi bhi password hack na kr le *********

userSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcryptjs.hash(this.password, 12);
        this.confirmpassword = await bcryptjs.hash(this.confirmpassword, 12);
    }
    next();
});

// Mongoose schema using new mongoose.Schema( command create userSchema and define name, email and all other fields required) *****

// Exporting part of the schema in other fields using mongoose.model and module.exports = ( the part define in const part) ********

const User = mongoose.model('USER', userSchema);

module.exports = User;

// Exporting part of the schema in other fields using mongoose.model and module.exports = ( the part define in const part) ********
//  use (* const User = require('./model/userSchema'); *) for import file userSchema in anyother file *****************************