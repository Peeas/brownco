const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    description: {
        type: String,
        required: true
    },
    file: {
        type: String, 
        required: true
    },
    imagePosition: {
        type: String, 
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },

});
  
  module.exports = Project = mongoose.model('project', ProjectSchema)