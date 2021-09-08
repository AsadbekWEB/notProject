const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const example = new Schema({
    title: {
        type: String,
        default: 'Maxsulot nomi',
        required: true
    },
    author: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        default: 0
    },
    meta: {
        buying: {
            type: Number,
            default: 0
        },
        reading: {
            type: Number,
            default: 0
        }
    },
    dataTime: {
        type: Date,
        default: Date.now
    },
    photo:{
        type:String,
    }
});

module.exports = mongoose.model('maxsulot', example);