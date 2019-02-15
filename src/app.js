const fs = require('fs');
const path = require('path');
const express = require('express');
const { accounts, users, writeJSON } = require('./data');
const accountRoutes = require('./routes/accounts');
const serviceRoutes = require('./routes/services');

const app = express();


app.set('views', path.join(__dirname, 'views')); //configure views/
app.set('view engine', 'ejs'); //set config property for view engine to ejs

app.use(express.static(path.join(__dirname, 'public'))); //find static directory, and serve those files
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.render('index', {title: 'Account Summary', accounts}); //render index view with associated title
});

app.use('/account', accountRoutes); //wire up account and services routers
app.use('/services', serviceRoutes);

app.get('/profile', (req, res) => {
  res.render('profile', {user: users[0]})
})

app.listen(3000, () => {
  console.log('Project running on Port 3000');
});