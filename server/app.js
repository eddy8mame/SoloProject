const express = require('express');
const path = require('path');

require('dotenv').config();

const app = express(); 

// Serve Static Files
app.use('/build',express.static(path.resolve(__dirname, '../build')));

// Serve Root
app.get('/', (req, res) => {
  return res.status(200).sendFile(path.resolve(__dirname,'../index.html'));
});

// Catch-All Route Handler
app.use((req, res) => {
  console.log('PING');
  return res.status(400).send('Bad Route')
});

app.use((err, req, res) => {
  console.log(err); 
})

module.exports = app; 