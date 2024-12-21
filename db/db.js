;const mongoose = require('mongoose');

function connectDB() { 
    mongoose.connect(process.env.MONGO_URI, {  })
        .then(() => console.log('connected to the database'))
        .catch(err => console.log(err,"error"));
}

module.exports = connectDB;