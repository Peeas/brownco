const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    Description: {
        type: String,
        required: true
    },
    image: {

    },
    date: {
        type: Date,
        default: Date.now
    },

});
  
  module.exports = Post = mongoose.model('job', JobSchema)