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
app.use(cors({
  origin: 'http://localhost:8080',
  methods: 'POST',
  allowedHeaders: 'Content-Type', 
  // Credential: true
}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(morgan('tiny')); 

// Serve Static Files
app.use('/build', express.static(path.resolve(__dirname, '../build')));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  return next();
});

// Serve Root
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname,'../index.html'));
});

app.use('/items', itemRouter); 

app.use('/accounts', userRouter);

app.use('/dashboard', itemRouter); 

// Catch-All Route Handler
app.use((req, res) => {
  console.log('BAD ROUTE');
  return res.status(400).send('Bad Route')
});

// Global Error Handler
// error should include a status, information about error, and a frontend message
app.use((err, req, res) => {
  console.log(err);
  res.status(400).json({error : err});
})

module.exports = app; 
