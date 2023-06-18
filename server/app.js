// Import all depedencies *********************
const express = require('express');
const dotenv = require('dotenv'); 
const app = express();

// Dotenv *************************************

dotenv.config({ path: './config.env' });

// Require mongo file *************************

require('./db/conn');

app.use(express.json());

// Link Router ********************************

app.use(require('./router/auth'));




// Dotenv ***************************************
const port = process.env.PORT;


// Middleware *********************************

const middleware = (req, res, next) => {
    console.log("hello from middleware");
    next();
}


// Middleware *********************************

// Routes *************************************


app.get("/about", middleware, (req, res) => {
    res.send("hello from about me");
});

app.get("/contact", (req, res) => {
    res.send("hello from login");
});

app.get("/signin", (req, res) => {
    res.send("hello signup");
});

app.get("/signup", (req, res) => {
    res.send("hello from logout");
});

// Routes *************************************

// Port connection ****************************

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
})

// Port connection ****************************