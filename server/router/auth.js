const express = require('express');
const bcrypt = require('bcryptjs');
const token = require("jsonwebtoken");

// Route define so make app.js code more read able *******

const router = express.Router();

require('../db/conn');
const User = require('../model/userSchema');

router.get('/', (req, res) => {
    res.send('router hello');
});

//  Registeration ka code :--------------------------------

router.post('/register', async (req, res) => {
    const { name, email, phoneNo, work, password, confirmpassword } = req.body;
    
    if (!name || !email || !phoneNo || !work || !password || !confirmpassword)
    {
        return res.status(422).json({ error: 'Fill all fields plz !!!!' });
    }

    // User.findOne({ email: email }).then((userExist) => {
    //     if (userExist) {
    //         res.status(422).json({ error: 'User already exist !!' });
    //     }

    //     const user = new User({ name, email, phoneNo, work, password, confirmpassword });
        
    //     user.save().then(() => {
    //         res.json({ error: 'new user created' });
    //     }).catch((err) => {
    //         res.json({ error: 'cannot create' });
    //     })
    // }).catch((err) => {
    //     console.log(err);
    // });

    // async await function for create user data and create new data ***********************

    try {
        const userExist = await User.findOne({ email: email });
        
        if (userExist) {
           return res.status(422).json({ error: 'User already exist !!' });
        } else if (password != confirmpassword) {
            return res.json({ message: 'Not created' });
        } else {
            
            
        const user = new User({ name, email, phoneNo, work, password, confirmpassword });
   
    //   yha pr wo bcyptjs wala code use hora hai *************
        
        await user.save();

            res.json({ error: 'new user created' });
            
        }


    } catch (err) {
        console.log(err);
    }
});



//  Login ka code :------------------------------------------

router.post('/signin', async (req, res) => {
       
        try {
            const { email, password} = req.body;

            if (!email || !password)
            {
               return res.json({ message : 'Invalid'})
            }
            
            const userLogin = await User.findOne({ email: email });

//  Token part ************************************************************************************************
            
            const token = await userLogin.generateAuthToken();
            console.log(token);
            console.log(userLogin);

//  Token part ************************************************************************************************

//   Cookies store krane ka tarika backend me. check krane ke liye ki ye authenticated user hai ya nhi ********
            
            res.cookie('jwttoken', token, {
                expires: new Date(Date.now() + 5822000),
                httpOnly: true
            })

//   Cookies store krane ka tarika backend me. check krane ke liye ki ye authenticated user hai ya nhi ********

            if (userLogin)
            {const ismatch = await bcrypt.compare(password, userLogin.password);

            if (!ismatch)
            {
                res.json({ message: 'Invalid' });
                }else
            {res.json({ message: 'Successful' });
                
                }

            }else {
                     res.json({ message: 'Invalid' });
                }
        } catch (err) {
            console.log(err);
        }
    });


module.exports = router;