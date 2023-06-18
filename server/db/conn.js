const mongoose = require('mongoose');
// Mongoose connection ************************

const DB = process.env.DATABASE;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection successful !!!");
}).catch((err) => {
    console.log(err);  
})

// Mongoose connection ************************