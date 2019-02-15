const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

app.set('views', path.join(__dirname, 'views')); //configure views/
app.set('view engine', 'ejs'); //set config property for view engine to ejs

app.use(express.static(path.join(__dirname, 'public'))); //find static directory, and serve those files

app.get('/', (req, res) => {
  res.render('index', {title: 'Index'}); //render index view with associated title
});

app.listen(3000, () => {
  console.log('Project running on Port 3000');
});