const router = require('express').Router()
const mongo = require('../database')
const proyectModel = require('../models/proyectsModel')

//primera ruta: traer todos los proyectos
//segunda ruta dinamica: traer proyecto por ID

const proyect ={
    title: 'Amokyneti',
    autor: 'Amokyneti',
    members: ['Savino Pozzo', 'Angel Giolitti'],
    type: 'Album',
    date: '1998',
    img: '/img/tapas/amokyneti-tapa.jpg',
    trackList : [
        {
            id: 0,
            src: "/songs/amokyneti/01-arround-the-round.wav"
        },
        {
            id: 1,
            src: "/songs/amokyneti/02-a-preta-samba.wav"
        },
        {
            id: 2,
            src: "/songs/amokyneti/03-ludmila.wav"
        },
        {
            id: 3,
            src: "/songs/amokyneti/04-airland.wav"
        },
        {
            id: 4,
            src: "/songs/amokyneti/05-amokyneti.wav"
        },
        {
            id: 5,
            src: "/songs/amokyneti/06-bellisima.wav"
        },
        {
            id: 6,
            src: "/songs/amokyneti/07-siempre-asi.wav"
        },
        {
            id: 7,
            src: "/songs/amokyneti/08-abasto.wav"
        }
    ]
}


router.get('/', async (req, res) => {
    
    // get proyects []
    
    mongo.initDatabase()
    
    proyectModel.find({}, (err, data)=>{
        try{
            res.send(data)
        }
        catch{
            res.status(400, err)
        }
    })
    

})

router.get('/:id', async (req, res) => {
    
    // get proyect for ID []

    mongo.initDatabase()

    const { id } = req.params    
    try{
        proyectModel.findById(id, (err, data)=>{
            res.send(data)
        })
    }
    catch {
        res.status(400)
    }
})

router.post('/', async (req,res)=>{

    mongo.initDatabase()

    const proj = new proyectModel(proyect)
    try{
        await proj.save()
        console.log('save product')
        res.end()
    }
    catch {
        console.log('error save product')
    }


})

module.exports = router