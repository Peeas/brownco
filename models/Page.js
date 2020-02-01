const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Project = require('../models/Project');
// Create Schema 
const PageSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    file: {
        type: String, 
        required: true
    },
    meta: {
        title: {
            type: String, 
            required: true
        },
        description: {
            type: String, 
            required: true
        },
    },
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
    date: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Page', PageSchema)