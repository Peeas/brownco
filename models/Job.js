const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema 
const JobSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    requirements: [
        {
            type: String,
            required: true
        }
    ],
    responsibilities: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
  
  module.exports = Post = mongoose.model('job', JobSchema)