const { Router } = require('express');
const Schema = require('../model/sChema');
const roter = Router();

roter.get('/add', (req, res) => {
    res.render('add', {
        title: 'add Page',
        page:'Product Add',
        button:'Submit'
    });
});

roter.post('/add', (req, res) => {
    // console.log(req.body);
    const counter = new Schema({
        title: req.body.title,
        author: req.body.author,
        price: req.body.price,
        "meta.reading": req.body.reading,
        "meta.buying": req.body.buying,
        photo: "./img/" + req.body.photo
    });
    counter.save((err, data) => {
        if (err) {
            console.log(err);
        } else {
            // console.log(data);
            res.redirect('/');
        };
    });
});

module.exports = roter;