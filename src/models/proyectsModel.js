const mongoose = require('mongoose');

const proyectModel = mongoose.Schema({
    title: {
        type: String,
        required: true,
        max: 50
    },
    autor: {
        type: String,
        max: 50
    },
    members:  {type:Array},
    type: String,
    date: { type: Date,  date: new Date()},
    img: String,
    trackList : {type:Array}
})

module.exports = mongoose.model('Proyects', proyectModel);