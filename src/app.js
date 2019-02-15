const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

app.set('views', path.join(__dirname, 'views')); //configure views/
app.set('view engine', 'ejs'); //set config property for view engine to ejs

app.use(express.static(path.join(__dirname, 'public'))); //find static directory, and serve those files

const accountData = fs.readFileSync(
  path.join(__dirname, 'json', 'accounts.json'), 'utf8'
);
const accounts = JSON.parse(accountData);
const userData = fs.readFileSync(
  path.join(__dirname, 'json', 'users.json'), 'utf8'
);
const users = JSON.parse(userData);

app.get('/', (req, res) => {
  res.render('index', {title: 'Account Summary', accounts}); //render index view with associated title
});
app.get('/savings', (req, res) => {
  res.render('account', {account: accounts.savings});
});
app.get('/checking', (req, res) => {
  res.render('account', {account: accounts.checking});
});
app.get('/credit', (req, res) => {
  res.render('account', {account: accounts.credit});
});
app.get('/profile', (req, res) => {
  res.render('profile', {user: users[0]})
})

app.listen(3000, () => {
  console.log('Project running on Port 3000');
});