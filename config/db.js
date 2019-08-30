const mongoose = require('mongoose');
const config = require('config');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODBURI, {
            useNewUrlParser: true,
            useCreateIndex: true
        });
        console.log('MongoDB Connected...')
    } catch(err) {
        console.error(err.message);
        // exit process with failure
        process.exit(1)
    }
}

module.exports = connectDB;