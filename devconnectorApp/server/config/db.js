const config = require('config');
const mongoose = require('mongoose');

// Config lib will help load our configuration which are required in the application.
const db = "mongodb://localhost:27017/devConnector";

const connectDB = async () => {
    // to connect to mongodb
    try {
        console.log("before the connect method");
        await mongoose.connect(db, {});
        console.log("mongodb connected");

        // we will write the code where we may get an error.
    } 
    catch (err) {
        // we will handle the error: we will provide the solution to the error/problem
        console.log(err.message);
    }
};

// const: keyword : reserve word
// it will not allow us to change the value of the variable.

module.exports = connectDB;


/* connectDB();
console.log("mongodb uri " + db);
// to check if connected to mongodb via mongoose.

 */
