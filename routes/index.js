const { Router } = require('express');
const roter = Router();
const Schema = require('../model/sChema');

roter.get('/', (req, res) => {
    Schema.find({}, (err, data) => {
        if (err) console.log(err)
        else {
            // console.log(data);
            res.render('index', {
                title: 'Home Page',
                datas: data
            });
        };
    });
});

//update data

roter.get('/product/:id', (req, res) => {
    Schema.findById(req.params.id, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.render('add', {
                title: 'Product Update',
                datas: data,
                page: 'Product Update Page',
                button: 'Update',
            });
        };
    });
});

//delete settings


// roter.get('/remove/:id', (req, res) => {
//     Schema.findById(req.params.id, (err, data) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.render('add', {
//                 title: 'Product Delete',
//                 datas: data,
//                 page: 'Product Delete Page',
//                 button:'Delete',
//             });
//         };
//     });
// });
roter.get('/remove/:id', (req, res) => {
    Schema.findByIdAndDelete(req.params.id, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        };
    });
});

//remove data setting

roter.post('/remove/:id', (req, res) => {
    const deleteId = { _id: req.params.id };

    Schema.findById(deleteId, (err, datas) => {
        datas.remove((err, data) => {
            res.redirect('/');
        });
    });
});

roter.delete('/remove', (req, res) => {
    dbModel.findById("6126ff78d7f02904a88331bd", (err, datas) => {
        datas.remove((err, data) => {
            res.json(data);
        });
    });
});

roter.post('/product/:id', (req, res) => {
    const updateDb = {};

    // console.log(req.body)

    updateDb.title = req.body.title,
        updateDb.author = req.body.author,
        updateDb.price = req.body.price,
        updateDb.meta = { buying: req.body.buying },
        updateDb.meta = { reading: req.body.reading },  //bu 2 xil yozish usuli updateDb.meta.reading(req.body.reading) shu 
        updateDb.photo = '/img/' + req.body.photo
    const updateId = { _id: req.params.id };

    Schema.update(updateId, updateDb, (err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        };
    });
});

//delete data



roter.post('/', (req, res) => {
    res.send('Home Page post');
});

module.exports = roter;