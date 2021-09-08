const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const rIndex = require('./routes/index');
const rAdd = require('./routes/add');
const app = express();
const port = 3000;
const chalk = require('chalk');

//mongoose connnect
mongoose.connect('mongodb+srv://asadbek:WEBDASTURCHI@cluster0.54ysr.mongodb.net/test', { useNewUrlParser: true, useUnifiedTopology: true });

//mongoose set
const db = mongoose.connection;
db.on('open', () => {
    console.log('mongoose run');
});
db.on('error', (err, data) => {
    console.log('mongoose err run', err);
});

//body-parser start
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//engine name
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

//public connect
app.use(express.static(path.join(__dirname, 'public')));

// home page
app.use(rIndex);
app.use(rAdd);

app.listen(port, (err, data) => {
    console.log( chalk.bgBlack.red(`server http://localhost:${port} da ishladi`));
});



//backendda git bilan ishlash

//  git status
//  git status
//  git init
//  git status
// git add .
// git config user.name
// git config user.name ''
// git config user.email
// git config user.email ''
// git commit -m "ichiga izoh"
// gitk
// git branch
// git  git branch fox
// git checkout master
// git checkout fox
// git  commit -m ''

