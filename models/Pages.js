const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema 
const PagesSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    title: {
        type: String, 
        required: true
    },
    image: {
        type: String, 
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});
  
  module.exports = Page = mongoose.model('job', PagesSchema)