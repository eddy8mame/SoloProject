const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const path = require('path');
const morgan = require('morgan');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
// connect to db
mongoose.connect(process.env.URI)
  .then(() => console.log('connected to MongoDB'))
  .catch((e) => console.log('error with MongoDB connection, ', e))

//routes 
const itemRouter = require('./routes/itemRoute');
const userRouter = require('./routes/userRoute');

const app = express(); 

//Middleware
app.use(cookieParser());
app.use(cors());
app.use(morgan('tiny')); 

// Serve Static Files
app.use('/build',express.static(path.resolve(__dirname, '../build')));

// Serve Root
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname,'../index.html'));
});

app.use('/items', itemRouter); 

app.use('/accounts', userRouter);

// Catch-All Route Handler
app.use((req, res) => {
  console.log('PING');
  return res.status(400).send('Bad Route')
});

app.use((err, req, res) => {
  console.log(err); 
})

module.exports = app; 