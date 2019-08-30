const express = require('express');
const connectDB = require('./config/db');

const app = express();
const multer = require('multer')
require('dotenv').config();
const path = require('path')
// connect to database
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.use(multer().single('resume'));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    if (req.method == "OPTIONS") {
        res.writeHead(200);
        res.end();
    } else {
        next();
    }
})

// Define Routes
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/jobs', require('./routes/api/jobs'));
app.use('/api/contact', require('./routes/api/contact'));

// serve static assets in production
    
    app.use(express.static('client/build'));

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })


const PORT = process.env.PORT || 5000;
console.log('PORT', PORT)

app.listen(PORT, () => console.log(`server started on ${PORT}`));