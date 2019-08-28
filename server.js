const express = require('express');
const connectDB = require('./config/db');

const app = express();

// connect to database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

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

app.get('/', (req, res) => res.send('api running'))

// Define Routes

app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/jobs', require('./routes/api/jobs'));
app.use('/api/contact', require('./routes/api/contact'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on ${PORT}`));