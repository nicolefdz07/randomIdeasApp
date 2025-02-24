const path = require('path');
const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5500;
const connectDB = require('./config/db');

connectDB();

//static folder
app.use(express.static(path.join(__dirname, 'public')));

//body parser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//cors middleware
app.use(cors({
    origin: ['http://localhost:5500', 'http://localhost:3000'],
    credentials: true
}));

app.get('/', (req, res)=>{
    res.json({message: 'Welcome to the RandomIdeas API'});
})

const ideasRouter= require('./routes/ideas');
app.use('/api/ideas', ideasRouter);
app.listen(port, ()=> {console.log(`Server is listening on port ${port}`)});
