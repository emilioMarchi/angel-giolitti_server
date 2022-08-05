const mongoose = require('mongoose');

const projectModel = mongoose.Schema({
    _idx : Number,
    year: Number,
    type: String,
    name: String,
    bio: String,
    img: {
        perfil:String,
        portada:String,
    },
    members:  {type:Array},
    albums: Array,
    media:{
        pictures: Array,
        videos: Array, 
    },
    socialMedia:{
        instagram: String,
        facebook: String,
        youtube: String,
        twitter: String
    },
})

module.exports = mongoose.model('Projects', projectModel);