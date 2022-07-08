const express = require('express')
const app = express()

const bodyparser = require('body-parser');
const path = require('path')
require('dotenv').config()
const cors = require('cors');
const mongoose = require('mongoose')
let corsOptions = {
    origin: 'http://localhost:3000', // Reemplazar con dominio
    optionsSuccessStatus: 200,
}

//config
app.set('port', process.env.PORT || '8080')
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors(corsOptions));


//Controllers


//import routers
const proyects = require('./routes/proyectsRouter');

//use routers
app.use('/proyects', proyects)

//routes
app.get('/', (req,res) => {
    res.json({'msj':'todo ok'})
})



app.listen( app.get('port'), ()=>{
    console.log('app in port ' +  app.get('port'))
})