const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// Schema : variable
// mongoose.Schema ; will help to create the schema object
const userSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, // will not allow duplicates
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        required: false,
    },
    date: {
        type: Date,
        default: Date.now, // today's data with respect to server.==GMT 0 tO
    },
});
// Schema specification :

module.exports = mongoose.model("user", userSchema);