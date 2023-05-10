const mongoose = require('mongoose');

const alienschema = new mongoose.Schema({

    email: String,
    password : String,

})

module.exports = mongoose.model('User',alienschema)