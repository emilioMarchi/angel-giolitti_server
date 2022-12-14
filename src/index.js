const express = require('express')
const app = express()

const bodyparser = require('body-parser');
const path = require('path')
require('dotenv').config()
const cors = require('cors');
let corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 204
}

//config
app.set('port', process.env.PORT || '8080')
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors(corsOptions));


//Controllers


//import routes
const projects = require('./routes/projectsRouter');

//use routers
app.use('/projects', projects)

//routes
app.get('/', (req,res) => {
    res.json({'msj':'otros cambios'})
})



app.listen( app.get('port'), ()=>{
    console.log('app in port ' +  app.get('port'))
})